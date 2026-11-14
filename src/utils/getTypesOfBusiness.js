import { cache } from "react";

export const getTypesOfBusiness = cache(async () => {
  const appOrigin =
    process.env.INTERNAL_APP_ORIGIN ??
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : null);

  if (!appOrigin) {
    throw new Error("Falta configurar INTERNAL_APP_ORIGIN en producción.");
  }

  // Validamos el dominio de la concesionaria antes de resolver su ruta tenant.
  // Hacemos la consulta a la API para obtener el businessId según el dominio actual.
  const typesURL = new URL("/api/typesOfBusinesses", appOrigin);
  const typesResponse = await fetch(typesURL);

  if (typesResponse.status === 404) {
    return null;
  }

  if (!typesResponse.ok) {
    throw new Error("Error al obtener los tipos de comercios");
  }

  const typesResponsePayload = await typesResponse.json();

  if (!typesResponsePayload?.success) {
    throw new Error("La API no devolvió un businessId válido.");
  }

  return typesResponsePayload;
});
