import { NextResponse } from "next/server";
import { getDocumentsByType } from "@/utils/firebase/fetchFirebase";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type")?.trim();

    if (!type) {
      return NextResponse.json(
        { success: false, error: "El type es obligatorio." },
        { status: 400 },
      );
    }

    const businesses = await getDocumentsByType("businesses", type);

    if (!businesses.length) {
      return NextResponse.json(
        { success: false, error: "No se encontraron negocios con ese tipo." },
        { status: 404 },
      );
    }

    const publicBusinesses = businesses.map((business) =>
      Object.fromEntries(
        Object.entries(business).filter(
          ([key]) => key !== "admins" && key !== "sensitiveInfo",
        ),
      ),
    );

    return NextResponse.json({
      success: true,
      businesses: publicBusinesses,
    });
  } catch (error) {
    console.error("Error al obtener la información del negocio:", error);

    return NextResponse.json(
      {
        success: false,
        error: "No se pudieron obtener los datos del negocio.",
      },
      { status: 500 },
    );
  }
}
