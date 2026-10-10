import MapCommerce from "./MapCommerce";
import AboutUs from "./AboutUs";
import DataInfo from "./DataInfo";
import { fetchDataFromAPIforSection } from "@/utils/helpers";

export default async function Location() {
  const aboutUsData = await fetchDataFromAPIforSection(
    "dataAboutUs",
    "onlyValues",
  );
  const dataLegalCommerce = await fetchDataFromAPIforSection(
    "dataLegalCommerce",
    "onlyValues",
  );
  const dataImageCommerce = await fetchDataFromAPIforSection(
    "dataImageCommerce",
    "onlyValues",
  );
  const dataMapCommerceSRCIframe = await fetchDataFromAPIforSection(
    "dataMapCommerceSRCIframe",
    "onlyValues",
  );

  if (
    !aboutUsData ||
    aboutUsData.length === 0 ||
    !dataLegalCommerce ||
    dataLegalCommerce.length === 0 ||
    !dataImageCommerce ||
    dataImageCommerce.length === 0 ||
    !dataMapCommerceSRCIframe ||
    dataMapCommerceSRCIframe.length === 0
  )
    return null;

  return (
    <div className="w-full  border-y-1 border-gray-700 mx-20 flex flex-col lg:flex-row justify-self-center max-w-7xl">
      <div className="lg:w-1/3 flex flex-col items-center justify-center gap-2">
        <DataInfo
          dataLegalCommerce={dataLegalCommerce}
          dataImageCommerce={dataImageCommerce}
        />
        <AboutUs aboutUs={aboutUsData} />
      </div>
      <div className="lg:w-2/3">
        <MapCommerce iframe={dataMapCommerceSRCIframe} />
      </div>
    </div>
  );
}
