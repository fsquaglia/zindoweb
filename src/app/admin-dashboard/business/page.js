// src/app/admin-dashboard/business/page.js
import { redirect } from "next/navigation";

export default function BusinessRootRedirect() {
  // Redirige inmediatamente al rubro principal para que siempre haya un filtro activo
  redirect("/admin-dashboard/business/vehiculos");
}
