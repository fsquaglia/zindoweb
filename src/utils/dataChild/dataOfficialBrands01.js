/**
 * Función fábrica para generar dinámicamente la estructura técnica de cada marca.
 * Solo le pasás los 3 valores que cambian por cada fabricante.
 */

// name       >> es la marca, como Peugeot
// slugName   >> es la palabra friendly CEO, sin espacios, ejemplo peugeot
// slugImage  >> es el nombre del archivo de imagen sin "-logo256x256" o similar
// vehicle    >> es moto, auto o lo que venda más adelante

const crearEstructuraMarca = (name, slugName, slugImage, vehicle = "auto") => {
  let pathVehicle = "";

  switch (vehicle) {
    case "auto":
      pathVehicle = "/logos/autos/";
      break;
    case "moto":
      pathVehicle = "/logos/motos/";
      break;
    default:
      pathVehicle = "/logos/otros/"; // Es buena práctica dejar un valor por defecto
      break;
  }

  return {
    brandName: {
      value: name,
      showInputEdit: true,
      textInputEdit: "name de la marca",
      inputEditOrder: "b",
      limitCharacters: 20,
    },
    brandSlug: {
      value: slugName,
      showInputEdit: true,
      textInputEdit: "slugName técnica de la marca",
      inputEditOrder: "c",
      limitCharacters: 20,
    },
    brandUrlImageFull: {
      value: `https://images.unsplash.com/vector-1739890612483-8890d85274f0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D`, // Tu fallback general o URL remota de Cloudinary si la necesitás
      showInputEdit: false,
      textInputEdit: "URL de la marca",
      inputEditOrder: "d",
    },
    brandUrlImage256Local: {
      // Automatizamos el nombrado estático basándonos en tu formato ya definido de 256px WebP
      value: `${pathVehicle}${slugImage}-logo256x256.webp`,
      showInputEdit: false,
      textInputEdit: "URL de la marca estática",
      inputEditOrder: "e",
    },
    showInBrands: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar en la sección de marcas",
      inputEditOrder: "f",
    },
  };
};

// Declarás de forma sumamente compacta y limpia los datos individuales usando la función
const dataAudi = crearEstructuraMarca("Audi", "audi", "audi");
const dataBMW = crearEstructuraMarca("BMW", "bmw", "bmw");
const databyd = crearEstructuraMarca("BYD", "byd", "byd");
const dataChery = crearEstructuraMarca("Chery", "chery", "chery");
const dataChevrolet = crearEstructuraMarca(
  "Chevrolet",
  "chevrolet",
  "chevrolet",
);
const dataCitroen = crearEstructuraMarca("Citroen", "citroen", "citroen");
const dataFiat = crearEstructuraMarca("FIAT", "fiat", "fiat");
const dataFord = crearEstructuraMarca("Ford", "ford", "ford");
const dataHaval = crearEstructuraMarca("Haval", "haval", "haval");
const dataHonda = crearEstructuraMarca("Honda", "honda", "honda");
const dataHyundai = crearEstructuraMarca("Hyundai", "hyundai", "hyundai");
const dataJeep = crearEstructuraMarca("Jeep", "jeep", "jeep");
const dataKia = crearEstructuraMarca("Kia", "kia", "kia");
const dataMercedes = crearEstructuraMarca("Mercedes", "mercedes", "mercedes");
const dataNissan = crearEstructuraMarca("Nissan", "nissan", "nissan");
const dataPeugeot = crearEstructuraMarca("Peugeot", "peugeot", "peugeot");
const dataRenault = crearEstructuraMarca("Renault", "renault", "renault");
const dataToyota = crearEstructuraMarca("Toyota", "toyota", "toyota");
const dataVW = crearEstructuraMarca("Volkswagen", "volkswagen", "vw");

const titleSectionBrand = {
  titleSection: {
    value: "Nuestras marcas oficiales bd",
    showInputEdit: true,
    textInputEdit: "Título de la sección",
    inputEditOrder: "a",
    limitCharacters: 35,
  },
};

//* marcas de motos
const dataBenelli = crearEstructuraMarca(
  "Benelli",
  "benelli",
  "benelli",
  "moto",
);
const dataCFmoto = crearEstructuraMarca("CF moto", "cfmoto", "cfmoto", "moto");
const dataCorven = crearEstructuraMarca("Corven", "corven", "corven", "moto");
const dataGilera = crearEstructuraMarca("Gilera", "gilera", "Gilera", "moto");
const dataGuerrero = crearEstructuraMarca(
  "Guerrero",
  "guerrero",
  "guerrero",
  "moto",
);
const dataHero = crearEstructuraMarca("Hero", "hero", "heromotos", "moto");
const dataHondaMoto = crearEstructuraMarca("Honda", "honda", "honda", "moto");
const dataIkamotos = crearEstructuraMarca("IKA", "ika", "ikamotos", "moto");
const dataKeller = crearEstructuraMarca("Keller", "keller", "keller", "moto");
const dataKTM = crearEstructuraMarca("KTM", "ktm", "ktm", "moto");
const dataMondial = crearEstructuraMarca(
  "Mondial",
  "mondial",
  "mondial",
  "moto",
);
const dataMotomel = crearEstructuraMarca(
  "Motomel",
  "motomel",
  "motomel",
  "moto",
);
const dataSiam = crearEstructuraMarca("Siam", "siam", "siam", "moto");
const dataYamaha = crearEstructuraMarca("Yamaha", "yamaha", "yamaha", "moto");
const dataZanella = crearEstructuraMarca(
  "Zanella",
  "zanella",
  "zanella",
  "moto",
);

// Inyectás el título de la sección y todas las marcas en el array final esperado por tu arquitectura
export const dataOfficialBrands01Autos = [
  titleSectionBrand,
  dataAudi,
  dataBMW,
  databyd,
  dataChery,
  dataChevrolet,
  dataCitroen,
  dataFiat,
  dataFord,
  dataHaval,
  dataHonda,
  dataHyundai,
  dataJeep,
  dataKia,
  dataMercedes,
  dataNissan,
  dataPeugeot,
  dataRenault,
  dataToyota,
  dataVW,
];

export const dataOfficialBrands01Motos = [
  titleSectionBrand,
  dataBenelli,
  dataCFmoto,
  dataCorven,
  dataGilera,
  dataGuerrero,
  dataHero,
  dataHondaMoto,
  dataIkamotos,
  dataKeller,
  dataKTM,
  dataMondial,
  dataMotomel,
  dataSiam,
  dataYamaha,
  dataZanella,
];
