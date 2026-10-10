import CardTeam from "./CardTeam";
import { fetchDataFromAPIforSection } from "../../utils/helpers";

export default async function Team() {
  const [teamMembersData, teamTextTitleData] = await Promise.all([
    fetchDataFromAPIforSection("dataTeamMembers"),
    fetchDataFromAPIforSection("dataTeamTextTitle"),
  ]);

  const hasData = teamMembersData?.length > 0 && teamTextTitleData?.length > 0;

  if (!hasData) return null;

  const { title, description } = teamTextTitleData[0];
  const visibleMembers = teamMembersData.filter((p) => p.showInTeam);

  if (visibleMembers.length === 0) return null;

  return (
    <section className="flex flex-col items-center my-8 px-4">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center">
          {title ?? "Nuestro equipo"}
        </h2>
        <p className="text-center max-w-2xl mb-8">
          {description ??
            "Conoce al equipo dedicado que hace posible nuestro concesionario."}
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {visibleMembers.map((person, index) => (
          <CardTeam key={person.id ?? index} person={person} />
        ))}
      </div>
    </section>
  );
}
