import { collection, query, where, getDocs } from "firebase/firestore";
// import { firestoreDB } from "@/firebase/config"; // Asegurate de que la ruta a tu config coincida
import { notFound } from "next/navigation";

// Función para ir a buscar la agencia a Firestore por su dominio
async function obtenerDatosAgencia(dominio) {
  try {
    // Buscamos en la colección "concesionarias" el documento donde "dominio" sea igual al parámetro
    const concesionariasRef = collection(firestoreDB, "concesionarias");
    const q = query(concesionariasRef, where("dominio", "==", dominio));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null; // No existe la agencia en la BDD
    }

    // Como el dominio es único, tomamos el primer resultado hallado
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error("Error buscando la agencia en Firestore:", error);
    return null;
  }
}

export default async function TenantLayout({ children, params }) {
  // En Next.js 16 resolvedParams debe ser esperado (awaited)
  const resolvedParams = await params;
  const dominioActual = resolvedParams._tenant;

  // Hacemos la consulta a Firestore
  //? const agenciaConfig = await obtenerDatosAgencia(dominioActual);
  const agenciaConfig = "barbiniautomotores"; //! Simulación de que la agencia existe, para probar el layout y pasarle los datos a las páginas hijas

  // Si el proxy dejó pasar la URL pero no está dada de alta en Firestore, lanzamos un 404
  if (!agenciaConfig) {
    notFound();
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        "--color-primario": agenciaConfig.colores?.primario || "#06b6d4",
        "--color-secundario": agenciaConfig.colores?.secundario || "#0f172a",
      }}
    >
      {/* 
        Pasamos los datos de la agencia a las páginas hijas mediante composición.
        Podés usar contextos de React si necesitás que las páginas lean estos datos directamente.
      */}
      {children}
    </div>
  );
}
