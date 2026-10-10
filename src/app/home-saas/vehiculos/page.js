import Link from "next/link";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
// import { firestoreDB } from "@/firebase/config";

// Server Component: Consulta global a Firestore
async function obtenerTodosLosVehiculos() {
  try {
    const catalogRef = collection(firestoreDB, "catalogItems");
    const q = query(
      catalogRef,
      where("activo", "==", true),
      orderBy("creadoEn", "desc"),
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener vehículos:", error);
    return [];
  }
}

export default async function MercadoZindoVehiculos() {
  // const vehiculos = await obtenerTodosLosVehiculos();
  const vehiculos = []; //! Simulación de que no hay vehículos, para probar el mensaje de "No hay vehículos publicados";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* NAVBAR */}
      <nav className="border-b border-slate-800 bg-slate-900/40 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 bg-gradient-to-tr from-cyan-500 to-emerald-400 rounded-md flex items-center justify-center font-bold text-slate-950 text-sm">
              Z
            </div>
            <span className="font-bold tracking-wider text-slate-200 group-hover:text-white transition">
              ZINDO{" "}
              <span className="text-cyan-400 font-medium text-xs ml-1">
                Autos
              </span>
            </span>
          </Link>
          <Link
            href="/admin-dashboard"
            className="text-xs text-slate-400 hover:text-white border border-slate-800 bg-slate-900 px-3 py-1.5 rounded-lg transition"
          >
            Publicar mi Stock
          </Link>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL: DISTRIBUCIÓN SIDEBAR + GRILLA */}
      <div className="max-w-7xl w-full mx-auto px-4 py-8 flex-grow">
        {/* ENCABEZADO */}
        <div className="mb-8 border-b border-slate-900 pb-6">
          <h1 className="text-2xl font-extrabold tracking-tight">
            Catálogo Colectivo de Vehículos
          </h1>
          <p className="text-slate-400 text-xs mt-1">
            Sincronización en tiempo real de todas las concesionarias
            autorizadas.
          </p>
        </div>

        {/* ESTRUCTURA DE DISEÑO A DOS COLUMNAS */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* SIDEBAR DE FILTROS (Se mantiene como estructura de servidor) */}
          <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
            <div className="bg-slate-900/40 border border-slate-900 p-5 rounded-xl sticky top-24">
              <h2 className="font-bold text-sm tracking-wide text-slate-300 uppercase mb-4">
                Filtros de Búsqueda
              </h2>

              {/* Filtro: Condición */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">
                  Condición
                </label>
                <div className="space-y-2 text-sm text-slate-300">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded accent-cyan-500 bg-slate-950 border-slate-800"
                    />{" "}
                    Nuevos
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded accent-cyan-500 bg-slate-950 border-slate-800"
                    />{" "}
                    Usados
                  </label>
                </div>
              </div>

              {/* Filtro: Rango de Año */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">
                  Año
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Desde"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="number"
                    placeholder="Hasta"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Filtro: Rango de Precio */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">
                  Precio (USD)
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <button className="w-full mt-2 bg-slate-800 hover:bg-slate-700 text-xs font-medium py-2 rounded-lg transition text-slate-300">
                Limpiar Filtros
              </button>
            </div>
          </aside>

          {/* GRILLA DE VEHÍCULOS */}
          <main className="flex-grow">
            {vehiculos.length === 0 ? (
              <div className="text-center py-16 bg-slate-900/10 border border-dashed border-slate-800 rounded-2xl">
                <p className="text-slate-500 text-sm">
                  No hay vehículos publicados en la zona actualmente.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehiculos.map((auto) => (
                  <div
                    key={auto.id}
                    className="bg-slate-900 border border-slate-800/80 rounded-xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition shadow-lg group"
                  >
                    <div className="aspect-video w-full bg-slate-800 relative overflow-hidden flex items-center justify-center text-xs text-slate-600">
                      {auto.imagenPrincipal ? (
                        <img
                          src={`https://cloudinary.com{process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${auto.imagenPrincipal}`}
                          alt={`${auto.marca} ${auto.modelo}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      ) : (
                        <span>Sin foto</span>
                      )}
                      <span className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur text-[10px] text-cyan-400 font-medium px-2 py-0.5 rounded border border-cyan-500/20 uppercase tracking-wider">
                        {auto.localidad || "Zona"}
                      </span>
                    </div>

                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div className="mb-4">
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <h3 className="font-bold text-sm text-slate-200 truncate">
                            {auto.marca} {auto.modelo}
                          </h3>
                          <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                            {auto.anio}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate">
                          {auto.version || "Particular"} •{" "}
                          {auto.kilometros?.toLocaleString("es-AR")} km
                        </p>
                      </div>
                      <div>
                        <div className="text-base font-black text-white mb-3">
                          {auto.moneda === "USD" ? "US " : " "}
                          {auto.precio?.toLocaleString("es-AR")}
                        </div>
                        <Link
                          href={`/vehiculos/${auto.id}`}
                          className="block w-full text-center bg-slate-800 hover:bg-cyan-600 hover:text-slate-950 text-slate-200 text-xs font-semibold py-2 rounded-lg transition"
                        >
                          Ver Historial y Datos
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-600">
        <p>
          &copy; {new Date().getFullYear()} Zindo Ecosistema. Publicaciones
          consolidadas.
        </p>
      </footer>
    </div>
  );
}
