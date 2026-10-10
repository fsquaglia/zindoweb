import { HiOutlineHeart, HiOutlineTag } from "react-icons/hi";

const transmissionLabels = {
  manual: "Manual",
  automatica: "Automática",
  automatico: "Automático",
  cvt: "CVT",
};

export default function VehicleCard({ vehicle }) {
  const {
    marca,
    modelo,
    version,
    anio,
    kilometrajeKm,
    transmision,
    precio,
    precioAnterior,
    moneda = "ARS",
    tipo,
    tipoArticulo,
    imagenes = [],
  } = vehicle;

  const mainImage = imagenes[0];
  const hasImage = Boolean(mainImage?.url);

  const title = [marca, modelo, version].filter(Boolean).join(" ");

  const conditionLabel =
    tipoArticulo === "accesorio"
      ? `Accesorio ${tipo || ""}`
      : tipo === "nuevo"
        ? "Vehículo 0 km"
        : "Vehículo usado";

  const formattedPrice = Number.isFinite(precio)
    ? new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: moneda,
        maximumFractionDigits: 0,
      }).format(precio)
    : "Consultar precio";

  const formattedMileage = Number.isFinite(kilometrajeKm)
    ? `${kilometrajeKm.toLocaleString("es-AR")} km`
    : "Sin informar";

  const formattedTransmission =
    transmissionLabels[transmision] || transmision || "Sin informar";

  return (
    <article className="group w-full max-w-sm justify-self-center overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {hasImage ? (
          <img
            src={mainImage.url}
            alt={mainImage.alt || title || "Artículo del catálogo"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            Sin imagen disponible
          </div>
        )}

        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-bold capitalize text-slate-900">
          <HiOutlineTag className="size-4" />
          {conditionLabel}
        </span>

        <button
          type="button"
          aria-label={`Guardar ${title}`}
          className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white text-slate-500 shadow-sm transition hover:bg-slate-100 hover:text-red-500"
        >
          <HiOutlineHeart className="size-6" />
        </button>
      </div>

      <div className="p-5 text-slate-900">
        <h2 className="text-xl font-extrabold leading-tight">{title}</h2>

        {tipoArticulo !== "accesorio" && (
          <p className="mt-1 text-sm text-slate-500">
            {[anio, formattedMileage].filter(Boolean).join(" · ")}
          </p>
        )}

        <p className="mt-4 text-3xl font-extrabold tracking-tight text-sky-600">
          {formattedPrice}
        </p>

        {Number.isFinite(precioAnterior) && (
          <p className="mt-1 text-sm text-slate-500 line-through">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: moneda,
              maximumFractionDigits: 0,
            }).format(precioAnterior)}
          </p>
        )}

        {tipoArticulo !== "accesorio" && (
          <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200 rounded-xl border border-slate-200 py-3 text-center">
            <div>
              <p className="text-xs font-bold text-slate-500">Año</p>
              <p className="mt-1 font-semibold">{anio || "—"}</p>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-500">Km.</p>
              <p className="mt-1 font-semibold">{formattedMileage}</p>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-500">Trans.</p>
              <p className="mt-1 font-semibold">{formattedTransmission}</p>
            </div>
          </div>
        )}

        <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            className="size-4 rounded border-slate-300 accent-sky-600"
          />
          Comparar
        </label>
      </div>
    </article>
  );
}
