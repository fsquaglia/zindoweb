import { NextResponse } from "next/server";
import { getDocument } from "@/utils/firebase/fetchFirebase";

export async function GET(request) {
  try {
    const domain = new URL(request.url).searchParams.get("domain")?.trim().toLowerCase();

    if (!domain) {
      return NextResponse.json(
        { success: false, error: "El dominio es obligatorio." },
        { status: 400 }
      );
    }

    const dictionaryData = await getDocument("config", "domainDictionary");

    if (!dictionaryData) {
      return NextResponse.json(
        { success: false, error: "No se encontró el diccionario de dominios." },
        { status: 404 }
      );
    }

    const mappings = dictionaryData.mappings;

    if (!mappings || typeof mappings !== "object" || Array.isArray(mappings)) {
      return NextResponse.json(
        { success: false, error: "El diccionario no contiene mappings válidos." },
        { status: 500 }
      );
    }

    const businessId = mappings[domain];

    if (typeof businessId !== "string" || !businessId.trim()) {
      return NextResponse.json(
        { success: false, error: "No hay un dominio registrado." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, businessId });
  } catch (error) {
    console.error("Error al obtener comercios permitidos:", error);

    return NextResponse.json(
      { success: false, error: "No se pudieron obtener los comercios permitidos." },
      { status: 500 }
    );
  }
}