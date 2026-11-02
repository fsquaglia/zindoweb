import { BiCollection } from "react-icons/bi";
import Link from "next/link";
import dynamic from "next/dynamic"; // Importamos dynamic para carga diferida del componente hijo
const HeroSlider = dynamic(() => import("./HeroSlider")); // Importamos el componente hijo interactivo

export default async function ComponentHeroMain02({ data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }
  const firstLine = data[0].firstLine || "¡Bienvenido a la web!";
  const secondLine = data[0].secondLine || "Encuentra lo que buscas.";
  const ctaText = data[0].callToActionText || "Artículos disponibles";
  const ctaLink = data[0].callToActionLink || "/"; // devuelve p.ej #vehicles así como está escrito

  const objectData = data[0] || {};

  // Extracción dinámica e inteligente de las imágenes
  const imagenesArray = Object.keys(objectData)
    .filter((key) => key.startsWith("urlImage")) // Filtra solo las llaves que empiezan con 'urlImage'
    .sort() // Opcional: Asegura que queden ordenadas numéricamente (urlImage1, urlImage2...)
    .map((key) => objectData[key]); // Obtiene el valor (la URL) de cada llave filtrada

  // Si no hay imágenes en la BDD, mostramos un fondo oscuro base
  if (imagenesArray.length === 0) {
    return (
      <div className="w-full h-screen bg-slate-950 flex items-center justify-center text-slate-500">
        Sin imágenes configuradas
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* COMPONENTE HIJO: Se encarga del pase dinámico con blur */}
      <HeroSlider imagenes={imagenesArray} />

      {/* CONTENIDO FIJO: No cambia ni se mueve durante la transición */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] tracking-tight max-w-4xl">
            {firstLine}
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-2xl">
            {secondLine}
          </p>

          <Link
            href="/catalogo"
            className="mt-8 flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition duration-300 shadow-lg hover:bg-red-700 hover:scale-105"
          >
            <BiCollection className="text-xl" />
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
