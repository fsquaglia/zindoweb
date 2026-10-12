import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { getAllowedViewIds } from "@/components/dashboard/helpers";
import PanelRenderer from "@/components/dashboard/dashboardPanels/PanelRenderer";
import Agency from "@/components/agency/Agency";

export default async function Dashboard({ params, searchParams }) {
  const { role: roleFromUrl } = await params;
  const session = await getServerSession(authOptions);
  const roleFromSession = session?.user?.role;
  const view = (await searchParams)?.view || "defaultPanel";
  const allowedIds = getAllowedViewIds(roleFromSession);
  const canAccess = allowedIds.includes(view);

  //TODO Validar que existe sesión
  // if (!session) {
  //   redirect("/auth/login");
  // }

  //TODO Validar que el rol de la URL coincida con el de la sesión
  // if (roleFromUrl !== roleFromSession) {
  //   redirect(`/${roleFromSession}/dashboard`);
  // }

  // Determinar el contenido a mostrar
  const content = canAccess ? view : "detaultPanel";

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center border-b border-slate-300">
        <Header />
      </div>

      <div className="flex-1 flex flex-col sm:flex-row bg-slate-100 text-slate-500">
        <div className="sm:w-64 text-slate-300">
          <Sidebar role={roleFromSession} view={view} />
        </div>
        <main className="flex-1 overflow-auto">
          <PanelRenderer panel={content} />
        </main>
      </div>
      <div className="h-18  flex items-center justify-center">
        <Agency
          forceShowAgency={true}
          showNameDeveloper={false}
          sizeIcon={28}
        />
      </div>
    </div>
  );
}
