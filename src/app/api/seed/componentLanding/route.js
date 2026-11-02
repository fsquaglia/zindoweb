// import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { allowedComponents } from "@/utils/SettingInitialData";
import { addComponentToBusiness, getDocument } from "@/utils/firebase/fetchFirebase";


export async function POST(request) {
	try {
		// const session = await getServerSession(authOptions);
		// if (!session?.user) {
		// 	return NextResponse.json(
		// 		{ success: false, error: "Debe iniciar sesión." },
		// 		{ status: 401 },
		// 	);
		// }

		let body;
		try {
			body = await request.json();
		} catch {
			return NextResponse.json(
				{ success: false, error: "El cuerpo de la solicitud no es válido." },
				{ status: 400 },
			);
		}

		const componentId =
			typeof body?.componentId === "string"
				? body.componentId.trim()
				: "";
		const businessId =
			typeof body?.businessId === "string" ? body.businessId.trim() : "";

		if (!componentId || !businessId) {
			return NextResponse.json(
				{
					success: false,
					error: "componentId y businessId son obligatorios.",
				},
				{ status: 400 },
			);
		}

		const component = allowedComponents.find(
			(allowedComponent) =>
				allowedComponent?.id === componentId ||
				allowedComponent?.type === componentId,
		);

		if (!component) {
			return NextResponse.json(
				{ success: false, error: "El componente no está permitido." },
				{ status: 400 },
			);
		}

        const business = await getDocument("businesses", businessId);
        if (!business) {
            return NextResponse.json(
                { success: false, error: "No se encontró el business indicado." },
                { status: 404 },
            );
        }
		

         //   const businessDocument = businessesSnapshot.docs[0];
		// const business = businessDocument.data();
		// const isSuperadmin = session.user.role === "superadmin";
		// const isBusinessAdmin =
		// 	session.user.role === "admin" &&
		// 	Array.isArray(business.admins) &&
		// 	business.admins.includes(session.user.id);
		// if (!isSuperadmin && !isBusinessAdmin) {
		// 	return NextResponse.json(
		// 		{
		// 			success: false,
		// 			error: "No tienes permiso para modificar este business.",
		// 		},
		// 		{ status: 403 },
		// 	);
		// }

		await addComponentToBusiness(
			"businesses",
			business.id,
			component,
		);

		return NextResponse.json({
			success: true,
			componentId: component.id,
			businessId: business.id,
		});
	} catch (error) {
		console.error("Error agregando componente al business:", error);

		return NextResponse.json(
			{ success: false, error: "No se pudo agregar el componente." },
			{ status: 500 },
		);
	}
}
