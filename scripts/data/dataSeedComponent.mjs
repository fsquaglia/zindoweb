import {
  dataOfficialBrands01Autos,
  dataOfficialBrands01Motos,
} from "./dataChild/dataOfficialBrands01.mjs";
import { dataFeatures01 } from "./dataChild/dataFeatures01.mjs";
import { dataFeatures02 } from "./dataChild/dataFeatures02.mjs";
import { dataHeroMain01 } from "./dataChild/dataHeroMain01.mjs";
import { dataHeroMain02 } from "./dataChild/dataHeroMain02.mjs";
import { dataComponentUsed01 } from "./dataChild/dataComponentUsed01.mjs";
import { dataFinanceFeatures01 } from "./dataChild/dataFinanceFeatures.mjs";

// Datos para el Hero Main de la página principal estilo 01
const componentHeroMain01 = {
  id: "componentHeroMain01",
  type: "mainHeroPrimary",
  name: "Hero Modelo 01",
  isActive: true,
  order: 100, // 👈 Llave numérica para el orden visual
  data: dataHeroMain01,
};

// Datos para el Hero Main de la página principal estilo 02 con 3 imágenes
const componentHeroMain02 = {
  id: "componentHeroMain02",
  type: "mainHeroSecundary",
  name: "Hero Modelo 02",
  isActive: true,
  order: 100, // 👈 Llave numérica para el orden visual
  data: dataHeroMain02,
};

// Datos para Features de la página principal
const componentFeatures01 = {
  id: "componentFeatures01",
  type: "featuresGrid",
  name: "Características M.01",
  isActive: true,
  order: 200, // 👈 Llave numérica para el orden visual
  data: dataFeatures01,
};

// Datos para el componente features horizontal
const componentFeatures02 = {
  id: "componentFeatures02",
  type: "featuresHorizontal",
  name: "Características M.02",
  isActive: true,
  order: 300, // 👈 Llave numérica para el orden visual
  data: dataFeatures02,
};

// Datos para el componente de la sección de vende tu usado
const componentUsed01 = {
  id: "componentUsed01",
  type: "vendeTuUsado",
  name: "Vente tu Usado M.01",
  isActive: true,
  order: 300, // 👈 Llave numérica para el orden visual
  data: dataComponentUsed01,
};

// Datos para el componente Marcas de Confianza de autos
const componentOfficialBrands01Autos = {
  id: "componentOfficialBrands01Autos",
  type: "officialBrands01Autos",
  name: "Marcas Oficiales M.01",
  isActive: true,
  order: 400, // 👈 Llave numérica para el orden visual
  data: dataOfficialBrands01Autos,
};

const componentOfficialBrands01Motos = {
  id: "componentOfficialBrands01Motos",
  type: "officialBrands01Motos",
  name: "Marcas Oficiales Motos",
  isActive: true,
  order: 500, // 👈 Llave numérica para el orden visual
  data: dataOfficialBrands01Motos,
};

const componentFinanceFeatures01 = {
  id: "componentFinanceFeatures01",
  type: "componentFinanceFeatures01",
  name: "Financiación M.01",
  isActive: true,
  order: 500, // 👈 Llave numérica para el orden visual
  data: dataFinanceFeatures01,
};

// Lista de componentes permitidos para la página principal
export const allowedComponents = [
  componentHeroMain01,
  componentHeroMain02,
  componentFeatures01,
  componentFeatures02,
  componentUsed01,
  componentOfficialBrands01Autos,
  componentOfficialBrands01Motos,
  componentFinanceFeatures01,
];
