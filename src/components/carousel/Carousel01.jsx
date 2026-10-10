import { fetchDataFromAPIforSection } from "@/utils/helpers";
import CarouselClient from "./CarouselClient";

export default async function Carousel01() {
  const fetchCarouselSection = async (sectionName) => {
    try {
      return await fetchDataFromAPIforSection(sectionName, "onlyValues", {
        returnDefaultOnError: true,
      });
    } catch (error) {
      console.error(`Error loading carousel section (${sectionName}):`, error);
      return null;
    }
  };

  const [dataLogosMarcas, dataTextCarouselLogos] = await Promise.all([
    fetchCarouselSection("dataLogosMarcas"),
    fetchCarouselSection("dataTextCarouselLogos"),
  ]);

  return (
    <CarouselClient logos={dataLogosMarcas} textData={dataTextCarouselLogos} />
  );
}
