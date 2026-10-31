import Image from "next/image";
import { Fragment } from "react";

function CardsRectangles({ data = [] }) {
  if (!data || data?.length === 0) {
    return null;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map(({ titulo, descripcion, urlImage }, index) => (
        <div
          key={`${titulo}-${index}`}
          className="relative h-44 rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
        >
          <Image
            src={urlImage}
            alt={titulo}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70 flex flex-col justify-center items-center p-4 text-center z-10" />
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-20 text-white">
            <h3 className="font-bold text-lg mb-1 tracking-wide">{titulo}</h3>
            <p className="text-xs text-slate-300 max-w-xs">{descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StepCard({ stepNumber, title, description, imageUrl }) {
  return (
    <div className="flex flex-col items-center text-center flex-1 max-w-[260px]">
      <div className="relative w-44 h-44 flex items-center justify-center mb-4 isolate hover:scale-105 transition duration-300">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title || `Paso ${stepNumber}`}
            fill
            sizes="176px"
            className="object-cover rounded-full bg-slate-100 border-4 border-slate-200 shadow-inner"
          />
        )}

        <span className="absolute top-2 left-2 w-12 h-12 rounded-full bg-cyan-500 text-white font-black text-md flex items-center justify-center border-2 border-white shadow-md z-20">
          {stepNumber || 1}
        </span>
      </div>
      <h4 className="font-bold text-sm text-slate-700 uppercase tracking-wide mb-1">
        {title}
      </h4>
      <p className="text-xs text-slate-500">{description}</p>
    </div>
  );
}

function CardsCircles({ data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  const cards = data.slice(0, 3);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 mt-4">
      {cards.map((card, index) => {
        const { titulo, descripcion, urlImage } = card ?? {};

        return (
          <Fragment key={`${titulo ?? "paso"}-${index}`}>
            <StepCard
              stepNumber={index + 1}
              title={titulo}
              description={descripcion}
              imageUrl={urlImage}
            />
            {index < cards.length - 1 && (
              <div className="flex items-center justify-center text-cyan-500 my-2 md:my-0">
                <span className="text-3xl md:text-4xl font-black block rotate-90 md:rotate-0 tracking-tighter">
                  ≫
                </span>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default function ComponentUsed01({ data = [], theme = {} }) {
  if (!Array.isArray(data) || data.length !== 9) {
    return null;
  }

  const dataRectangles = data.slice(1, 4);
  const dataActionsCircle = data.slice(6);

  const { navbar, button, footer, horizontalBar } = theme || {};
  return (
    <div className="w-full text-slate-900 py-12 px-4 font-sans flex flex-col items-center gap-12">
      {/* SECCIÓN SUPERIOR: TÍTULO Y TARJETAS RECTANGULARES */}
      <div className="w-full max-w-5xl text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
          {(() => {
            const textoCompleto = data[0]?.tituloGeneral || "";

            // 1. Limpiamos espacios de más y dividimos por palabras
            const palabras = textoCompleto.trim().split(/\s+/);

            // Si el texto está vacío, no renderizamos nada
            if (palabras.length === 0 || palabras[0] === "") return null;

            // 2. Extraemos la primera palabra
            const primeraPalabra = palabras[0];

            // 3. Juntamos el resto de las palabras con espacios
            const restoDelTexto = palabras.slice(1).join(" ");

            return (
              <>
                {/* Espacio inicial para separarlo de la palabra anterior "usado" */}{" "}
                {primeraPalabra}
                {restoDelTexto && (
                  <span className="text-cyan-500"> {restoDelTexto}</span>
                )}
              </>
            );
          })()}
        </h2>

        {/* Grilla Responsiva de 3 Columnas */}
        <CardsRectangles data={dataRectangles} />
      </div>

      {/* SECCIÓN CENTRAL: BARRA REEMPLAZADA CON TEXTO INVITACIÓN */}
      <div
        className={`w-full max-w-5xl rounded-lg py-5 px-6 shadow-md flex items-center justify-center text-center + ${horizontalBar}`}
      >
        <p className="text-xl md:text-2xl font-bold  tracking-wide uppercase">
          📍{" "}
          {data?.[4]?.tituloBanner ||
            "Acercate a nuestro local para una tasación en vivo"}
        </p>
      </div>

      {/* SECCIÓN INFERIOR: PASO A PASO EN 3 PASOS CIRCULARES */}
      <div className="w-full max-w-5xl flex flex-col items-center gap-8 mt-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center text-slate-800">
          {data?.[5]?.tituloActionsCircle ||
            "Vendé tu vehículo en 3 simples pasos"}
        </h2>

        {/* Contenedor Adaptivo de Pasos (Fila en escritorio, Columna en móviles) */}
        <CardsCircles data={dataActionsCircle} />
      </div>
    </div>
  );
}
