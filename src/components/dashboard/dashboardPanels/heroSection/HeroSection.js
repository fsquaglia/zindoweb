import { menuDefinition } from "@/utils/SettingInitialData";
import DashboardPanelBase from "../DashboardPanelBase";

export default async function HeroSection() {
  return <DashboardPanelBase objectDefinition={menuDefinition.heroSection} />;
}
