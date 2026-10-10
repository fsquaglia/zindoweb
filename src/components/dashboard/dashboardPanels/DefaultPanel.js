import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function DefaultPanel() {
  const session = await getServerSession(authOptions);

  // --- Si no hay sesión ---

  if (!session) {
    return (
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <span>Hola Invitado.</span>
        <span>Por favor, inicia sesión para acceder al dashboard.</span>
      </div>
    );
  }

  // --- Si hay sesión ---
  const roleShort = session.user?.role;
  const name = session.user?.name || "Usuario";

  const roleMap = {
    admin: "Administrador",
    user: "Usuario",
    superadmin: "Super Administrador",
  };

  const role = roleMap[roleShort] || "Invitado";

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      {roleShort
        ? `Hola ${name}, tu rol es ${role}.`
        : `Hola ${name}. No se pudo determinar tu rol.`}

      <span>¿Qué quieres hacer hoy?</span>
      <span>Elige un elemento del menú para empezar</span>
    </div>
  );
}
