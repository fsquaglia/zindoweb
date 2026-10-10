import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBase from "../DashboardPanelBase";

export default async function FeaturesSection() {
  return <DashboardPanelBase objectDefinition={menuDefinition.catalog} />;
}
