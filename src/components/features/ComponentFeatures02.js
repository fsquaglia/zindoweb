import Image from "next/image";

function CardRectangle({ title, description }) {
  return (
    <div
      className={`
        p-6 text-center bg-slate-950/40 text-white
        
        /* 1. ESTADO BASE DEL BORDE: Recto y sutil */
        border border-slate-800 rounded-none 
        
        /* 2. EFECTO HOVER: Transición suave hacia bordes redondeados */
        transition-all duration-500 ease-out
        hover:rounded-xl hover:border-cyan-500/80
        
        /* 3. SIMULACIÓN DE PULSE: Sombra difuminada con animación nativa de Tailwind */
        hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]
        hover:animate-pulse
      `}
    >
      <h3 className="text-lg md:text-xl font-bold tracking-wide min-h-14">
        {title}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed font-light min-h-20">
        {description}
      </p>
    </div>
  );
}

export default async function ComponentFeatures02({
  data = [],
  theme = "dark",
}) {
  // 2. Extraemos el objeto de manera segura de la posición cero del array
  const datosComponente = data[0] || {};

  // 3. Fallbacks de textos orientados a personas individuales si no vienen de la BDD
  const mainTitle =
    datosComponente.firstLine || "Soluciones de Movilidad a tu Medida";

  const col1Title =
    datosComponente.col1Title || "Tu Próximo Vehículo de Forma Fácil";
  const col1Desc =
    datosComponente.col1Desc ||
    "Te acompañamos en cada paso para que encuentres el auto ideal que se adapte a tu rutina, tu familia y tu presupuesto.";

  const col2Title = datosComponente.col2Title || "Asesoramiento Experto";
  const col2Desc =
    datosComponente.col2Desc ||
    "Atención personalizada y transparente. Resolvemos todas tus dudas mecánicas y administrativas sin vueltas.";

  const col3Title =
    datosComponente.col3Title || "Amplia Selección de Usados y 0km";
  const col3Desc =
    datosComponente.col3Desc ||
    "Explorá un catálogo multimarca rigurosamente seleccionado y revisado, listo para que te lo lleves a manejar hoy mismo.";

  //Creamos un array de objetos con {colTitle, colDesc}
  const colArray = [
    { colTitle: col1Title, colDesc: col1Desc },
    { colTitle: col2Title, colDesc: col2Desc },
    { colTitle: col3Title, colDesc: col3Desc },
  ];

  // URL de fondo (Podés usar tus public_ids concatenados o una por defecto limpia)
  const bgImage =
    datosComponente.urlImage ||
    "https://images.unsplash.com/photo-1595696389610-2d339d4573c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  return (
    <div className="relative w-full min-h-[500px] md:h-[450px] overflow-hidden bg-slate-950 flex flex-col justify-center py-12 px-6 md:px-12 ">
      {/* CAPA DE IMAGEN DE FONDO */}
      <div className="absolute inset-0 w-full h-full grid grid-cols-12">
        {/* Columna Izquierda: Vacía */}
        <div className="col-span-7 w-full h-full bg-transparent" />

        {/* Columna Derecha: Contenedor con h-full y overflow-hidden para recortar excedentes */}
        <div className="col-span-5 w-full h-full bg-transparent relative overflow-hidden">
          <Image
            src={bgImage}
            alt="Movilidad individual"
            fill // 👈 Reemplaza a w-full h-full, obligando a la imagen a llenar el div padre relativo
            sizes="(max-width: 768px) 100vw, 40vw" // 👈 Optimiza el tamaño del archivo según el responsive (7 a 5)
            priority // 👈 Al ser el fondo principal de la sección, le avisa a Next.js que la cargue de inmediato
            className="object-cover object-center opacity-80 brightness-75"
          />
        </div>

        {/* Capa de degradado */}
        <div className="absolute inset-0 bg-gradient-to-r from-black from-50% via-black via-60% to-transparent to-90% md:to-black/30 z-10 pointer-events-none" />
      </div>

      {/* CONTENEDOR ESTRUCTURAL DE TEXTOS */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col gap-10 md:gap-14 text-white">
        {/* TÍTULO PRINCIPAL DEL BLOQUE */}
        <h2 className="text-2xl md:text-4xl font-light tracking-wide text-slate-100 max-w-3xl">
          {mainTitle}
        </h2>

        {/* GRILLA RESPONSIVA: 3 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {colArray.map(({ colTitle, colDesc }, index) => (
            <CardRectangle key={index} title={colTitle} description={colDesc} />
          ))}
        </div>

        {/* BOTÓN CTA */}
        <button
          className={`max-w-32 px-6 py-2.5 font-semibold text-sm rounded transition-all duration-300 transform active:scale-95 shadow-md ${theme.button}`}
        >
          {datosComponente.callToActionText || "Visitanos"}
        </button>
      </div>
    </div>
  );
}
