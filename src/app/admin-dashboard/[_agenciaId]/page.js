import { getBusinessById } from "@/utils/getBusinessById";

async function page({ params }) {
  const { _agenciaId } = await params;

  const agenciaData = await getBusinessById(_agenciaId);

  if (!agenciaData) {
    return <div>No se encontró la agencia.</div>;
  }

  const businessData = agenciaData?.business || {};

  return <div>{`Page de ${businessData.name}`}</div>;
}

export default page;
