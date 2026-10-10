import VehicleCard from "./VehicleCard";

export default function CatalogoGrid({ vehicles = [] }) {
  return (
    <section className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {vehicles.length > 0 ? (
        vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          Nada para ver por aquí. Quita algunos filtros o selecciona otra
          categoría para ver más vehículos.
        </p>
      )}
    </section>
  );
}
