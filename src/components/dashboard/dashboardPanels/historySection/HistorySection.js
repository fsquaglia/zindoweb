import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBase from "../DashboardPanelBase";

export default async function HistorySection() {
  return (
    <DashboardPanelBase objectDefinition={menuDefinition.historySection} />
  );
}
