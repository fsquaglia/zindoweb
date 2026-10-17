import { cache } from "react";
import {CONFIG_TEMAS} from "./SettingInitialData";

export const getBusinessDataForDomain = cache(async (domain) => {
  const normalizedDomain = domain?.trim().toLowerCase();

  if (!normalizedDomain) {
    return null;
  }

  const appOrigin =
    process.env.INTERNAL_APP_ORIGIN ??
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : null);

  if (!appOrigin) {
    throw new Error("Falta configurar INTERNAL_APP_ORIGIN en producción.");
  }

  // Validamos el dominio de la concesionaria antes de resolver su ruta tenant.
  // Hacemos la consulta a la API para obtener el businessId según el dominio actual.
  const allowedBusinessUrl = new URL("/api/allowed-business", appOrigin);
  allowedBusinessUrl.searchParams.set("domain", normalizedDomain);

  const allowedBusinessResponse = await fetch(allowedBusinessUrl);

  if (allowedBusinessResponse.status === 404) {
    return null;
  }

  if (!allowedBusinessResponse.ok) {
    throw new Error(
      `Error al validar el dominio: ${allowedBusinessResponse.status} ${allowedBusinessResponse.statusText}`
    );
  }

  const allowedBusinessPayload = await allowedBusinessResponse.json();

  if (
    !allowedBusinessPayload?.success ||
    typeof allowedBusinessPayload.businessId !== "string" ||
    !allowedBusinessPayload.businessId.trim()
  ) {
    throw new Error("La API no devolvió un businessId válido.");
  }

  const businessId = allowedBusinessPayload.businessId;

  const businessDataUrl = new URL("/api/businessDataPublic", appOrigin);
  businessDataUrl.searchParams.set("businessId", businessId);

  const businessDataResponse = await fetch(businessDataUrl);

  if (businessDataResponse.status === 404) {
    return null;
  }

  if (!businessDataResponse.ok) {
    throw new Error(
      `Error al obtener los datos públicos del negocio: ${businessDataResponse.status} ${businessDataResponse.statusText}`
    );
  }

  const businessDataPayload = await businessDataResponse.json();

  if (
    !businessDataPayload?.success ||
    !businessDataPayload.businessData ||
    typeof businessDataPayload.businessData !== "object" ||
    Array.isArray(businessDataPayload.businessData)
  ) {
    throw new Error("La API no devolvió datos públicos válidos del negocio.");
  }

    // Obtenemos el tema actual del negocio desde la configuración de landing.
  const businessTheme = businessDataPayload.businessData?.landingConfig?.theme || "custom-blue";
  const temaActual = CONFIG_TEMAS[businessTheme] || CONFIG_TEMAS["custom-blue"]; // devuelve algo como "bg-blue-900 border-blue-800 text-blue-100"
  
    const businessData = {
    ...businessDataPayload.businessData,
    landingConfig: {
      ...businessDataPayload.businessData.landingConfig,
      theme: temaActual,
    },
  };

  return {
    businessId,
    businessData,
  };
});