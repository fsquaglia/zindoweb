// Datos iniciales para los comercios/business
export const initialBusinesses = [
  {
    id: "biz_barbini_001", // ID específico e invariable que vos elegís
    name: "Barbini Automotores",
    description:
      "Encontrá autos nuevos y usados en Norte Automotores. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próximo vehículo.",
    type: "vehiculos",
    provinceName: "Santa Fe",
    cityName: "San Cristóbal",
    currentDomain: "barbiniautomotores.com.ar",
    devDomain: "barbini.localhost", // Guardamos el de dev para el diccionario
    admins: [
      "uid_dev_barbini_admin", // UIDs de prueba para Firebase Auth
    ],
    landingConfig: {
      theme: "light",
      components: [], // <<< aquí se insertan los componentes a mostrar, se debe modificar el orden numérico en cada key del componente
    },
  },
  {
    id: "biz_norte_002",
    name: "Norte Automotores",
    description:
      "Encontrá autos nuevos y usados en Norte Automotores. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próximo vehículo.",
    type: "vehiculos",
    provinceName: "Santa Fe",
    cityName: "San Cristóbal",
    currentDomain: "norteautomotores.com.ar",
    devDomain: "norte.localhost",
    admins: ["uid_dev_norte_admin"],
    landingConfig: {
      theme: "dark",
      components: [],
    },
  },
  {
    id: "biz_nicola_003",
    name: "Nicola Automotores",
    description:
      "Encontrá autos nuevos y usados en Norte Automotores. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próximo vehículo.",
    type: "vehiculos",
    provinceName: "Santa Fe",
    cityName: "San Cristóbal",
    currentDomain: "nicolaautomotores.com.ar",
    devDomain: "nicola.localhost",
    admins: [
      "uid_dev_nicola_admin",
      "tu_propio_uid_de_firebase_auth", // Poné tu UID real acá para testear el dashboard
    ],
    landingConfig: {
      theme: "custom-blue",
      components: [],
    },
  },
  {
    id: "biz_centroMotos_004",
    name: "Centro de Motos",
    description:
      "Encontrá motos nuevas y usadas en Centro de Motos. Conocé nuestro catálogo y recibí asesoramiento para elegir tu próxima moto.",
    type: "vehiculos",
    provinceName: "Santa Fe",
    cityName: "San Cristóbal",
    currentDomain: "centromotos.com.ar",
    devDomain: "centromotos.localhost",
    admins: [
      "uid_dev_centromotos_admin",
      "tu_propio_uid_de_firebase_auth", // Poné tu UID real acá para testear el dashboard
    ],
    landingConfig: {
      theme: "custom-blue",
      components: [],
    },
  },
];
