import FirstColumn from "./FirstColumn";
import ImageColumn from "./ImageColumn";
import ThirdColumn from "./ThirdColumn";
import { fetchDataFromAPIforSection } from "../../utils/helpers";

export default async function Footer() {
  const data = await fetchDataFromAPIforSection("dataFooter", "onlyValues");
  if (!data || data.length === 0) return null;

  const {
    titleDisclaimer,
    textDisclaimer,
    titleClientService,
    textClientService,
  } = data[0] || {};

  return (
    <div className="mb-4">
      {/*franja superior de espacio*/}
      <div className="w-full h-8"></div>
      {/*línea blanca/transparente*/}
      <div className="w-full container bg-slate-300 h-1 justify-self-center"></div>
      {/*datos inferiores*/}
      <div className="w-full py-4">
        <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-3 text-gray-200 ">
          {/*Contenido visible sólo en mobil*/}
          <div className="block sm:hidden">
            <ImageColumn />
          </div>
          {/* Contenido de la primera columna */}
          <FirstColumn
            titleDisclaimer={titleDisclaimer}
            textDisclaimer={textDisclaimer}
          />
          {/* Contenido de la segunda columna */}
          <div className="hidden sm:block">
            <ImageColumn />
          </div>
          {/* Contenido de la tercera columna */}
          <ThirdColumn
            titleClientService={titleClientService}
            textClientService={textClientService}
          />
        </div>
      </div>
    </div>
  );
}
