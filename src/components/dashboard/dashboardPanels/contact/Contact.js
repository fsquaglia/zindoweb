import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBase from "../DashboardPanelBase";

export default async function Contact() {
  return <DashboardPanelBase objectDefinition={menuDefinition.dataContact} />;
}
