import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBase from "../DashboardPanelBase";

export default async function Footer() {
  return <DashboardPanelBase objectDefinition={menuDefinition.dataFooter} />;
}
