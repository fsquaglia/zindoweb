import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBase from "../DashboardPanelBase";

export default async function DataLegalCommerce() {
  return (
    <DashboardPanelBase objectDefinition={menuDefinition.dataLegalCommerce} />
  );
}
