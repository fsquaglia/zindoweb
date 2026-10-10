import { fetchDataFromAPIforSection } from "@/utils/helpers";
import ContactClient from "./ContactClient";

export default async function Contact() {
  const data = await fetchDataFromAPIforSection("dataContact");

  if (!data || data.length === 0) return null;

  return <ContactClient contact={data} />;
}
