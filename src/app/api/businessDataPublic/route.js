import { NextResponse } from "next/server";
import { getDocument } from "@/utils/firebase/fetchFirebase";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const businessId = searchParams.get("businessId")?.trim();

    if (!businessId) {
      return NextResponse.json(
        { success: false, error: "El businessId es obligatorio." },
        { status: 400 }
      );
    }

    const businessData = await getDocument("businesses", businessId);

    if (!businessData) {
      return NextResponse.json(
        { success: false, error: "No se encontró la información del negocio." },
        { status: 404 }
      );
    }

    // Retornamos los datos públicos del negocio, excluyendo las claves privadas.
    // Aquí puedes agregar otras claves que no deban exponerse públicamente.
    const publicBusinessData = Object.fromEntries(
      Object.entries(businessData).filter(
        ([key]) => key !== "admins" && key !== "sensitiveInfo"
      )
    );

    return NextResponse.json({
      success: true,
      businessData: publicBusinessData,
    });
  } catch (error) {
    console.error("Error al obtener la información del negocio:", error);

    return NextResponse.json(
      { success: false, error: "No se pudieron obtener los datos del negocio." },
      { status: 500 }
    );
  }
}

