import { cache } from "react";

export const getBusinessById = cache(async (idBusiness) => {
  if (!idBusiness) {
    throw new Error("Falta el id del comercio.");
  }

  const appOrigin =
    process.env.INTERNAL_APP_ORIGIN ??
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : null);

  if (!appOrigin) {
    throw new Error("Falta configurar INTERNAL_APP_ORIGIN en producción.");
  }

  const businessURL = new URL("/api/businessById", appOrigin);
  businessURL.searchParams.append("id", idBusiness);

  const businessResponse = await fetch(businessURL);

  if (businessResponse.status === 404) {
    return null;
  }

  if (!businessResponse.ok) {
    throw new Error("Error al obtener el comercios");
  }

  const businessResponsePayload = await businessResponse.json();

  if (!businessResponsePayload?.success) {
    throw new Error("La API no devolvió un businessId válido.");
  }

  return businessResponsePayload;
});
