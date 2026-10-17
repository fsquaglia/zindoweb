import { notFound } from "next/navigation";
import { getBusinessDataForDomain } from "@/utils/getBusinessDataForDomain";


export async function generateMetadata({ params }, parent) {
  const { _tenant } = await params;
  const tenantData = await getBusinessDataForDomain(_tenant);

  if (!tenantData) {
    return {};
  }

  const { businessData } = tenantData;
  const parentMetadata = await parent;
  const businessName =
    typeof businessData.name === "string" ? businessData.name.trim() : "";
  const businessDescription =
    typeof businessData.description === "string"
      ? businessData.description.trim()
      : "";

  return {
    ...(businessName && { title: businessName }),
    ...(businessDescription && { description: businessDescription }),
    ...(!businessDescription && {
      description: parentMetadata.description,
    }),
  };
}

export default async function TenantLayout({ children, params }) {
  const resolvedParams = await params;
  const dominioActual = resolvedParams._tenant; // ejemplo norte.localhost

  // Obtenemos el businessId y los datos públicos del negocio para renderizar la página.
  const tenantData = await getBusinessDataForDomain(dominioActual);
  if (!tenantData) {
    notFound();
  }
  const { businessData } = tenantData;

  return (
    <div
      className={`min-h-screen flex flex-col ${businessData?.landingConfig?.theme.navbar || ""}`}
    >
      {children}
    </div>
  );
}
