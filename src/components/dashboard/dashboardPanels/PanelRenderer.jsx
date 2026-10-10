import { dashboardComponents } from "../dashboardComponents";

export default function PanelRenderer({ panel }) {
  const Component = dashboardComponents[panel];

  if (!Component) {
    return <div>Sección no desarrollada aún.</div>;
  }

  return <Component />;
}
