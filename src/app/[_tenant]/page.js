// import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
// import { ref, get, child } from "firebase/database";
// import { realtimeDB } from "@/firebase/config";

// Configuración de la agencia "norte_automotores"
const agenciaNorteAutomotores = {
  nombre: "Norte Automotores",
  landingComponents: ["main", "carousel", "features"],
  // landingComponents: ["main", "features", "location", "footer"],
};

// 1. IMPORTACIONES DINÁMICAS (Carga perezosa real)
const Location = dynamic(() => import("@/components/location/Location"));
const Main = dynamic(() => import("@/components/main/Main"));
const Features = dynamic(() => import("@/components/features/Features"));
const Carousel01 = dynamic(() => import("@/components/carousel/Carousel01"));
const History = dynamic(() => import("@/components/history/History"));
const Team = dynamic(() => import("@/components/team/Team"));
const Contact = dynamic(() => import("@/components/contact/Contact"));
const Footer = dynamic(() => import("@/components/footer/Footer"));

// 2. DICCIONARIO COMPLETAMENTE PLANO (Sin categorías, sin variantes)
const COMPONENTES_DISPONIBLES = {
  main: Main,
  features: Features,
  carousel: Carousel01,
  history: History,
  team: Team,
  location: Location,
  contact: Contact,
  footer: Footer,
};

export default async function TenantHomePage({ params }) {
  const { _tenant } = await params;
  const tenantKey = _tenant.replace(/\./g, "_");

  // Traemos la info de la agencia
  // const dbRef = ref(realtimeDB);
  // const snapshot = await get(child(dbRef, `landings_info/${tenantKey}`));

  // if (!snapshot.exists()) {
  //   notFound();
  // }

  // const configAgencia = snapshot.val();
  const configAgencia = {}; //! eliminar luego de probar
  // Obtenemos el array plano de la BDD (si no existe, dejamos un array vacío)
  // ! descomentar la línea que sigue ya que estamos probando con la agencia "norte_automotores" y no con la BDD
  // const landingComponents = configAgencia.landingComponents || [];
  const landingComponents = agenciaNorteAutomotores.landingComponents || [];
  console.log("landingComponents:", landingComponents);

  return (
    <div
      className="w-full flex flex-col items-center min-h-screen gap-16"
      style={{
        "--color-primario": configAgencia.colores?.primario || "#06b6d4",
        "--color-secundario": configAgencia.colores?.secundario || "#0f172a",
      }}
    >
      <main className="w-full flex flex-col gap-32 items-center">
        {landingComponents.map((componentId, index) => {
          // Buscamos directamente en nuestra lista plana
          const ComponenteFinal = COMPONENTES_DISPONIBLES[componentId];

          // Si la BDD pide un componente que no existe o lo escribiste mal, lo ignora y no rompe la página
          if (!ComponenteFinal) return null;

          return (
            <section
              key={`${componentId}-${index}`}
              id={componentId}
              className="w-full"
            >
              <ComponenteFinal datos={configAgencia} />
            </section>
          );
        })}
      </main>
    </div>
  );
}
