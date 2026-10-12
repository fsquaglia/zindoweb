// proxy.js
import { NextResponse } from "next/server";

export async function proxy(req) {
  const url = req.nextUrl;
  let hostname = req.headers.get("host") || "";

  // Limpiamos el puerto en caso de estar en entorno de desarrollo (localhost:3000)
  hostname = hostname.split(":")[0].toLowerCase();

  // Dejamos pasar recursos estáticos y endpoints sin validación de dominio.
  if (
    url.pathname === "/_next" ||
    url.pathname.startsWith("/_next/") ||
    url.pathname === "/api" ||
    url.pathname.startsWith("/api/") ||
    /\.[^/]+$/.test(url.pathname)
  ) {
    return NextResponse.next();
  }

  const isAdminRoute =
    url.pathname === "/admin-dashboard" ||
    url.pathname.startsWith("/admin-dashboard/");

  // Ecosistema global / marketplace (Zindo).
  if (hostname === "zindo.com.ar" || hostname === "zindo.localhost") {
    if (isAdminRoute) return NextResponse.next();

    const saasUrl = new URL(`/home-saas${url.pathname}`, req.url);
    saasUrl.search = url.search;
    return NextResponse.rewrite(saasUrl);
  }

  // Validamos el dominio de la concesionaria antes de resolver su ruta tenant.
  const endpointUrl = new URL("/api/allowed-business", req.url);
  endpointUrl.searchParams.set("domain", hostname);

  try {
    const response = await fetch(endpointUrl); 
    //const response = await fetch(endpointUrl, { cache: "no-store" }); //! dejamos cache: "no-store" o no??

    if (!response.ok) {
      if (response.status >= 500) {
        console.error(
          `Error al validar el dominio: ${response.status} ${response.statusText}`
        );
        return NextResponse.json(
          { success: false, error: "La validación del dominio no está disponible." },
          { status: 503 }
        );
      }

      return NextResponse.rewrite(new URL("/404", req.url));
    }

    // Los dominios de negocios solo acceden al dashboard tras validarse.
    if (isAdminRoute) return NextResponse.next();

    const tenantPath = `/${hostname}${url.pathname === "/" ? "" : url.pathname}`;
    const tenantUrl = new URL(tenantPath, req.url);
    tenantUrl.search = url.search;
    return NextResponse.rewrite(tenantUrl);
  } catch (error) {
    console.error("Error al validar el dominio:", error);
    return NextResponse.json(
      { success: false, error: "La validación del dominio no está disponible." },
      { status: 503 }
    );
  }
}
