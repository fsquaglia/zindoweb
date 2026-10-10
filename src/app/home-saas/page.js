// src/app/home-saas/page.js
import Link from "next/link";

export default function HomeSaaS() {
  return (
    <div className="flex-grow flex flex-col justify-between">
      {/* NAVBAR / HEADER */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Isotipo abstracto de Zindo */}
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-emerald-400 rounded-lg flex items-center justify-center font-bold text-slate-950">
              Z
            </div>
            <span className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              ZINDO
            </span>
          </div>

          <Link
            href="/admin-dashboard"
            className="bg-slate-800 hover:bg-slate-700 text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            Acceso Clientes
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="max-w-4xl mx-auto px-4 py-12 text-center my-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          El ecosistema regional de <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            historiales y activos únicos
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12">
          Accedé de forma centralizada al catálogo de comercios locales y hacé
          el seguimiento del ciclo de vida de tus bienes.
        </p>

        {/* TARJETAS DE RUBROS (GRID MODULAR) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* MÓDULO VEHÍCULOS (ACTIVO) */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-left hover:border-cyan-500/50 transition flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center text-xl mb-4">
                🚗
              </div>
              <h3 className="text-xl font-bold mb-2">Módulo Vehículos</h3>
              <p className="text-slate-400 text-sm mb-6">
                Buscador global de stock en concesionarias de la zona y consulta
                de historial por chapa patente única.
              </p>
            </div>
            <Link
              href="/vehiculos"
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-semibold py-2.5 px-4 rounded-xl text-center transition"
            >
              Buscar Vehículos
            </Link>
          </div>

          {/* MÓDULO MASCOTAS (FUTURO / CON PROXIMAMENTE) */}
          <div className="p-6 bg-slate-900/50 border border-slate-800/60 rounded-2xl text-left relative flex flex-col justify-between opacity-75">
            <span className="absolute top-4 right-4 bg-slate-800 text-emerald-400 text-xs font-semibold px-2 py-0.5 rounded-full border border-emerald-500/20">
              Próximamente
            </span>
            <div>
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center text-xl mb-4">
                🐾
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-300">
                Módulo Mascotas
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Validación de vidrieras veterinarias e historial clínico
                unificado con registro de vacunas y eventos de salud.
              </p>
            </div>
            <button
              disabled
              className="w-full bg-slate-800 text-slate-500 font-semibold py-2.5 px-4 rounded-xl cursor-not-allowed"
            >
              Próximamente
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-600">
        <p>
          &copy; {new Date().getFullYear()} Zindo Plataformas SaaS. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
}
