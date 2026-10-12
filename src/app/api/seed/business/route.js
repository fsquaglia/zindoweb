import { NextResponse } from "next/server";
import { seedBusinesses } from "@/utils/firebase/fetchFirebase";

export async function POST() {
  try {
    await seedBusinesses();

    return NextResponse.json({
      success: true,
      message: "Base de datos inicializada con éxito.",
    });
  } catch (error) {
    console.error("Error al inicializar BDD:", error);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}