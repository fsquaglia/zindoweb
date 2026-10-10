import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

function DataInfo({ dataLegalCommerce, dataImageCommerce }) {
  const { domicilio, localidad, provincia, pais } = dataLegalCommerce[0] ?? {};
  const { urlImage, alt } = dataImageCommerce[0] ?? {};

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-row items-center w-full group lg:hover:bg-gray-900 lg:transition-colors lg:duration-300">
        {/* Texto a la izquierda */}
        <div className="flex flex-col justify-center items-center lg:items-start p-4 flex-1">
          <span className="font-semibold">{dataLegalCommerce.fantasia}</span>
          <span>{domicilio}</span>
          <span>{[localidad, provincia, pais].filter(Boolean).join(", ")}</span>
        </div>

        {/* Flecha a la derecha */}
        <div className="hidden lg:flex items-center justify-end h-full p-4 lg:transition-transform lg:duration-300 lg:group-hover:translate-x-2">
          <IoIosArrowForward size={40} />
        </div>
      </div>
      {/* Imagen del comercio (solo en desktop) */}
      {urlImage && (
        <div className="hidden lg:block">
          <Image
            src={urlImage}
            alt={alt ?? "Imagen del comercio"}
            width={800}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default DataInfo;
