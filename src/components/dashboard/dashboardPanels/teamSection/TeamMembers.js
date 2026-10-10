import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBase from "../DashboardPanelBase";

export default async function TeamMembers() {
  return (
    <DashboardPanelBase objectDefinition={menuDefinition.teamMembersSection} />
  );
}
