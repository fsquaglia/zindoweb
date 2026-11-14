// Modelo base — agregá propiedades nuevas acá y se propagan a todos
const createBusiness = ({
  id,
  name,
  description,
  type,
  provinceName,
  cityName,
  currentDomain,
  devDomain,
  admins,
  theme = "light",
}) => ({
  id,
  isActive: true,
  plan: "estandar",
  name,
  description,
  type,
  provinceName,
  cityName,
  currentDomain,
  devDomain,
  admins,
  landingConfig: {
    theme,
    components: [],
  },
});

export const initialBusinesses = [
  createBusiness({
    id: "biz_barbini_001",
    name: "Barbini Automotores",
    description:
      "Encontrá autos nuevos y usados en Barbini Automotores. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próximo vehículo.",
    type: "veh",
    provinceName: "Santa Fe",
    cityName: "San Cristóbal",
    currentDomain: "barbiniautomotores.com.ar",
    devDomain: "barbini.localhost",
    admins: ["uid_dev_barbini_admin"],
  }),
  createBusiness({
    id: "biz_norte_002",
    name: "Norte Automotores",
    description:
      "Encontrá autos nuevos y usados en Norte Automotores. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próximo vehículo.",
    type: "veh",
    provinceName: "Santa Fe",
    cityName: "San Cristóbal",
    currentDomain: "norteautomotores.com.ar",
    devDomain: "norte.localhost",
    admins: ["uid_dev_norte_admin"],
    theme: "dark",
  }),
  createBusiness({
    id: "biz_nicola_003",
    name: "Nicola Automotores",
    description:
      "Encontrá autos nuevos y usados en Nicola Automotores. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próximo vehículo.",
    type: "veh",
    provinceName: "Santa Fe",
    cityName: "San Cristóbal",
    currentDomain: "nicolaautomotores.com.ar",
    devDomain: "nicola.localhost",
    admins: ["uid_dev_nicola_admin", "tu_propio_uid_de_firebase_auth"],
    theme: "custom-blue",
  }),
  createBusiness({
    id: "biz_centroMotos_004",
    name: "Centro de Motos",
    description:
      "Encontrá motos nuevas y usadas en Centro de Motos. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próxima moto.",
    type: "veh",
    provinceName: "Santa Fe",
    cityName: "San Cristóbal",
    currentDomain: "centromotos.com.ar",
    devDomain: "centromotos.localhost",
    admins: ["uid_dev_centromotos_admin", "tu_propio_uid_de_firebase_auth"],
    theme: "custom-blue",
  }),
  createBusiness({
    id: "biz_merkosupermercado_005",
    name: "Merkosupermercado",
    description:
      "Encontrá productos nuevos en Merkosupermercado. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próximo producto.",
    type: "sup",
    provinceName: "Santa Fe",
    cityName: "San Cristóbal",
    currentDomain: "merkosupermercado.com.ar",
    devDomain: "merkosupermercado.localhost",
    admins: [
      "uid_dev_merkosupermercado_admin",
      "tu_propio_uid_de_firebase_auth",
    ],
    theme: "custom-blue",
  }),
];

export const singleBusiness = createBusiness({
  id: "biz_nuevo_006",
  name: "Agencia Automotores",
  description:
    "Encontrá autos nuevos y usados en Agencia Automotores. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próximo vehículo.",
  type: "veh",
  provinceName: "Santa Fe",
  cityName: "San Cristóbal",
  currentDomain: "agenciaautomotores.com.ar",
  devDomain: "agencia.localhost",
  admins: ["uid_dev_barbini_admin"],
});
