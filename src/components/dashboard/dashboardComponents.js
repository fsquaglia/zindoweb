import dynamic from "next/dynamic";

const DefaultPanel = dynamic(() => import("./dashboardPanels/DefaultPanel"));
const UsuarioHome = dynamic(() => import("./dashboardPanels/UserpruebaBorrar"));
const ManageBDD = dynamic(() => import("./dashboardPanels/ManageBDD"));
const HeroSection = dynamic(
  () => import("./dashboardPanels/heroSection/HeroSection"),
);
const FeaturesSection = dynamic(
  () => import("./dashboardPanels/featuresSection/FeaturesSection"),
);
const HistorySection = dynamic(
  () => import("./dashboardPanels/historySection/HistorySection"),
);
const TeamTitleSection = dynamic(
  () => import("./dashboardPanels/teamSection/TeamTitleSection"),
);
const TeamMembers = dynamic(
  () => import("./dashboardPanels/teamSection/TeamMembers"),
);
const AboutUs = dynamic(
  () => import("./dashboardPanels/locationAndAbout/AboutUs"),
);
const ImageCommerce = dynamic(
  () => import("./dashboardPanels/locationAndAbout/ImageCommerce"),
);
const DataLegalCommerce = dynamic(
  () => import("./dashboardPanels/locationAndAbout/DataLegalCommerce"),
);
const Contact = dynamic(() => import("./dashboardPanels/contact/Contact"));

const Footer = dynamic(() => import("./dashboardPanels/footer/Footer"));

const Catalog = dynamic(() => import("./dashboardPanels/catalogo/Catalogo"));

export const dashboardComponents = {
  detaultPanel: DefaultPanel,
  usuarioHome: UsuarioHome,
  manageBDD: ManageBDD,
  heroSection: HeroSection,
  featuresSection: FeaturesSection,
  historySection: HistorySection,
  teamTitleSection: TeamTitleSection,
  teamMembersSection: TeamMembers,
  aboutUs: AboutUs,
  imageCommerce: ImageCommerce,
  dataLegalCommerce: DataLegalCommerce,
  dataContact: Contact,
  dataFooter: Footer,
  catalog: Catalog,
};
