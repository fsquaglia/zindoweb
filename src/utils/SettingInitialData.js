import { Timestamp } from "firebase/firestore";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { SiApacherocketmq } from "react-icons/si";
import {
  FaStar,
  FaHistory,
  FaUsers,
  FaUsersCog,
  FaInfoCircle,
  FaImage,
  FaGavel,
  FaPhone,
  FaCopyright,
} from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import {
  dataOfficialBrands01Autos,
  dataOfficialBrands01Motos,
} from "./dataChild/dataOfficialBrands01";
import { dataFeatures01 } from "./dataChild/dataFeatures01";
import { dataFeatures02 } from "./dataChild/dataFeatures02";
import { dataHeroMain01 } from "./dataChild/dataHeroMain01";
import { dataHeroMain02 } from "./dataChild/dataHeroMain02";
import { dataComponentUsed01 } from "./dataChild/dataComponentUsed01";
import { dataFinanceFeatures01 } from "./dataChild/dataFinanceFeatures";

// Datos legales del comercio
export const dataLegalCommerce = [
  {
    fantasia: {
      value: "Barbini Automotores",
      showInputEdit: true,
      textInputEdit: "Nombre de fantasía",
      inputEditOrder: "a",
      limitCharacters: 50,
    },
    razonSocial: {
      value: "Barbini Automotores S.R.L.",
      showInputEdit: true,
      textInputEdit: "Razón social",
      inputEditOrder: "b",
      limitCharacters: 100,
    },
    cuit: {
      value: "30-12345678-9",
      showInputEdit: true,
      textInputEdit: "CUIT",
      inputEditOrder: "c",
      limitCharacters: 15,
    },
    domicilio: {
      value: "Juan B. Justo 649",
      showInputEdit: true,
      textInputEdit: "Domicilio",
      inputEditOrder: "d",
      limitCharacters: 100,
    },
    localidad: {
      value: "3000 San Cristóbal",
      showInputEdit: true,
      textInputEdit: "Localidad",
      inputEditOrder: "e",
      limitCharacters: 50,
    },
    provincia: {
      value: "Santa Fe",
      showInputEdit: true,
      textInputEdit: "Provincia",
      inputEditOrder: "f",
      limitCharacters: 50,
    },
    pais: {
      value: "Argentina",
      showInputEdit: true,
      textInputEdit: "País",
      inputEditOrder: "g",
      limitCharacters: 50,
    },
    telefono: {
      value: "+54 9 123 456 7890",
      showInputEdit: true,
      textInputEdit: "Teléfono",
      inputEditOrder: "h",
      limitCharacters: 20,
    },
    email: {
      value: "info@barbiniautomotores.com.ar",
      showInputEdit: true,
      textInputEdit: "Email",
      inputEditOrder: "i",
      limitCharacters: 59,
    },
  },
];

// Texto sobre nosotros para la sección About Us
export const dataAboutUs = [
  {
    aboutUs: {
      value:
        "Barbini Automotores es una concesionaria familiar con más de 20 años de experiencia en el mercado. Nos especializamos en la venta de vehículos nuevos y usados, ofreciendo asesoramiento personalizado y un servicio postventa que garantiza la confianza y satisfacción de nuestros clientes.",
      showInputEdit: true,
      textInputEdit: "Texto sobre nosotros",
      inputEditOrder: "a",
      limitCharacters: 1000,
    },
  },
];

// Imagen del frente del comercio
export const dataImageCommerce = [
  {
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1758411588/zindo/BarbiniAutos/barbiniautos01_bp9r2i.jpg",
      showInputEdit: false,
      textInputEdit: "Imagen del frente del comercio",
      inputEditOrder: "a",
    },
    alt: {
      value: "Frente del comercio Barbini Automotores",
      showInputEdit: true,
      textInputEdit: "Texto alternativo de la imagen",
      inputEditOrder: "b",
      limitCharacters: 100,
    },
  },
];

// src del iframe de Google Maps para la ubicación del comercio
export const dataMapCommerceSRCIframe = [
  {
    srcIframe: {
      value:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.1205104226801!2d-61.235257713465415!3d-30.31566150703398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944a79557742c5e7%3A0x519359b243000ecc!2sBarbini%20Automotores!5e0!3m2!1ses!2sar!4v1758049280802!5m2!1ses!2sar",
      showInputEdit: true,
      textInputEdit: "Src del iframe de Google Maps",
      inputEditOrder: "a",
      limitCharacters: 1000,
    },
  },
];
// Datos generales del sitio web para SEO, se muestran en el head/metatags/pestaña del navegador
export const dataWeb = [
  {
    title: "Barbini automotores",
    description: "Concesionaria de autos nuevos y usados",
    keywords:
      "autos, automotores, concesionaria, vehículos, usados, nuevos, compra, venta, financiamiento, servicio técnico, repuestos, accesorios",
    urlLogo: "/android-chrome-192.png",
    altLogo: "Logo Barbini Automotores",
  },
];

// ! estos son los nuevos componentes hasta la próxima línea comentada !
// Datos para el Hero Main de la página principal estilo 01
const componentHeroMain01 = {
  id: "componentHeroMain01",
  type: "mainHeroPrimary",
  order: 100, // 👈 Llave numérica para el orden visual
  data: dataHeroMain01,
};

// Datos para el Hero Main de la página principal estilo 02 con 3 imágenes
const componentHeroMain02 = {
  id: "componentHeroMain02",
  type: "mainHeroSecundary",
  order: 100, // 👈 Llave numérica para el orden visual
  data: dataHeroMain02,
};

// Datos para Features de la página principal
const componentFeatures01 = {
  id: "componentFeatures01",
  type: "featuresGrid",
  order: 200, // 👈 Llave numérica para el orden visual
  data: dataFeatures01,
};

// Datos para el componente features horizontal
const componentFeatures02 = {
  id: "componentFeatures02",
  type: "featuresHorizontal",
  order: 300, // 👈 Llave numérica para el orden visual
  data: dataFeatures02,
};

// Datos para el componente de la sección de vende tu usado
const componentUsed01 = {
  id: "componentUsed01",
  type: "vendeTuUsado",
  order: 300, // 👈 Llave numérica para el orden visual
  data: dataComponentUsed01,
};

// Datos para el componente Marcas de Confianza de autos
const componentOfficialBrands01Autos = {
  id: "componentOfficialBrands01Autos",
  type: "officialBrands01Autos",
  order: 400, // 👈 Llave numérica para el orden visual
  data: dataOfficialBrands01Autos,
};

const componentOfficialBrands01Motos = {
  id: "componentOfficialBrands01Motos",
  type: "officialBrands01Motos",
  order: 500, // 👈 Llave numérica para el orden visual
  data: dataOfficialBrands01Motos,
};

const componentFinanceFeatures01 = {
  id: "componentFinanceFeatures01",
  type: "componentFinanceFeatures01",
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

// ! estos son los nuevos componentes desde la anterior línea comentada !

//Logos de marcas para el carrusel
export const dataLogosMarcas = [
  {
    urlImage: {
      value:
        "https://images.unsplash.com/photo-1711653500303-4f83fbc58fef?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      showInputEdit: false,
      textInputEdit: "Logo marca 1",
      inputEditOrder: "a",
    },
    alt: {
      value: "Logo Ford vehículos",
      showInputEdit: true,
      textInputEdit: "Alt logo marca 1",
      inputEditOrder: "b",
      limitCharacters: 40,
    },
  },
  {
    urlImage: {
      value:
        "https://images.unsplash.com/photo-1590456743652-018ca0b6e4ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      showInputEdit: false,
      textInputEdit: "Logo marca 2",
      inputEditOrder: "a",
    },
    alt: {
      value: "Logo Chevrolet vehículos",
      showInputEdit: true,
      textInputEdit: "Alt logo marca 2",
      inputEditOrder: "b",
      limitCharacters: 40,
    },
  },
  {
    urlImage: {
      value:
        "https://images.unsplash.com/photo-1581862142388-23e1c52ca091?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      showInputEdit: false,
      textInputEdit: "Logo marca 3",
      inputEditOrder: "a",
    },
    alt: {
      value: "Logo Toyota vehículos",
      showInputEdit: true,
      textInputEdit: "Alt logo marca 3",
      inputEditOrder: "b",
      limitCharacters: 40,
    },
  },
  {
    urlImage: {
      value:
        "https://images.unsplash.com/photo-1561517118-6068d92c6474?q=80&w=1142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      showInputEdit: false,
      textInputEdit: "Logo marca 4",
      inputEditOrder: "a",
    },
    alt: {
      value: "Logo Volkswagen vehículos",
      showInputEdit: true,
      textInputEdit: "Alt logo marca 4",
      inputEditOrder: "b",
      limitCharacters: 40,
    },
  },
  {
    urlImage: {
      value:
        "https://images.unsplash.com/photo-1585394323865-a1dc6e83cbb3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      showInputEdit: false,
      textInputEdit: "Logo marca 5",
      inputEditOrder: "a",
    },
    alt: {
      value: "Logo Peugeot vehículos",
      showInputEdit: true,
      textInputEdit: "Alt logo marca 5",
      inputEditOrder: "b",
      limitCharacters: 40,
    },
  },
  {
    urlImage: {
      value:
        "https://images.unsplash.com/photo-1679398175192-92238aac595b?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      showInputEdit: false,
      textInputEdit: "Logo marca 6",
      inputEditOrder: "a",
    },
    alt: {
      value: "Logo Renault vehículos",
      showInputEdit: true,
      textInputEdit: "Alt logo marca 6",
      inputEditOrder: "b",
      limitCharacters: 40,
    },
  },
  {
    urlImage: {
      value:
        "https://images.unsplash.com/photo-1659197975825-ffeeb08cab18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      showInputEdit: false,
      textInputEdit: "Logo marca 7",
      inputEditOrder: "a",
    },
    alt: {
      value: "Logo Fiat vehículos",
      showInputEdit: true,
      textInputEdit: "Alt logo marca 7",
      inputEditOrder: "b",
      limitCharacters: 40,
    },
  },
];

// Título y descripción para la sección de carrusel de logos de marcas
export const dataTextCarouselLogos = [
  {
    title: {
      value: "Marcas de confianza",
      showInputEdit: true,
      textInputEdit: "Título sección logos de marcas",
      inputEditOrder: "a",
      limitCharacters: 30,
    },
    description: {
      value:
        "Trabajamos con las principales marcas del mercado para ofrecerte una amplia variedad de opciones.",
      showInputEdit: true,
      textInputEdit: "Descripción sección logos de marcas",
      inputEditOrder: "b",
      limitCharacters: 100,
    },
  },
];

// Footer con descargo de responsabilidad
export const dataFooter = [
  {
    titleDisclaimer: {
      value: "Descargo de responsabilidad",
      showInputEdit: true,
      textInputEdit: "Título descargo de responsabilidad",
      inputEditOrder: "a",
      limitCharacters: 30,
    },
    textDisclaimer: {
      value:
        "© 2026 - Barbini Automotores. Derechos reservados. Los vehículos y ofertas están sujetos a disponibilidad y pueden variar sin previo aviso. Las imágenes son ilustrativas y pueden no representar el modelo exacto. Consulte términos y condiciones en el concesionario.Al navegar en este sitio, usted acepta nuestras políticas y condiciones de privacidad.",
      showInputEdit: true,
      textInputEdit: "Texto descargo de responsabilidad",
      inputEditOrder: "b",
      limitCharacters: 400,
    },
    privacyPolicyLink: {
      value: "/privacy-policy",
      showInputEdit: false,
    },
    termsOfServiceLink: {
      value: "/terms-of-service",
      showInputEdit: false,
    },
    titleClientService: {
      value: "Servicio al Cliente",
      showInputEdit: true,
      textInputEdit: "Título privacidad y Serv. cliente",
      inputEditOrder: "c",
      limitCharacters: 50,
    },
    textClientService: {
      value:
        "Para más información, comuníquese con nosotros a través de email o WhatsApp utilizando los datos proporcionados en la sección Contacto. Recopilamos datos de terceros únicamente para mejorar la experiencia de navegación en nuestro sitio. Si solicitamos información personal, será exclusivamente para enviarle novedades. No compartimos sus datos con terceros sin su consentimiento explícito.",
      showInputEdit: true,
      textInputEdit: "Texto privacidad y Serv. cliente",
      inputEditOrder: "d",
      limitCharacters: 400,
    },
  },
];

// TEAM
// Datos del equipo de trabajo o TEAM
export const dataTeamMembers = [
  {
    name: {
      value: "Cachi Barbini",
      showInputEdit: true,
      textInputEdit: "Nombre del principal del equipo",
      inputEditOrder: "a",
      limitCharacters: 50,
    },
    role: {
      value: "Fundador y Gerente General",
      showInputEdit: true,
      textInputEdit: "Rol del principal del equipo",
      inputEditOrder: "b",
      limitCharacters: 50,
    },
    showInTeam: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar en la sección equipo",
      inputEditOrder: "c",
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1759272780/zindo/BarbiniAutos/barbiniCachi_qe3jxh.png",
      showInputEdit: false,
      textInputEdit: "Imagen del principal del equipo",
      inputEditOrder: "d",
      imageCircle: true,
    },
  },
  {
    name: {
      value: "Hijo Barbini",
      showInputEdit: true,
      textInputEdit: "Nombre del miembro del equipo",
      inputEditOrder: "a",
      limitCharacters: 50,
    },
    role: {
      value: "Ventas",
      showInputEdit: true,
      textInputEdit: "Rol del miembro del equipo",
      inputEditOrder: "b",
      limitCharacters: 50,
    },
    showInTeam: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar en la sección equipo",
      inputEditOrder: "c",
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1759272780/zindo/BarbiniAutos/barbiniHijo_y4jcyc.png",
      showInputEdit: false,
      textInputEdit: "Imagen del miembro del equipo",
      inputEditOrder: "d",
      imageCircle: true,
    },
  },
  {
    name: {
      value: "Nombre Apellido",
      showInputEdit: true,
      textInputEdit: "Nombre del miembro del equipo",
      inputEditOrder: "a",
      limitCharacters: 50,
    },
    role: {
      value: "Asesor Comercial",
      showInputEdit: true,
      textInputEdit: "Rol del miembro del equipo",
      inputEditOrder: "b",
      limitCharacters: 50,
    },
    showInTeam: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar en la sección equipo",
      inputEditOrder: "c",
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1759272780/zindo/BarbiniAutos/barbiniHijo_y4jcyc.png",
      showInputEdit: false,
      textInputEdit: "Imagen del miembro del equipo",
      inputEditOrder: "d",
      imageCircle: true,
    },
  },
  {
    name: {
      value: "Nombre Apellido",
      showInputEdit: true,
      textInputEdit: "Nombre del miembro del equipo",
      inputEditOrder: "a",
      limitCharacters: 50,
    },
    role: {
      value: "El otro",
      showInputEdit: true,
      textInputEdit: "Rol del miembro del equipo",
      inputEditOrder: "b",
      limitCharacters: 50,
    },
    showInTeam: {
      value: false,
      showInputEdit: true,
      textInputEdit: "Mostrar en la sección equipo",
      inputEditOrder: "c",
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1759272780/zindo/BarbiniAutos/barbiniHijo_y4jcyc.png",
      showInputEdit: false,
      textInputEdit: "Imagen del miembro del equipo",
      inputEditOrder: "d",
      imageCircle: true,
    },
  },
];

export const dataTeamTextTitle = [
  {
    title: {
      value: "Nuestro equipo de trabajo",
      showInputEdit: true,
      textInputEdit: "Título sección equipo",
      inputEditOrder: "a",
      limitCharacters: 40,
    },
    description: {
      value:
        "Conoce al equipo dedicado que hace posible Barbini Automotores. Profesionales apasionados por brindarte el mejor servicio y asesoramiento en la compra de tu vehículo.",
      showInputEdit: true,
      textInputEdit: "Descripción sección equipo",
      inputEditOrder: "b",
      limitCharacters: 200,
    },
  },
];

// HISTORIA, MISSION, VISION, VALORES
export const dataHistory = [
  {
    id: {
      value: "historia1",
      showInputEdit: false,
    },
    title: {
      value: "Historia",
      showInputEdit: true,
      textInputEdit: "Título de la sección",
      inputEditOrder: "b",
      limitCharacters: 50,
    },
    description: {
      value:
        "Nacimos como una pequeña empresa familiar con ganas de ofrecer un servicio.",
      showInputEdit: true,
      textInputEdit: "Descripción de la sección",
      inputEditOrder: "c",
      limitCharacters: 200,
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1758411588/zindo/BarbiniAutos/barbiniautos01_bp9r2i.jpg",
      showInputEdit: false,
      textInputEdit: "Imagen de la sección",
      inputEditOrder: "d",
    },
    alt: {
      value: "Frente del comercio Barbini Automotores",
      showInputEdit: true,
      textInputEdit: "Texto alt de la imagen",
      inputEditOrder: "e",
      limitCharacters: 100,
    },
    showSection: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar esta sección",
      inputEditOrder: "f",
    },
    colorCircle: {
      value: "#f59e0b",
      showInputEdit: false,
    },
  },
  {
    id: {
      value: "historia2",
      showInputEdit: false,
    },
    title: {
      value: "Misión",
      showInputEdit: true,
      textInputEdit: "Título de la sección",
      inputEditOrder: "b",
      limitCharacters: 50,
    },
    description: {
      value:
        "Brindar confianza, seguridad y soluciones de movilidad a través de vehículos de calidad y un servicio de excelencia.",
      showInputEdit: true,
      textInputEdit: "Descripción de la sección",
      inputEditOrder: "c",
      limitCharacters: 200,
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1758411588/zindo/BarbiniAutos/barbiniautos01_bp9r2i.jpg",
      showInputEdit: false,
      textInputEdit: "Imagen de la sección",
      inputEditOrder: "d",
    },
    alt: {
      value: "Imagen de misión",
      showInputEdit: true,
      textInputEdit: "Texto alt de la imagen",
      inputEditOrder: "e",
      limitCharacters: 100,
    },
    showSection: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar esta sección",
      inputEditOrder: "f",
    },
    colorCircle: {
      value: "#32f50b",
      showInputEdit: false,
    },
  },
  {
    id: {
      value: "historia3",
      showInputEdit: false,
    },
    title: {
      value: "Visión",
      showInputEdit: true,
      textInputEdit: "Título de la sección",
      inputEditOrder: "b",
      limitCharacters: 50,
    },
    description: {
      value:
        "Ser referentes en el mercado automotor por nuestro compromiso con la innovación, la transparencia y la satisfacción de los clientes.",
      showInputEdit: true,
      textInputEdit: "Descripción de la sección",
      inputEditOrder: "c",
      limitCharacters: 200,
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1758411588/zindo/BarbiniAutos/barbiniautos01_bp9r2i.jpg",
      showInputEdit: false,
      textInputEdit: "Imagen de la sección",
      inputEditOrder: "d",
    },
    alt: {
      value: "Imagen de visión",
      showInputEdit: true,
      textInputEdit: "Texto alt de la imagen",
      inputEditOrder: "e",
      limitCharacters: 100,
    },
    showSection: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar esta sección",
      inputEditOrder: "f",
    },
    colorCircle: {
      value: "#0fe2f1",
      showInputEdit: false,
    },
  },
  {
    id: {
      value: "historia4",
      showInputEdit: false,
    },
    title: {
      value: "Valores",
      showInputEdit: true,
      textInputEdit: "Título de la sección",
      inputEditOrder: "b",
      limitCharacters: 50,
    },
    description: {
      value:
        "Compromiso, integridad, responsabilidad, calidad y cercanía con cada cliente.",
      showInputEdit: true,
      textInputEdit: "Descripción de la sección",
      inputEditOrder: "c",
      limitCharacters: 200,
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1758411588/zindo/BarbiniAutos/barbiniautos01_bp9r2i.jpg",
      showInputEdit: false,
      textInputEdit: "Imagen de la sección",
      inputEditOrder: "d",
    },
    alt: {
      value: "Imagen de valores",
      showInputEdit: true,
      textInputEdit: "Texto alt de la imagen",
      inputEditOrder: "e",
      limitCharacters: 100,
    },
    showSection: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar esta sección",
      inputEditOrder: "f",
    },
    colorCircle: {
      value: "#7d21f7",
      showInputEdit: false,
    },
  },
];

// Datos de contacto del comercio
export const dataContact = [
  {
    phone: {
      value: "+5493408670000",
      showInputEdit: true,
      textInputEdit: "Número de celular o WhatsApp",
      inputEditOrder: "a",
      limitCharacters: 20,
    },
    email: {
      value: "hola@hola.com.ar",
      showInputEdit: true,
      textInputEdit: "Correo electrónico",
      inputEditOrder: "b",
      limitCharacters: 50,
    },
    facebook: {
      value: "https://www.facebook.com/cachi.barbini",
      showInputEdit: true,
      textInputEdit: "URL de Facebook",
      inputEditOrder: "c",
      limitCharacters: 100,
    },
    instagram: {
      value: "https://www.instagram.com/barbini_automotores/",
      showInputEdit: true,
      textInputEdit: "URL de Instagram",
      inputEditOrder: "d",
      limitCharacters: 100,
    },
    whatsappInitialMessage: {
      value: "Hola!, me gustaría hacerles una consulta",
      showInputEdit: true,
      textInputEdit: "Mensaje inicial de WhatsApp",
      inputEditOrder: "e",
      limitCharacters: 100,
    },
  },
];

// Datos iniciales para el nuevo usuario que se carga desde RegisterForm
export const newUserDataInitial = (
  nombreContacto,
  email,
  passwordHash,
  rolUser,
  image,
  usuarioVerificado = false,
) => {
  return {
    nombreContacto: nombreContacto,
    sobrenombre: "",
    direccion: "",
    localidad: "",
    provincia: "",
    email: email,
    password: passwordHash, // Guardamos el hash de la contraseña
    celTE: "",
    saldo: 0,
    meGustaCommerce: false,
    rol: rolUser,
    fechaAlta: Timestamp.fromDate(new Date()),
    imagen: image
      ? image
      : "https://firebasestorage.googleapis.com/v0/b/iharalondon.appspot.com/o/images%2FUserGeneric.png?alt=media&token=46f36e6c-9009-4641-ae30-841df4a23cde",
    fechaVenceSaldo: Timestamp.fromDate(new Date("1900-01-01")),
    fechaNacimiento: null,
    likesIDproductos: [],
    usuarioVerificado: usuarioVerificado,
    registroDesdeApp: {
      nombre: process.env.NEXT_PUBLIC_NAME_COMMERCE || "Comercio Genérico",
      pseudonimo: process.env.PSEUDONAME_COMMERCE || "genericcommerce",
    },
  };
};

// Datos para las categorías de vehículos (se usa en el Navbar )
export const dataCategoriesInitialData = [
  {
    id: {
      value: "menu1",
      showInputEdit: false,
    },
    nameMenu: {
      value: "Automotores",
      showInputEdit: true,
      textInputEdit: "Nombre del menú",
      inputEditOrder: "a",
      limitCharacters: 25,
    },
    categorySlug: {
      value: "automotores",
      showInputEdit: true,
      textInputEdit: "Clave técnica de la categoría",
      inputEditOrder: "ab",
      limitCharacters: 25,
    },
    orderMenu: {
      value: "b",
      showInputEdit: true,
      textInputEdit: "Orden del menú (a, b, c, etc.)",
      inputEditOrder: "b",
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1758411588/zindo/BarbiniAutos/barbiniautos01_bp9r2i.jpg",
      showInputEdit: false,
      textInputEdit: "Imagen para el menú",
    },
  },
  {
    id: {
      value: "menu2",
      showInputEdit: false,
    },
    nameMenu: {
      value: "Motocicletas",
      showInputEdit: true,
      textInputEdit: "Nombre del menú",
      inputEditOrder: "a",
      limitCharacters: 25,
    },
    categorySlug: {
      value: "motocicletas",
      showInputEdit: true,
      textInputEdit: "Clave técnica de la categoría",
      inputEditOrder: "ab",
      limitCharacters: 25,
    },
    orderMenu: {
      value: "c",
      showInputEdit: true,
      textInputEdit: "Orden del menú (a, b, c, etc.)",
      inputEditOrder: "b",
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1758411588/zindo/BarbiniAutos/barbiniautos01_bp9r2i.jpg",
      showInputEdit: false,
      textInputEdit: "Imagen para el menú",
    },
  },
  {
    id: {
      value: "menu3",
      showInputEdit: false,
    },
    nameMenu: {
      value: "Náuticos",
      showInputEdit: true,
      textInputEdit: "Nombre del menú",
      inputEditOrder: "a",
      limitCharacters: 25,
    },
    categorySlug: {
      value: "nauticos",
      showInputEdit: true,
      textInputEdit: "Clave técnica de la categoría",
      inputEditOrder: "ab",
      limitCharacters: 25,
    },
    orderMenu: {
      value: "d",
      showInputEdit: true,
      textInputEdit: "Orden del menú (a, b, c, etc.)",
      inputEditOrder: "b",
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1758411588/zindo/BarbiniAutos/barbiniautos01_bp9r2i.jpg",
      showInputEdit: false,
      textInputEdit: "Imagen para el menú",
    },
  },
  {
    id: {
      value: "menu4",
      showInputEdit: false,
    },
    nameMenu: {
      value: "Accesorios",
      showInputEdit: true,
      textInputEdit: "Nombre del menú",
      inputEditOrder: "a",
      limitCharacters: 25,
    },
    categorySlug: {
      value: "accesorios",
      showInputEdit: true,
      textInputEdit: "Clave técnica de la categoría",
      inputEditOrder: "ab",
      limitCharacters: 25,
    },
    orderMenu: {
      value: "e",
      showInputEdit: true,
      textInputEdit: "Orden del menú (a, b, c, etc.)",
      inputEditOrder: "b",
    },
    urlImage: {
      value:
        "https://res.cloudinary.com/foodexpressimg/image/upload/v1758411588/zindo/BarbiniAutos/barbiniautos01_bp9r2i.jpg",
      showInputEdit: false,
      textInputEdit: "Imagen para el menú",
    },
  },
];

// Datos para el menú de comercios (se usa en el Navbar )
export const commerceMenuInitialData = [
  {
    icon: { value: "FaLocationDot" },
    orderMenu: {
      value: "a",
      showInputEdit: true,
      textInputEdit: "Orden del menú (a, b, c, etc.)",
      inputEditOrder: "a",
    },
    nameMenu: {
      value: "Concesionario",
      showInputEdit: true,
      textInputEdit: "Nombre del menú",
      inputEditOrder: "b",
      limitCharacters: 25,
    },
    show: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar este menú",
      inputEditOrder: "c",
    },
    href: { value: "#location" },
  },
  {
    icon: { value: "GrContact" },
    orderMenu: {
      value: "b",
      showInputEdit: true,
      textInputEdit: "Orden del menú (a, b, c, etc.)",
      inputEditOrder: "a",
    },
    nameMenu: {
      value: "Contacto",
      showInputEdit: true,
      textInputEdit: "Nombre del menú",
      inputEditOrder: "b",
      limitCharacters: 25,
    },
    show: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar este menú",
      inputEditOrder: "c",
    },
    href: { value: "#contact" },
  },
  {
    icon: { value: "IoMdSpeedometer" },
    orderMenu: {
      value: "c",
      showInputEdit: true,
      textInputEdit: "Orden del menú (a, b, c, etc.)",
      inputEditOrder: "a",
    },
    nameMenu: {
      value: "Test Drive",
      showInputEdit: true,
      textInputEdit: "Nombre del menú",
      inputEditOrder: "b",
      limitCharacters: 25,
    },
    show: {
      value: true,
      showInputEdit: true,
      textInputEdit: "Mostrar este menú",
      inputEditOrder: "c",
    },
    href: { value: "#testdrive" },
  },
];

// ----------------------------------------- DASHBOARD MENU --------------------------------------------------//
// Aquí definimos cada elemento del menú del dashboard con sus propiedades para luego armar el dashboardMenu
export const menuDefinition = {
  usuarioHome: {
    id: "usuarioHome",
    label: "Usuario",
    icon: "",
    showOption: true,
  },
  misDatos: { id: "misDatos", label: "Mis Datos", icon: "", showOption: true },
  adminHome: {
    id: "adminHome",
    textMenu: "Administrador",
    icon: "",
    showOption: true,
  },
  productos: {
    id: "productos",
    textMenu: "Productos admin",
    icon: "",
    showOption: true,
  },
  heroSection: {
    id: "heroSection",
    textMenu: "Principal",
    icon: SiApacherocketmq,
    showOption: true,
    nodeRealtimeName: "dataHeroMain",
    titlePanel: "Sección Hero o Principal de la Landing Page",
    descriptionPanel:
      "Configuración de la sección hero o principal de la landing page.",
  },
  featuresSection: {
    id: "featuresSection",
    textMenu: "Características",
    icon: FaStar,
    showOption: true,
    nodeRealtimeName: "dataFeatures",
    titlePanel: "Sección de Características de la Landing Page",
    descriptionPanel:
      "Configuración de la sección de características de la landing page.",
  },
  historySection: {
    id: "historySection",
    textMenu: "Historia",
    icon: FaHistory,
    showOption: true,
    nodeRealtimeName: "dataHistory",
    titlePanel: "Sección de Historia, Misión, Visión y Valores",
    descriptionPanel:
      "Configuración de la sección de historia, misión, visión y valores de la landing page.",
  },
  teamTitleSection: {
    id: "teamTitleSection",
    textMenu: "Equipo (título)",
    icon: FaUsersCog,
    showOption: true,
    nodeRealtimeName: "dataTeamTextTitle",
    titlePanel: "Sección de Título del Equipo de trabajo o TEAM",
    descriptionPanel:
      "Configuración del título de la sección de equipo de trabajo o TEAM de la landing page.",
  },
  teamMembersSection: {
    id: "teamMembersSection",
    textMenu: "Equipo (miembros)",
    icon: FaUsers,
    showOption: true,
    nodeRealtimeName: "dataTeamMembers",
    titlePanel: "Sección de Miembros del Equipo de trabajo o TEAM",
    descriptionPanel:
      "Configuración de los miembros de la sección de equipo de trabajo o TEAM de la landing page.",
  },
  aboutUs: {
    id: "aboutUs",
    textMenu: "Sobre nosotros",
    icon: FaInfoCircle,
    showOption: true,
    nodeRealtimeName: "dataAboutUs",
    titlePanel: "Sección de Sobre nosotros",
    descriptionPanel:
      "Configuración de la sección de sobre nosotros de la landing page.",
  },
  imageCommerce: {
    id: "imageCommerce",
    textMenu: "Imagen de Comercio",
    icon: FaImage,
    showOption: true,
    nodeRealtimeName: "dataImageCommerce",
    titlePanel: "Sección de Imagen de Comercio",
    descriptionPanel:
      "Configuración de la sección de imagen de comercio de la landing page.",
  },
  dataLegalCommerce: {
    id: "dataLegalCommerce",
    textMenu: "Datos Legales",
    icon: FaGavel,
    showOption: true,
    nodeRealtimeName: "dataLegalCommerce",
    titlePanel: "Sección de Datos Legales del Comercio",
    descriptionPanel:
      "Configuración de la sección de datos legales del comercio.",
  },
  dataContact: {
    id: "dataContact",
    textMenu: "Social Media",
    icon: FaPhone,
    showOption: true,
    nodeRealtimeName: "dataContact",
    titlePanel: "Sección de Datos de Contacto del Comercio",
    descriptionPanel:
      "Configuración de la sección de datos de contacto del comercio.",
  },
  dataFooter: {
    id: "dataFooter",
    textMenu: "Footer",
    icon: FaCopyright,
    showOption: true,
    nodeRealtimeName: "dataFooter",
    titlePanel: "Sección de Footer de la Landing Page",
    descriptionPanel:
      "Configuración de la sección de footer de la landing page.",
  },
  manageBDD: {
    id: "manageBDD",
    textMenu: "Administrar BDD",
    icon: BsDatabaseFillAdd,
    showOption: true,
    titlePanel: "🛠️ Panel de Administración de Base de Datos en Firebase",
    descriptionPanel:
      "Permite guardar los datos iniciales necesarios para la Landing Page en la base de datos Firebase Realtime Database. Se sobreescriben los datos existentes.",
  },
  config: {
    id: "config",
    textMenu: "Súper config",
    icon: "",
    showOption: true,
  },
  catalog: {
    id: "catalog",
    textMenu: "Catálogo",
    icon: GrCatalog,
    showOption: true,
    titlePanel: "Sección de Catálogo de Vehículos",
    descriptionPanel:
      "Configuración de la sección de catálogo de vehículos de la landing page.",
  },
};

// Datos para el menú del DASHBOARD según el rol de usuario
export const dashboardMenu = {
  user: [menuDefinition.usuarioHome, menuDefinition.misDatos],
  admin: [
    menuDefinition.adminHome,
    menuDefinition.productos,
    menuDefinition.heroSection,
  ],
  superadmin: [
    menuDefinition.manageBDD,
    menuDefinition.heroSection,
    menuDefinition.featuresSection,
    menuDefinition.historySection,
    menuDefinition.teamTitleSection,
    menuDefinition.teamMembersSection,
    menuDefinition.aboutUs,
    menuDefinition.imageCommerce,
    menuDefinition.dataLegalCommerce,
    menuDefinition.dataContact,
    menuDefinition.dataFooter,
    menuDefinition.catalog,
    menuDefinition.config,
  ],
};

// ------------------------------------------------------------------------------------------------------------//

// Datos para prueba de documentos de vehículos, se cargan algunos documentos en Firestore para poder probar distintas secciones
export const catalogInitialData = [
  {
    tipoArticulo: "vehiculo",
    categorySlug: "automotores",
    tipo: "nuevo",
    marca: "Fiat",
    marcaSlug: "fiat",
    modelo: "Cronos",
    version: "Drive 1.3",
    anio: 2025,
    color: "Negro Vulcano",
    kilometrajeKm: 0,
    transmision: "manual",
    combustible: "nafta",
    puertas: 4,
    pasajeros: 5,
    precio: 31239000,
    moneda: "ARS",
    estado: "disponible",
    descripcion: "Sedán 0 km, amplio baúl y excelente equipamiento.",
    imagenes: [
      {
        url: "https://autofichas.com.ar/wp-content/uploads/2022/07/cronos-negro-vulcano.jpeg",
        alt: "Fiat Cronos negro",
      },
    ],
    especificaciones: {
      cilindradaCc: 1332,
      tipoMotor: "combustion",
      alimentacion: "inyeccion",
      potenciaHp: 99,
      capacidadBaulLitros: 525,
      capacidadTanqueLitros: 48,
      abs: true,
      airbags: 2,
      aireAcondicionado: true,
    },
  },
  {
    tipoArticulo: "vehiculo",
    categorySlug: "automotores",
    tipo: "usado",
    marca: "Ford",
    marcaSlug: "ford",
    modelo: "Ranger",
    version: "XLS 4x4",
    anio: 2023,
    color: "Gris",
    kilometrajeKm: 31700,
    transmision: "manual",
    combustible: "diesel",
    puertas: 4,
    pasajeros: 5,
    precio: 52700000,
    moneda: "ARS",
    estado: "disponible",
    descripcion: "Pick-up doble cabina, ideal para trabajo y ruta.",
    imagenes: [
      {
        url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=85",
        alt: "Pick-up gris",
      },
    ],
    especificaciones: {
      cilindradaCc: 3200,
      tipoMotor: "combustion",
      potenciaHp: 200,
      traccion: "4x4",
      abs: true,
      airbags: 6,
      aireAcondicionado: true,
    },
  },
  {
    tipoArticulo: "vehiculo",
    categorySlug: "automotores",
    tipo: "usado",
    marca: "Toyota",
    marcaSlug: "toyota",
    modelo: "Corolla",
    version: "XEI 2.0 CVT",
    anio: 2023,
    color: "Blanco",
    kilometrajeKm: 28500,
    transmision: "cvt",
    combustible: "nafta",
    puertas: 4,
    pasajeros: 5,
    precio: 35500000,
    moneda: "ARS",
    estado: "disponible",
    descripcion: "Sedán automático, cómodo y equipado para la ciudad.",
    imagenes: [
      {
        url: "https://images.unsplash.com/photo-1638618164682-12b986ec2a75?auto=format&fit=crop&w=1200&q=85",
        alt: "Sedán blanco",
      },
    ],
    especificaciones: {
      cilindradaCc: 1987,
      tipoMotor: "combustion",
      alimentacion: "inyeccion",
      potenciaHp: 170,
      capacidadBaulLitros: 470,
      abs: true,
      airbags: 7,
      aireAcondicionado: true,
    },
  },
  {
    tipoArticulo: "vehiculo",
    categorySlug: "motocicletas",
    tipo: "usado",
    marca: "Honda",
    marcaSlug: "honda",
    modelo: "XR 300L Tornado",
    version: "ABS",
    anio: 2024,
    color: "Rojo",
    kilometrajeKm: 6400,
    transmision: "manual",
    combustible: "nafta",
    precio: 8500000,
    moneda: "ARS",
    estado: "disponible",
    descripcion: "Moto doble propósito, ágil para ciudad y caminos rurales.",
    imagenes: [
      {
        url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85",
        alt: "Motocicleta roja",
      },
    ],
    especificaciones: {
      cilindradaCc: 293,
      tipoMotor: "combustion",
      alimentacion: "inyeccion",
      potenciaHp: 24,
      abs: true,
    },
  },
  {
    tipoArticulo: "vehiculo",
    categorySlug: "nauticos",
    tipo: "usado",
    marca: "Tracker",
    marcaSlug: "tracker",
    modelo: "Open 630",
    version: "Mercury 115 HP",
    anio: 2022,
    color: "Blanco",
    precio: 28500000,
    moneda: "ARS",
    estado: "disponible",
    descripcion: "Lancha abierta, equipada para pesca y paseos.",
    imagenes: [
      {
        url: "https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&w=1200&q=85",
        alt: "Lancha blanca",
      },
    ],
    especificaciones: {
      tipoMotor: "fueraDeBorda",
      combustible: "nafta",
      potenciaHp: 115,
      pasajeros: 7,
    },
  },
  {
    tipoArticulo: "accesorio",
    categorySlug: "accesorios",
    tipo: "nuevo",
    marca: "HJC",
    marcaSlug: "hjc",
    modelo: "I70",
    color: "Negro mate",
    precio: 420000,
    moneda: "ARS",
    estado: "disponible",
    descripcion: "Casco integral con visor solar interno.",
    imagenes: [
      {
        url: "https://images.unsplash.com/photo-1558980394-0c018c5cfac5?auto=format&fit=crop&w=1200&q=85",
        alt: "Casco integral negro",
      },
    ],
    especificaciones: {
      tipoAccesorio: "casco",
      talle: "M",
      material: "policarbonato",
      certificacion: "ECE 22.06",
    },
  },
];

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

// Configuración de temas para la landing page, usando clases nativas de Tailwind CSS
// Definís tu diccionario de temas con clases nativas de Tailwind
export const CONFIG_TEMAS = {
  "custom-blue": {
    navbar: "bg-blue-900 border-blue-800 text-blue-100",
    button: "bg-blue-500 hover:bg-blue-600 text-white",
    footer: "bg-slate-950 text-slate-400",
    horizontalBar: "bg-blue-500 text-white",
    background: "bg-blue-500",
  },
  dark: {
    navbar: "bg-slate-900 border-slate-800 text-slate-100",
    button: "bg-cyan-500 hover:bg-cyan-600 text-slate-950",
    footer: "bg-slate-950 text-slate-500",
    horizontalBar: "bg-cyan-800 text-slate-950",
    background: "bg-cyan-500",
  },
  light: {
    navbar: "bg-white border-slate-200 text-slate-800",
    button: "bg-blue-600 hover:bg-blue-700 text-white",
    footer: "bg-slate-100 text-slate-600",
    horizontalBar: "bg-blue-600 text-white",
    background: "bg-white",
  },
};
