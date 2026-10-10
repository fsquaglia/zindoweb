import DashboardPanelSection from "@/ui/DashboardPanelSection";
import { fetchDataFromAPIforSection } from "@/utils/helpers";
import ErrorThinkHuman from "./ErrorThinkHuman";
import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBaseClient from "./DashboardPanelBaseClient";

export default async function DashboardPanelBase({ objectDefinition }) {
  //verificar que objectDefinition sea un objeto y tenga la propiedad nodeRealtimeName
  if (
    !objectDefinition ||
    typeof objectDefinition !== "object" ||
    !objectDefinition.nodeRealtimeName
  ) {
    return (
      <ErrorThinkHuman
        errorData={"Argumento recibido fuera de formato"}
        componentName={"DasboardPanelBase.js"}
      />
    );
  }

  const { titlePanel, descriptionPanel } =
    menuDefinition[objectDefinition.id] || {};

  const data = await fetchDataFromAPIforSection(
    objectDefinition.nodeRealtimeName,
    "withMetadata",
  );
  // Verificar si data es nulo, indefinido o un array vacío
  if (!data || (Array.isArray(data) && data.length === 0))
    return (
      <ErrorThinkHuman
        errorData={"Parece que la base de datos no quiso cooperar esta vez"}
        componentName={
          "DashboardPanelBase.jsx - " +
          "nodo realtime: " +
          objectDefinition.nodeRealtimeName
        }
      />
    );

  return (
    <DashboardPanelSection title={titlePanel} description={descriptionPanel}>
      <DashboardPanelBaseClient
        initialData={data}
        nodeRealtimeName={objectDefinition.nodeRealtimeName}
        key={objectDefinition.nodeRealtimeName}
      />
    </DashboardPanelSection>
  );
}
