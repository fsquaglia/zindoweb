"use client";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Spinenr from "@/ui/Spinenr";

function SessionComponent({
  prefixForName = "",
  classNameText = "",
  scrolled = false,
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const isInDashboard = pathname?.includes("dashboard");

  const handleClickDashboard = () => {
    const role = session?.user?.role || null;
    role ? router.push(`/${role}/dashboard`) : router.push("/");
  };

  const handleAuthClick = () => {
    session ? signOut({ callbackUrl: "/" }) : router.push("/auth/login");
  };

  // ⏳ Estado de carga
  if (status === "loading") {
    return <Spinenr type="default" />;
  }

  // ❌ Sin sesión
  if (!session) {
    return (
      <button
        onClick={handleAuthClick}
        className={`flex flex-row items-center gap-1    ${
          scrolled
            ? "lg:text-slate-700"
            : "lg:text-slate-100 lg:drop-shadow-[0_0_3px_black]"
        }`}
        title="Login"
      >
        <FaRegUser />
        <span className={classNameText || ""}>Login</span>
      </button>
    );
  }

  // ✅ Con sesión
  return (
    <div className="flex flex-row items-center gap-4">
      {/*Nombre y  Imagen del usuario si está logueado, click redirige al Dashboard */}
      {session.user && (
        <>
          <div className="hidden sm:block">
            {/* Solo necesitamos verificar prefixForName ahora */}
            {prefixForName && (
              <span className="text-sm">
                {`${prefixForName}, ${session.user.name || "Anónimo"}`}
              </span>
            )}
          </div>

          {session.user.image && (
            <Image
              src={session.user.image}
              alt="User Image"
              width={32}
              height={32}
              className={`rounded-full transition-transform duration-300 hover:scale-110 ${
                !isInDashboard ? "cursor-pointer" : ""
              }`}
              title={`Panel de ${session.user.name}`}
              onClick={!isInDashboard ? handleClickDashboard : undefined}
            />
          )}
        </>
      )}

      <button
        onClick={handleAuthClick}
        className="flex items-center justify-center bg-slate-200 rounded-full size-8"
        title="Logout"
      >
        <RiLogoutCircleRLine
          size={24}
          className="text-red-500 cursor-pointer transition-transform duration-300 hover:scale-110"
        />
      </button>
    </div>
  );
}

export default SessionComponent;
