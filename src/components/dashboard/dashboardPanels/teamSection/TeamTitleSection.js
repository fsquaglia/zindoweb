import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBase from "../DashboardPanelBase";

export default async function TeamTitleSection() {
  return (
    <DashboardPanelBase objectDefinition={menuDefinition.teamTitleSection} />
  );
}
