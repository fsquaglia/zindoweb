import { NextResponse } from "next/server";
import { getDocument } from "@/utils/firebase/fetchFirebase";

export async function GET() {
  try {
    const typesDocument = await getDocument("config", "dataTypes");

    if (!typesDocument) {
      return NextResponse.json(
        { success: false, error: "No se encontró el documento de tipos." },
        { status: 404 },
      );
    }

    const sortedTypes = Object.fromEntries(
      Object.entries(typesDocument.mappings).sort(([keyA, typeA], [keyB, typeB]) => {
        const activeOrder =
          Number(typeB.isActive === true) - Number(typeA.isActive === true);

        if (activeOrder !== 0) {
          return activeOrder;
        }

        const nameOrder = String(typeA.name ?? "").localeCompare(
          String(typeB.name ?? ""),
          "es",
        );
        return nameOrder || keyA.localeCompare(keyB);
      }),
    );

    return NextResponse.json({
      success: true,
      types: sortedTypes,
    });
  } catch (error) {
    console.error("Error al obtener los tipos de negocios:", error);

    return NextResponse.json(
      {
        success: false,
        error: "No se pudieron obtener los tipos de negocios.",
      },
      { status: 500 },
    );
  }
}
