import Image from "next/image";

const isValidUrl = (url) => url?.startsWith("http");

export default function CardTeam({ person = {} }) {
  const { urlImage, name, role } = person;

  return (
    <div className="m-4 p-4 shadow-lg w-64 hover:scale-105 transition-transform duration-300">
      {isValidUrl(urlImage) ? (
        <Image
          src={urlImage}
          alt={`Foto de ${name ?? "integrante del equipo"}`}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          width={128}
          height={128}
        />
      ) : (
        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-2xl">👤</span>
        </div>
      )}

      <h3 className="text-xl font-bold text-center mb-2">
        {name ?? "Nombre de persona"}
      </h3>
      <p className="text-center text-gray-600 mb-4">
        {role ?? "Rol de la persona"}
      </p>
    </div>
  );
}
