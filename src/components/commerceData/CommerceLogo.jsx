"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/android-chrome-192.png";
import { dataLegalCommerce } from "@/utils/SettingInitialData";
import SmoothScrollLink from "@/utils/SmoothScrollLink";

export default function CommerceLogo({
  size = 48,
  mode = "landing", // "landing" | "dashboard"
  className = "",
}) {
  const pathname = usePathname();

  const img = (
    <Image
      src={logo}
      alt={`Logo ${dataLegalCommerce.fantasia}`}
      width={size}
      height={size}
      title="Inicio"
      className={`rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer ${className}`}
      priority
    />
  );

  // En la landing, lleva suavemente a la sección principal.
  if (pathname === "/") {
    return <SmoothScrollLink href="#main">{img}</SmoothScrollLink>;
  }

  // En cualquier otra ruta, vuelve al inicio.
  return <Link href="/">{img}</Link>;
}
