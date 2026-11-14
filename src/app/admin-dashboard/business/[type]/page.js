// src/app/admin-dashboard/business/[type]/page.js
import Link from "next/link";
import { getTypesOfBusiness } from "@/utils/getTypesOfBusiness";

async function obtenerAgencias(tipoRubro) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/businessDataGridZindo?type=${tipoRubro}`,
      { cache: "no-store" },
    );

    if (res.status === 404) return [];
    if (!res.ok) {
      throw new Error(`Error al obtener las agencias (HTTP ${res.status}).`);
    }

    const data = await res.json();
    return Array.isArray(data?.businesses) ? data.businesses : [];
  } catch (error) {
    console.error("Error en obtenerAgencias:", error);
    return [];
  }
}

const encontrarKeyPorSlug = (objetoTipos, slugBuscado) => {
  if (!objetoTipos || typeof objetoTipos !== "object" || !slugBuscado) return null;
  const resultado = Object.entries(objetoTipos).find(
    ([, tipo]) => tipo?.slug === slugBuscado,
  );
  return resultado ? resultado[0] : null;
};

export default async function BusinessTypePage({ params }) {
  const { type } = await params;

  const typesOfBusinesses = await getTypesOfBusiness();
  const listaTipos = typesOfBusinesses?.types ?? null;

  const keyEncontrada = encontrarKeyPorSlug(listaTipos, type);

  if (!keyEncontrada) {
    return (
      <div className="w-full bg-slate-950 text-white">
        <p className="text-slate-400 text-sm italic">
          Tipo de negocio no reconocido: <span className="font-mono">{type}</span>
        </p>
      </div>
    );
  }

  const listaAgencias = await obtenerAgencias(keyEncontrada);

  return (
    <div className="w-full bg-slate-950 text-white">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight">
          Agencias Registradas:{" "}
          <span className="text-sky-400 capitalize">{type}</span>
        </h2>
      </div>

      {listaAgencias.length === 0 ? (
        <p className="text-slate-400 text-sm italic">
          No hay agencias disponibles registradas bajo este rubro.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {listaAgencias.map((agencia) => {
            const domainToOpen =
              process.env.NODE_ENV === "development"
                ? agencia.devDomain
                : agencia.currentDomain;
            const domainUrl = domainToOpen
              ? process.env.NODE_ENV === "development"
                ? `http://${domainToOpen}:3000`
                : `https://${domainToOpen}`
              : null;

            return (
              <div
                key={agencia.id}
                className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 hover:bg-neutral-800 hover:border-sky-500/40 transition-all duration-300"
              >
                <h3 className="font-bold text-lg text-white">{agencia.id}</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Dominio:{" "}
                  {domainUrl ? (
                    <a
                      href={domainUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-slate-300 hover:underline"
                    >
                      {agencia.currentDomain || "No asignado"}
                    </a>
                  ) : (
                    <span className="font-mono text-slate-300">
                      {agencia.currentDomain || "No asignado"}
                    </span>
                  )}
                </p>
                <Link
                  href={`/admin-dashboard/${agencia.id}`}
                  className="mt-3 pt-2 border-t border-neutral-800/60 flex items-center justify-between text-xs text-sky-400 font-medium"
                >
                  <span>Administrar panel</span>
                  <span>➔</span>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
