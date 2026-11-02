export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Error 404
      </p>
      <h1 className="mt-3 text-3xl font-bold text-white">
        Dominio o página no encontrados
      </h1>
      <p className="mt-4 max-w-lg text-slate-300">
        El dominio solicitado no está registrado o la página no existe.
      </p>
    </main>
  );
}