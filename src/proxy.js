// proxy.js
import { NextResponse } from "next/server";

export async function proxy(req) {
  const url = req.nextUrl;
  let hostname = req.headers.get("host") || "";

  // Limpiamos el puerto en caso de estar en entorno de desarrollo (localhost:3000)
  hostname = hostname.split(":")[0].toLowerCase();

  // 2. FILTRO DE SEGURIDAD: Dejar pasar archivos estáticos, imágenes, favicon y rutas de la API de Next
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 3. RUTA DEL DASHBOARD DE ADMINISTRACIÓN (Mantenemos la ruta limpia del sistema)
  if (url.pathname.startsWith("/admin-dashboard")) {
    return NextResponse.next();
  }

  // 4. ECOSISTEMA GLOBAL / MARKETPLACE (Zindo)
  if (hostname === "zindo.com.ar" || hostname === "zindo.localhost") {
    return NextResponse.rewrite(new URL(`/home-saas${url.pathname}`, req.url));
  }

  // 5. VALIDACIÓN DE INQUILINOS (Concesionarias)
  const endpointUrl = new URL("/api/allowed-business", req.url);
  endpointUrl.searchParams.set("domain", hostname);

  try {
    const response = await fetch(endpointUrl, { cache: "no-store" }); //! dejamos cache: "no-store" o no??

    if (!response.ok) {
      console.error(`Error al validar el dominio: ${response.status} ${response.statusText}`);
      return NextResponse.rewrite(new URL("/404", req.url));
    }

    const { businessId } = await response.json();

    if (typeof businessId !== "string" || !businessId) {
      return NextResponse.rewrite(new URL("/404", req.url));
    }

    const routingUrl = new URL("/api/business-routing", req.url);
    routingUrl.searchParams.set("businessId", businessId);
    const routingResponse = await fetch(routingUrl, { cache: "no-store" });

    if (!routingResponse.ok) {
      console.error(`Error al obtener el direccionamiento: ${routingResponse.status} ${routingResponse.statusText}`);
      return NextResponse.rewrite(new URL("/404", req.url));
    }

    const { direccionamiento } = await routingResponse.json();

    if (typeof direccionamiento !== "string" || !/^[a-z0-9-]+$/i.test(direccionamiento)) {
      return NextResponse.rewrite(new URL("/404", req.url));
    }

    const rutaInterna =
      url.pathname === "/" ? `/${direccionamiento}` : `/${direccionamiento}${url.pathname}`;
    return NextResponse.rewrite(new URL(`/${hostname}${rutaInterna}`, req.url));
  }

  catch (error) {
    console.error("Error al validar el dominio:", error);
    return NextResponse.rewrite(new URL("/404", req.url));
  }
}
