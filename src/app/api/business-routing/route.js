import { NextResponse } from "next/server";
import { getDocument } from "@/utils/firebase/fetchFirebase";

export async function GET(request) {
  try {
    const businessId = new URL(request.url).searchParams.get("businessId")?.trim();

    if (!businessId) {
      return NextResponse.json(
        { success: false, error: "El identificador del comercio es obligatorio." },
        { status: 400 }
      );
    }

    const business = await getDocument("businesses", businessId);

    if (!business) {
      return NextResponse.json(
        { success: false, error: "No se encontró el comercio." },
        { status: 404 }
      );
    }

    if (typeof business.type !== "string" || !/^[a-z0-9-]+$/i.test(business.type)) {
      return NextResponse.json(
        { success: false, error: "El comercio no tiene un tipo de direccionamiento válido." },
        { status: 422 }
      );
    }

    return NextResponse.json({ success: true, direccionamiento: business.type });
  } catch (error) {
    console.error("Error al obtener el direccionamiento del comercio:", error);

    return NextResponse.json(
      { success: false, error: "No se pudo obtener el direccionamiento del comercio." },
      { status: 500 }
    );
  }
}