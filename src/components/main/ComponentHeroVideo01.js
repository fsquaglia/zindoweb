import { BiCollection } from "react-icons/bi";
import Link from "next/link";
import VideoSpeedController from "./VideoSpeedController"; // 👈 Importamos el controlador invisible

export default async function ComponentHeroMain02({ data = [] }) {
  const videoUrl =
    data?.urlVideo ||
    "https://res.cloudinary.com/htbghtmt/video/upload/v1793197116/VideoMotos01.mp4";
  const idVideoUnico = "hero-video-motos-zindo";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {videoUrl && (
        <video
          id={idVideoUnico} // 👈 Sincronizado con el controlador
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 contrast-125"
        />
      )}

      {/* Overlay y Contenido */}
      <div className="absolute inset-0 z-10 bg-black/50 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.8)_100%)]" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white [text-stroke:2px_black]">
          {data?.firstLine || "¡Bienvenido a la web!"}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white drop-shadow-[0_0_4px_black]">
          {data?.secondLine || "Encuentra lo que buscas."}
        </p>
        <Link
          href="/catalogo"
          className="mt-6 flex cursor-pointer flex-row items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <BiCollection />
          {data?.callToActionText || "Artículos disponibles"}
        </Link>
      </div>

      {/* 🔌 CONTROLADOR SEGURO: Modifica el playbackRate sin disparar advertencias en la consola */}
      <VideoSpeedController videoId={idVideoUnico} speed={0.6} />
    </div>
  );
}
