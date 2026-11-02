import Image from "next/image";

// Clases para definir el tamaño de cada imagen en el grid
const classNameText = [
  "md:col-span-3",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
];

export default async function Features({ data = [] }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 grid-rows-2 gap-4 max-w-5xl mx-auto p-4">
      {data.length > 0 &&
        data.map((feature, index) => (
          <DivFeature
            key={index}
            urlImage={feature.urlImage}
            titulo={feature.titulo}
            descripcion={feature.descripcion}
            classNameAdditional={classNameText[index]}
            descripcionLarga={feature.descripcionLarga}
          />
        ))}
    </div>
  );
}

// Div para mostrar las imágenes de las features
// Cada imagen representa una feature del concesionario
// El diseño es un grid de 2 filas y 2 columnas, con las imágenes en diferentes tamaños
function DivFeature({
  urlImage,
  titulo = "Vehículos",
  descripcion = "Tu descripción corte",
  classNameAdditional = "",
  descripcionLarga = "",
}) {
  return (
    <div
      className={`relative bg-gray-200 h-80 col-span-1 ${classNameAdditional}`}
    >
      {urlImage && (
        <Image
          src={urlImage}
          alt={titulo}
          fill
          className="object-cover w-full h-full"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />
      )}

      {/* Overlay con degradé */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent" />

      {/* Overlay para descripción larga */}
      <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-30">
        <p className="text-white text-center text-sm max-w-sm">
          {descripcionLarga}
        </p>
      </div>

      {/* Texto encima del degradé */}
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-lg font-semibold">{titulo}</h3>
        <p className="text-sm">{descripcion}</p>
      </div>
    </div>
  );
}
