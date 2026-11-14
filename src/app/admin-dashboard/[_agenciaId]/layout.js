import { getBusinessById } from "@/utils/getBusinessById";
import Link from "next/link";

async function layout({ children, params }) {
  const COLORES_INDICADORES = [
    "bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.6)]",
    "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]",
    "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]",
    "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]",
    "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]",
  ];

  const { _agenciaId } = await params;

  const agenciaData = await getBusinessById(_agenciaId);

  if (!agenciaData) {
    return <div>No se encontró la agencia.</div>;
  }

  const businessData = agenciaData?.business || {};

  // console.log(businessData?.landingConfig?.components);
  const components = businessData?.landingConfig?.components || [];

  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <div className="w-full bg-neutral-900 min-h-32 p-4">
        <h1>Panel de {businessData?.name || ""}</h1>
        <p className="text-sky-400 text-sm">ID: {_agenciaId}</p>
        {/* Ciudad y provincia */}
        <p className="text-sm text-neutral-400">
          {businessData?.cityName || ""}, {businessData?.provinceName || ""}
        </p>
        {/* Descripción */}
        <p className="text-sm text-neutral-400">
          {businessData?.description || ""}
        </p>
      </div>
      {/* SIDEBAR y cuerpo */}
      <div className="flex flex-col sm:flex-row w-full">
        {/* SIDEBAR COMPONENTES */}
        <div className="w-full sm:w-52 flex flex-col  p-2 gap-2 text-center ">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 p-3 md:px-4 md:py-2.5 bg-neutral-900 rounded-lg border border-neutral-800 text-sm font-medium text-neutral-200 hover:border-sky-500/40 hover:bg-neutral-800/80 transition-all duration-300 ease-in-out"
          >
            Ir al inicio
          </Link>
          <p> Componentes</p>
          <div className="flex flex-row flex-wrap sm:flex-col gap-2 justify-center ">
            {components.map((component, index) => {
              // Asigna un color distinto a cada botón rotando por el array
              const colorPunto =
                COLORES_INDICADORES[index % COLORES_INDICADORES.length];

              return (
                <Link
                  key={component.id || index}
                  href={`/admin-dashboard/${_agenciaId}/components/${component.id}`}
                  // title={component.name} // 👈 Tooltip nativo accesible
                  className="group relative flex items-center justify-center md:justify-start gap-3 p-3 md:px-4 md:py-2.5 bg-neutral-900 rounded-lg border border-neutral-800 text-sm hover:border-sky-500/40 hover:bg-neutral-800/80 hover:scale-[1.02] transition-all duration-300 ease-in-out"
                >
                  {/* 1. INDICADOR VISUAL (Ícono o punto de color distinto por cada botón) */}
                  <span
                    className={`w-3 h-3 rounded-full shrink-0 ${colorPunto}`}
                  />

                  {/* 2. TEXTO DEL BOTÓN (Oculto en móvil, visible desde 'md' / 768px) */}
                  <span className="hidden md:inline font-medium text-neutral-200 truncate">
                    {component.name}
                  </span>

                  {/* 3. TOOLTIP VISUAL EXTRA (Solo en pantallas pequeñas al pasar el dedo/mouse) */}
                  <span className="md:hidden pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-800 border border-neutral-700 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-10">
                    {component.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        {/* CUERPO PRINCIPAL */}
        <div className="max-w-4xl w-full p-2">{children}</div>
      </div>
    </div>
  );
}

export default layout;
