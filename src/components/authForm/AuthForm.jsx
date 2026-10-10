"use client";

import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import InputSection from "./InputSection";
import DivContainer from "./DivContainer";
import { validateEmail } from "@/utils/validations";

// Constantes fuera del componente para eficiencia
const ADMIN_ROLES = ["admin", "superadmin"];

function AuthForm() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  // Manejo de callbackUrl: si no existe, por defecto es la raíz "/"
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  useEffect(() => {
    // Solo actuamos si la sesión está cargada (authenticated o unauthenticated)
    if (status === "authenticated") {
      const userRole = session.user.role;
      const isAdmin = ADMIN_ROLES.includes(userRole);

      // Lógica de redirección centralizada
      if (callbackUrl && callbackUrl !== "/") {
        const callbackUrlIsSafe =
          !callbackUrl.startsWith("/admin") &&
          !callbackUrl.startsWith("/superadmin");

        if (isAdmin || (userRole === "user" && callbackUrlIsSafe)) {
          // Permitido: redirige a la URL solicitada
          router.push(callbackUrl);
        } else {
          // No permitido: redirige a no autorizado
          router.push("/unauthorized");
        }
      } else {
        // Sin callbackUrl específico, redirige al dashboard por defecto del rol
        router.push(`/${userRole}/dashboard`);
      }
    }
    // Nota: Si status es "unauthenticated", el usuario permanece en la página de login
  }, [session, status, router, callbackUrl]); // Dependencias completas

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Limpiar error al intentar un nuevo submit

    const { isValid, errorMsg } = validateEmail(email);
    if (!isValid) {
      setError(errorMsg);
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
      setError(res.error);
    }
    // NOTA IMPORTANTE: Ya NO necesitamos un 'else' aquí.
    // El useEffect se encargará de la redirección automáticamente
    // cuando next-auth actualice el estado de 'session' y 'status'.
  };

  // Puedes mostrar un spinner si el estado es "loading"
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <div className="animate-spin rounded-full size-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Si no está autenticado, muestra el formulario de login
  return (
    <DivContainer typeForm={"login"} handleSubmit={handleSubmit} error={error}>
      {/*EMAIL*/}
      <InputSection
        label={"Email"}
        name={"email"}
        value={email}
        showEye={false}
        placeholder={"mail@loopple.com"}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/*CONTRASEÑA*/}
      <InputSection
        label={"Contraseña"}
        name={"password"}
        value={password}
        showEye={true}
        placeholder={"Ingresa una contraseña"}
        onChange={(e) => setPassword(e.target.value)}
      />
    </DivContainer>
  );
}

// El componente envoltorio con Suspense es correcto y necesario
export default function AuthPage() {
  return (
    <Suspense fallback={<div className="text-lg">Loading...</div>}>
      <AuthForm />
    </Suspense>
  );
}
