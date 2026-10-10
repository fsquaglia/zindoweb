import { dashboardMenu } from "@/utils/SettingInitialData";

export function getAllowedViewIds(role) {
  const menu = dashboardMenu[role] || [];
  // solo los que showOption === true y existen id
  return menu
    .filter((item) => item && item.showOption !== false && item.id)
    .map((item) => item.id);
}
