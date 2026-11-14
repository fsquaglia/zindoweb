import { getDocument } from "@/utils/firebase/fetchFirebase";

export async function GET(request) {
  const documentName = request.nextUrl.searchParams.get("id");

  if (!documentName) {
    return Response.json(
      { error: "El parámetro id es obligatorio" },
      { status: 400 },
    );
  }

  try {
    const business = await getDocument("businesses", documentName);

    if (!business) {
      return Response.json(
        { error: "Business no encontrado" },
        { status: 404 },
      );
    }
    return Response.json({ success: true, business });
  } catch (error) {
    return Response.json(
      { error: "Error al obtener el business" },
      { status: 500 },
    );
  }
}
