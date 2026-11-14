// src/app/admin-dashboard/business/[type]/layout.js
import Link from "next/link";
import { getTypesOfBusiness } from "@/utils/getTypesOfBusiness";

export default async function BusinessTypeLayout({ children, params }) {
  // 1. Obtenemos los tipos de negocio desde la base de datos
  const typesOfBusinesses = await getTypesOfBusiness();
  console.log("Tipos de negocio obtenidos:", typesOfBusinesses);
  const listaTipos = typesOfBusinesses?.types;

  if (!listaTipos) {
    return (
      <div className="text-red-500">No se encontraron tipos de negocio.</div>
    );
  }

  // 2. Resolvemos los params del servidor (Obligatorio en Next.js 15)
  const { type } = await params;

  return (
    <div className="w-full p-4">
      <p className="text-gray-400 text-sm mb-4">Filtrar por rubro:</p>

      {/* CONTENEDOR DE CARDS / TABS */}
      <div className="flex flex-row flex-wrap gap-4 mb-8">
        {Object.entries(listaTipos).map(([key, tipo]) => {
          // 🔄 Verificamos si el slug de la card coincide con el [type] actual de la URL
          const isActive = tipo.slug === type;

          return (
            <Link
              key={key}
              /* ⚡ Apuntamos a la nueva ruta física /admin-dashboard/business/vehiculos */
              href={`/admin-dashboard/business/${tipo.slug}`}
              className={`
                min-w-48 p-4 rounded-lg border text-center flex flex-col items-center justify-center transition-all duration-400 ease-in-out cursor-pointer block
                
                ${
                  isActive
                    ? "bg-neutral-800 border-sky-500/50 shadow-[0_0_20px_-3px_rgba(14,165,233,0.25)] scale-[1.02]"
                    : "bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:scale-[1.01]"
                }
              `}
            >
              <h3
                className={`font-bold text-lg ${isActive ? "text-white" : "text-neutral-300"}`}
              >
                {tipo.name}
              </h3>
              <p className="text-slate-500 text-sm mt-0.5">
                {tipo.isActive ? "Activo" : "Inactivo"}
              </p>
            </Link>
          );
        })}
      </div>

      {/* 3. Renderizamos el page.js interno que mostrará la grilla filtrada */}
      {children}
    </div>
  );
}
