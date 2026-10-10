import Image from "next/image";
import { fetchDataFromAPIforSection } from "@/utils/helpers";
import { BiCollection } from "react-icons/bi";
import Link from "next/link";

export default async function Main() {
  const data = await fetchDataFromAPIforSection("dataHeroMain");
  if (!data || data.length === 0) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {data[0]?.urlImage && (
        <Image
          src={data[0].urlImage}
          alt="Vehículo destacado"
          fill
          priority
          className="object-cover w-full h-full"
        />
      )}
      {/* Overlay opcional para oscurecer un poco la imagen */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white [text-stroke:2px_black]">
          {data[0].firstLine || "¡Bienvenido a la web!"}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white drop-shadow-[0_0_4px_black]">
          {data[0].secondLine || "Encuentra lo que buscas."}
        </p>
        <Link
          href="/catalogo"
          className="mt-6 flex cursor-pointer flex-row items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <BiCollection />
          {data[0].callToActionText || "Artículos disponibles"}
        </Link>
      </div>
    </div>
  );
}
