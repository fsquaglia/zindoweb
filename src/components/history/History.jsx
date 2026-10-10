import HistoryViewer from "./HistoryViewer";
import { fetchDataFromAPIforSection } from "@/utils/helpers";

export default async function History() {
  const data = await fetchDataFromAPIforSection("dataHistory");

  if (!data || data.length === 0) return null;
  return <HistoryViewer data={data} />;
}
