"use client";
import Link from "next/link";
import { TbWorldWww } from "react-icons/tb";
import { usePathname } from "next/navigation";

export default function Agency({
  forceShowAgency = false,
  showNameDeveloper = true,
  sizeIcon = 20,
}) {
  const pathname = usePathname();

  const links = [
    {
      href: "https://www.linkedin.com/in/fersquaglia/",
      icon: <TbWorldWww size={sizeIcon} />,
      text: "Desarrollado por Fernando Squaglia",
      title: "Desarrollador",
    },
  ];

  if (forceShowAgency) {
    return <Viewer showNameDeveloper={showNameDeveloper} links={links} />;
    // Mostrar el footer solo en rutas que no contienen "admin" o "dashboard"
  } else if (
    pathname.includes("admin") ||
    pathname.includes("users") ||
    pathname.includes("dashboard") ||
    pathname.includes("superadmin") ||
    pathname.includes("auth")
  ) {
    return null;
  } else {
    return <Viewer showNameDeveloper={showNameDeveloper} links={links} />;
  }
}

function Viewer({ showNameDeveloper = true, links = [] }) {
  return (
    <footer className="w-full h-full flex flex-row items-center justify-center py-4  bg-yellow-100 text-slate-400">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex flex-row items-center justify-center gap-2 mx-4"
          target="_blank" // Abre en una nueva pestaña
          rel="noopener noreferrer" // Buenas prácticas de seguridad
        >
          <span title={link.title}>{link.icon}</span>
          {showNameDeveloper && (
            <span className="hidden sm:block text-sm md:text-base">
              {link.text}
            </span>
          )}
        </Link>
      ))}
    </footer>
  );
}
