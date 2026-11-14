"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useRouter, usePathname } from "next/navigation";

export default function NavbarTemp() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // console.log("Session in NavbarTemp:", session); // Agrega este console.log para depuración

  const handleAuthClick = () => {
    session ? signOut({ callbackUrl: "/" }) : router.push("/auth/login");
  };

  if (status === "loading") {
    return <div className="bg-slate-800 text-slate-300 p-4">Loading...</div>;
  }

  return (
    <nav className="bg-slate-800 text-slate-300 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Zindo</div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-slate-100">
            Inicio
          </Link>
          <Link href="/about" className="hover:text-slate-100">
            Acerca de
          </Link>
          <Link href="/contact" className="hover:text-slate-100">
            Contacto
          </Link>

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
      </div>
    </nav>
  );
}
