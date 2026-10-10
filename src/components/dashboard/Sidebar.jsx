import Link from "next/link";
import { dashboardMenu } from "@/utils/SettingInitialData";

export default function Sidebar({ role = "invitado", view = "defaultPanel" }) {
  const menu = dashboardMenu[role] || [];

  return (
    <div className="flex flex-col h-full">
      {/* Encabezado de Sidebar*/}
      {/* <div className="h-18 bg-slate-700 flex items-center justify-center">
        <CommerceLogo mode="dashboard" />
      </div> */}

      {/* Cuerpo intermedio*/}
      <div className="flex sm:flex-col flex-row flex-1 bg-slate-600 overflow-auto p-4 space-y-2">
        {menu.map((item) => {
          if (!item.showOption) return null;

          const label = item.label ?? item.textMenu ?? item.id;
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              className={`rounded p-2 hover:text-white cursor-pointer ${
                view === item.id ? "bg-slate-500 text-white" : ""
              }`}
            >
              <Link
                href={`dashboard?view=${item.id}`}
                className="hover:text-white flex flex-row items-center gap-4"
              >
                {IconComponent && <IconComponent className="" />}
                <span className="hidden sm:block">{label}</span>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Pie de Sidebar*/}
      {/* <div className="h-18  flex items-center justify-center">
        <Agency
          forceShowAgency={true}
          showNameDeveloper={false}
          sizeIcon={28}
        />
      </div> */}
    </div>
  );
}
