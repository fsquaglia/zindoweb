import dynamic from "next/dynamic";
import { getBusinessDataForDomain } from "@/utils/getBusinessDataForDomain";

// 1. IMPORTACIONES DINÁMICAS (Carga perezosa real)
const Location = dynamic(() => import("@/components/location/Location"));
const ComponentHeroMain01 = dynamic(
  () => import("@/components/main/ComponentHeroMain01"),
);
const ComponentHeroMain02 = dynamic(
  () => import("@/components/main/ComponentHeroMain02"),
);
const ComponentFeatures01 = dynamic(
  () => import("@/components/features/ComponentFeatures01"),
);
const Carousel01 = dynamic(() => import("@/components/carousel/Carousel01"));
const History = dynamic(() => import("@/components/history/History"));
const Team = dynamic(() => import("@/components/team/Team"));
const Contact = dynamic(() => import("@/components/contact/Contact"));
const Footer = dynamic(() => import("@/components/footer/Footer"));

// 2. DICCIONARIO COMPLETAMENTE PLANO (Sin categorías, sin variantes)
const COMPONENTES_DISPONIBLES = {
  componentHeroMain01: ComponentHeroMain01,
  componentHeroMain02: ComponentHeroMain02,
  componentFeatures01: ComponentFeatures01,
  carousel: Carousel01,
  history: History,
  team: Team,
  location: Location,
  contact: Contact,
  footer: Footer,
};

const mapOnlyValues = (data) => {
  // Si es un array, mapea cada elemento
  if (Array.isArray(data)) {
    return data.map((item) => {
      const mappedItem = {};
      for (const key in item) {
        if (
          item.hasOwnProperty(key) &&
          typeof item[key] === "object" &&
          item[key] !== null &&
          item[key].value !== undefined
        ) {
          mappedItem[key] = item[key].value;
        }
      }
      return mappedItem;
    });
  }

  // Si es un objeto, mapea sus propiedades
  const mappedData = {};
  for (const key in data) {
    if (
      data.hasOwnProperty(key) &&
      typeof data[key] === "object" &&
      data[key] !== null &&
      data[key].value !== undefined
    ) {
      mappedData[key] = data[key].value;
    }
  }
  return mappedData;
};

export default async function TenantHomePage({ params }) {
  const resolvedParams = await params;
  const dominioActual = resolvedParams._tenant; // ejemplo norte.localhost

  // Obtenemos el businessId y los datos públicos del negocio para renderizar la página.
  const tenantData = await getBusinessDataForDomain(dominioActual);
  if (!tenantData) {
    notFound();
  }
  const { businessData } = tenantData;
  const components = businessData?.landingConfig?.components || [];
  const orderedComponents = [...components].sort((componentA, componentB) => {
    const orderA = Number.isFinite(componentA?.order)
      ? componentA.order
      : Number.POSITIVE_INFINITY;
    const orderB = Number.isFinite(componentB?.order)
      ? componentB.order
      : Number.POSITIVE_INFINITY;

    return orderA - orderB;
  });

  return (
    <div
      className={`w-full flex flex-col items-center min-h-screen gap-16 ${businessData?.landingConfig?.theme.navbar || ""}`}
    >
      <main className="w-full flex flex-col gap-32 items-center">
        {orderedComponents.map((component, index) => {
          // Buscamos directamente en nuestra lista plana
          const ComponenteFinal = COMPONENTES_DISPONIBLES[component.id];

          // Si la BDD pide un componente que no existe o lo escribiste mal, lo ignora y no rompe la página
          if (!ComponenteFinal) return null;

          const onlyValuesData = mapOnlyValues(component.data);
          return (
            <section
              key={`${component.id}-${index}`}
              id={component.id}
              className="w-full"
            >
              <ComponenteFinal data={onlyValuesData} />
            </section>
          );
        })}
      </main>
    </div>
  );
}
