import { getBusinessById } from "@/utils/getBusinessById";
import DashboardPanelBaseClient from "@/components/dashboard/dashboardPanels/DashboardPanelBaseClient";

async function page({ params }) {
  const { _agenciaId, _idComponent } = await params;

  const agenciaData = await getBusinessById(_agenciaId);

  if (!agenciaData) {
    return <div>No se encontró la agencia.</div>;
  }

  const businessData = agenciaData?.business || {};
  // console.log("business data " + JSON.stringify(businessData));

  const component = businessData?.landingConfig?.components?.find(
    (comp) => comp.id === _idComponent,
  );

  if (!component) {
    return <div>No se encontró el componente.</div>;
  }

  const data = component?.data || [];
  // Verificar si data es nulo, indefinido o un array vacío
  if (!data || (Array.isArray(data) && data.length === 0))
    return <div> No hay datos disponibles para este componente. </div>;

  return (
    <div className="w-full">
      {`Componente ${component.name} `}
      <DashboardPanelBaseClient
        nodeRealtimeName={component.id}
        initialData={data}
      />
    </div>
  );
}

export default page;
