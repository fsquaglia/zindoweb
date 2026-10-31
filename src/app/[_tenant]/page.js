import dynamic from "next/dynamic";
import { getBusinessDataForDomain } from "@/utils/getBusinessDataForDomain";
import ComponentHeroVideo01 from "@/components/main/ComponentHeroVideo01";
import ComponentCompanyIdentity01 from "@/components/history/ComponentCompanyIdentity01";

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
const ComponentFeatures02 = dynamic(
  () => import("@/components/features/ComponentFeatures02"),
);
const Carousel01 = dynamic(() => import("@/components/carousel/Carousel01"));
const History = dynamic(() => import("@/components/history/History"));
const Team = dynamic(() => import("@/components/team/Team"));
const Contact = dynamic(() => import("@/components/contact/Contact"));
const Footer = dynamic(() => import("@/components/footer/Footer"));
const ComponentUsed01 = dynamic(
  () => import("@/components/used/ComponentUsed01"),
);
const ComponentOfficialBrands01Motos = dynamic(
  () => import("@/components/brands/OfficialBrands01"),
);
const ComponentOfficialBrands01Autos = dynamic(
  () => import("@/components/brands/OfficialBrands01"),
);
const ComponentFinanceFeatures01 = dynamic(
  () => import("@/components/features/ComponentFinanceFeatures01"),
);

// 2. DICCIONARIO COMPLETAMENTE PLANO (Sin categorías, sin variantes)
const COMPONENTES_DISPONIBLES = {
  componentHeroMain01: ComponentHeroMain01,
  componentHeroMain02: ComponentHeroMain02,
  componentFeatures01: ComponentFeatures01,
  componentFeatures02: ComponentFeatures02,
  carousel: Carousel01,
  history: History,
  team: Team,
  location: Location,
  contact: Contact,
  footer: Footer,
  componentUsed01: ComponentUsed01,
  componentOfficialBrands01Motos: ComponentOfficialBrands01Motos,
  componentOfficialBrands01Autos: ComponentOfficialBrands01Autos,
  componentFinanceFeatures01: ComponentFinanceFeatures01,
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

  //   tenantdata  {
  //   businessId: 'biz_norte_002',
  //   businessData: {
  //     id: 'biz_norte_002',
  //     currentDomain: 'norteautomotores.com.ar',
  //     name: 'Norte Automotores',
  //     description: 'Encontrá autos nuevos y usados en Norte Automotores. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próximo vehículo.',
  //     type: 'vehiculos',
  //     landingConfig: { theme: [Object], components: [Array] }
  //   }
  // }

  // ***************************************************************************************
  //   landingConfig {
  //   theme: {
  //     navbar: 'bg-white border-slate-200 text-slate-800',
  //     button: 'bg-blue-600 hover:bg-blue-700 text-white',
  //     footer: 'bg-slate-100 text-slate-600',
  //     horizontalBar: 'bg-blue-600 text-white',
  //     background: 'bg-white'
  //   },
  //   components: [
  //     {
  //       id: 'componentUsed01',
  //       type: 'vendeTuUsado',
  //       order: 300,
  //       data: [Array]
  //     },
  //     {
  //       id: 'componentHeroMain02',
  //       type: 'mainHeroSecundary',
  //       order: 100,
  //       data: [Array]
  //     },
  //     {
  //       id: 'componentFeatures02',
  //       type: 'featuresHorizontal',
  //       order: 300,
  //       data: [Array]
  //     }
  //   ]
  // }
  // ***************************************************************************************
  // ? data de algún comonente
  // console.log(tenantData.businessData.landingConfig.components[0].data);
  // [
  // {
  //   tituloGeneral: {
  //     value: 'Recibimos tu vehículo usado',
  //     showInputEdit: true,
  //     textInputEdit: 'Título general de la sección',
  //     inputEditOrder: 'a',
  //     limitCharacters: 50
  //   }
  // },
  // {
  //   titulo: {
  //     value: 'Rápido BDD',
  //     showInputEdit: true,
  //     textInputEdit: 'Título de la tarjeta 1',
  //     inputEditOrder: 'a',
  //     limitCharacters: 50
  //   },...
  // ***************************************************************************************
  // ? data de algún comonente ya mapeado con mapOnlyValues
  // [
  // { tituloGeneral: 'Recibimos tu vehículo usado' },
  // {
  //   titulo: 'Rápido BDD',
  //   descripcion: 'Amplia variedad de 0km disponibles',
  //   urlImage: 'https://images.unsplash.com/photo-1578182731845-259d92df3708?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  // },
  // {
  //   titulo: 'Sencillo BDD',
  //   descripcion: 'Tus datos están protegidos, vendé tu vehículo sin riesgos. BDD',
  //   urlImage: 'https://images.unsplash.com/photo-1728885714581-ff2c95e4c1b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  // },...

  const theme = tenantData.businessData.landingConfig.theme || {};
  // theme ya se pasa al componente como un objeto (ver detalles en SettingInitialData)
  // no hace falta importar CONFIG_TEMAS en los componentes
  // theme = {
  //   navbar: 'bg-slate-900 border-slate-800 text-slate-100',
  //   button: 'bg-cyan-500 hover:bg-cyan-600 text-slate-950',
  //   footer: 'bg-slate-950 text-slate-500'......
  // }

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
    <div className={`w-full flex flex-col items-center min-h-screen gap-16}`}>
      <ComponentHeroVideo01 theme={theme} />
      <ComponentCompanyIdentity01 theme={theme} />

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
              <ComponenteFinal data={onlyValuesData} theme={theme} />
            </section>
          );
        })}
      </main>
    </div>
  );
}
