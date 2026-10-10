import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBase from "../DashboardPanelBase";

export default async function AboutUs() {
  return <DashboardPanelBase objectDefinition={menuDefinition.aboutUs} />;
}
