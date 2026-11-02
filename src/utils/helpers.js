"use server";

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
 * Obtiene datos de una sección específica desde la API de Realtime
 *
 * @param {string} sectionName - Nombre de la sección a obtener
 *   - 'dataHeroMain': Datos del héroe principal
 *   - 'dataFeatures': Datos de características
 *
 * @param {string} [typeReturn='onlyValues'] - Tipo de retorno (opcional)
 *   - 'onlyValues': Retorna solo los valores
 *   - 'withMetadata': Retorna todos los valores de cada key (value, show, order)
 * @returns {Promise<Object|Array|null>}
 *   - Si existe: Retorna los datos de esa sección (array u objeto)
 *   - Si no existe: Retorna null
 *   - En error: Retorna null
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
) => {
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
      return mapOnlyValues(data.data);
    } else {
      return data.data;
    }
  } catch (error) {
    console.error(`Error fetching helpers (${sectionName}):`, error.message);
    return null;
  }
};
