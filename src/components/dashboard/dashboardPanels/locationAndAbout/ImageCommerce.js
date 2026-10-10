import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBase from "../DashboardPanelBase";

export default async function ImageCommerce() {
  return <DashboardPanelBase objectDefinition={menuDefinition.imageCommerce} />;
}
