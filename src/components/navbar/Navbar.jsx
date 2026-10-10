"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import SessionComponent from "./SessionComponent";
import CategoryMenu from "./CategoryMenu";
import CommerceMenu from "./CommerceMenu";
import CommerceLogo from "../commerceData/CommerceLogo";

export default function Navbar({
  dataCategoriesInitialData,
  commerceMenuInitialData,
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // verificar si estoy en la Landing Page ("/")
  const isLandingPage = pathname === "/";
  const isDashboard = pathname.toLowerCase().includes("dashboard");

  if (isDashboard) {
    return null;
  }

  const classNameText = `
    relative cursor-pointer 
    after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
    after:w-0 after:h-[2px] after:transition-all after:duration-300 
    hover:after:w-full
    ${scrolled ? "lg:after:bg-black" : "lg:after:bg-white"}
  `;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-18 flex items-center justify-center my-4 sm:mx-12">
      <div
        className={`sm:border rounded-full border-gray-300 w-full flex flex-row justify-between items-center p-4 transition-colors duration-300 mx-4 
        ${scrolled ? "bg-black/60 lg:bg-slate-200" : "bg-transparent"}  
        ${!session ? "lg:shadow-md" : ""}`}
      >
        {/* Logo y menú de categorías */}
        <div className="flex flex-row items-center gap-4">
          <CommerceLogo size={40} />
          {/* Menú de categorías sólo en la página de aterrizaje */}
          {isLandingPage && (
            <CategoryMenu
              textMenu={dataCategoriesInitialData}
              classNameAdditional={"hidden lg:flex"}
              classNameText={classNameText}
              scrolled={scrolled}
            />
          )}
        </div>

        <div className="flex flex-row items-center gap-8">
          {/* Menú del comercio sólo en la página de aterrizaje */}
          {isLandingPage && (
            <CommerceMenu
              iconMenu={commerceMenuInitialData}
              classNameAdditional={"hidden lg:flex"}
              classNameText={classNameText}
              scrolled={scrolled}
            />
          )}

          {/* Botón Login / Logout Desktop */}
          <div className="hidden lg:flex">
            <SessionComponent
              classNameText={classNameText}
              scrolled={scrolled}
            />
          </div>
        </div>
        {/* -------- Menú móvil -------- */}
        <div
          className={`flex flex-col justify-start items-end lg:hidden overflow-hidden transition-all duration-500 ease-in-out z-50 px-4 py-2 h-screen ${
            open
              ? " bg-black/90 text-gray-100 fixed top-0 right-0"
              : "max-h-20 fixed top-8 right-4 sm:right-16"
          }`}
        >
          {/* Botón de menú Burguer/Close */}
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>

          {open && (
            <div className="flex flex-col gap-20 min-w-screen p-4">
              {/* Menú de categorías sólo en la página de aterrizaje */}
              {isLandingPage && (
                <CategoryMenu
                  textMenu={dataCategoriesInitialData}
                  classNameAdditional="flex"
                  classNameText={classNameText}
                />
              )}

              {/* Menú del comercio sólo en la página de aterrizaje */}
              {isLandingPage && (
                <CommerceMenu
                  iconMenu={commerceMenuInitialData}
                  classNameAdditional={"flex"}
                  classNameText={classNameText}
                />
              )}

              {/* Botón Login / Logout (mobile) */}
              <div className="flex items-center justify-center">
                <SessionComponent classNameText={classNameText} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
