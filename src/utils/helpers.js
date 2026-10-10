"use server";

import {
  dataHeroMain,
  dataFeatures,
  dataLogosMarcas,
  dataTextCarouselLogos,
  dataHistory,
  dataTeamMembers,
  dataTeamTextTitle,
  dataAboutUs,
  dataLegalCommerce,
  dataImageCommerce,
  dataMapCommerceSRCIframe,
  dataContact,
  dataFooter,
  dataWeb,
  dataCategoriesInitialData,
  commerceMenuInitialData,
} from "./SettingInitialData";

// Mapeo de secciones a sus datos por defecto
const DEFAULT_DATA = {
  dataHeroMain,
  dataFeatures,
  dataLogosMarcas,
  dataTextCarouselLogos,
  dataHistory,
  dataTeamMembers,
  dataTeamTextTitle,
  dataAboutUs,
  dataLegalCommerce,
  dataImageCommerce,
  dataMapCommerceSRCIframe,
  dataContact,
  dataFooter,
  dataWeb,
  dataCategoriesInitialData,
  commerceMenuInitialData,
  //! Agrega más secciones aquí según sea necesario
};

const apiUrl =
  process.env.API_INTERNAL_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3000";

/**
 * Mapea los datos extrayendo solo los valores cuando typeReturn es "onlyValues"
 * Funciona tanto para objetos como para arrays de objetos
 *
 * @param {Object|Array} data - Datos a mapear
 * @returns {Object|Array} - Datos mapeados
 */
const mapOnlyValues = (data) => {
  // Si es un array, mapea cada elemento
  if (Array.isArray(data)) {
    return data.map((item) => {
      const mappedItem = {};
      for (const key in item) {
        if (
          item.hasOwnProperty(key) &&
          typeof item[key] === "object" &&
          item[key] !== null &&
          item[key].value !== undefined
        ) {
          mappedItem[key] = item[key].value;
        }
      }
      return mappedItem;
    });
  }

  // Si es un objeto, mapea sus propiedades
  const mappedData = {};
  for (const key in data) {
    if (
      data.hasOwnProperty(key) &&
      typeof data[key] === "object" &&
      data[key] !== null &&
      data[key].value !== undefined
    ) {
      mappedData[key] = data[key].value;
    }
  }
  return mappedData;
};

/**
 * Obtiene datos de una sección específica desde la API de Realtime o retorna datos por defecto
 *
 * @param {string} sectionName - Nombre de la sección a obtener
 *   - 'dataHeroMain': Datos del héroe principal
 *   - 'dataFeatures': Datos de características
 *
 * @param {string} [typeReturn='onlyValues'] - Tipo de retorno (opcional)
 *   - 'onlyValues': Retorna solo los valores
 *   - 'withMetadata': Retorna todos los valores de cada key (value, show, order)
 * @param {Object} [options] - Opciones de manejo de errores
 * @param {boolean} [options.returnDefaultOnError=true] - Retorna datos por defecto ante errores; false retorna null
 *
 * @returns {Promise<Object|Array|null>}
 *   - Si existe: Retorna los datos de esa sección (array u objeto)
 *   - Si no existe: Retorna null
 *   - En error: Retorna los datos por defecto o null según options.returnDefaultOnError
 *
 * @example
 * const features = await fetchDataFromAPIforSection('dataFeatures');
 *
 * @example
 * const data = await fetchDataFromAPIforSection('dataHeroMain', 'withMetadata');
 */
export const fetchDataFromAPIforSection = async (
  sectionName,
  typeReturn = "onlyValues",
  { returnDefaultOnError = true } = {},
) => {
  // Si no existe la sección en el mapeo, retorna null
  if (!DEFAULT_DATA[sectionName]) {
    console.warn(`Sección "${sectionName}" no encontrada`);
    return null;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const url = `${apiUrl}/api/realtime/getNode?nodo=${sectionName}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: [sectionName] },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (typeReturn === "onlyValues") {
      return (
        mapOnlyValues(data.data) || mapOnlyValues(DEFAULT_DATA[sectionName])
      );
    } else {
      return data.data || DEFAULT_DATA[sectionName];
    }
  } catch (error) {
    console.error(`Error fetching helpers (${sectionName}):`, error.message);

    if (!returnDefaultOnError) return null;

    console.info("Retornando datos por defecto.");

    // Aplica el mapeo a los datos por defecto en caso de error
    if (typeReturn === "onlyValues") {
      return mapOnlyValues(DEFAULT_DATA[sectionName]);
    } else {
      return DEFAULT_DATA[sectionName];
    }
  }
};
