import RevealOnView from "./RevealOnView";

const Svg1 = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Silueta exterior del faro estilo vintage/custom */}
      <path
        d="M30 40 C30 20, 70 20, 70 40 C70 65, 30 65, 30 40 Z"
        className="text-slate-700"
      />
      <path d="M35 62 L25 80" className="text-slate-700" />
      <path d="M65 62 L75 80" className="text-slate-700" />
      <path d="M45 22 L55 22" className="text-slate-700" />
      {/* Haz de luz encendido (El toque de color violeta/gris de la referencia) */}
      <circle
        cx="50"
        cy="42"
        r="10"
        className="text-slate-400"
        strokeWidth="2"
      />
      <line
        x1="20"
        y1="25"
        x2="10"
        y2="15"
        className="text-slate-400/70"
        strokeWidth="2"
      />
      <line
        x1="15"
        y1="42"
        x2="2"
        y2="42"
        className="text-slate-400/70"
        strokeWidth="2"
      />
      <line
        x1="20"
        y1="60"
        x2="10"
        y2="70"
        className="text-slate-400/70"
        strokeWidth="2"
      />
    </svg>
  );
};
const Svg2 = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Arco del tacómetro/velocímetro */}
      <path
        d="M20 75 A 38 38 0 1 1 80 75"
        className="text-slate-700"
        strokeDasharray="2 2"
      />
      <path d="M25 70 A 32 32 0 1 1 75 70" className="text-slate-700" />
      {/* Aguja apuntando al futuro/alta velocidad */}
      <line
        x1="50"
        y1="65"
        x2="72"
        y2="35"
        className="text-slate-700"
        strokeWidth="3"
      />
      <circle
        cx="50"
        cy="65"
        r="5"
        className="text-slate-700"
        fill="currentColor"
      />
      {/* Destellos de visión/enfoque */}
      <line
        x1="50"
        y1="12"
        x2="50"
        y2="2"
        className="text-slate-400/70"
        strokeWidth="2"
      />
      <line
        x1="78"
        y1="24"
        x2="86"
        y2="18"
        className="text-slate-400/70"
        strokeWidth="2"
      />
      <line
        x1="22"
        y1="24"
        x2="14"
        y2="18"
        className="text-slate-400/70"
        strokeWidth="2"
      />
    </svg>
  );
};
const Svg3 = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Manubrio / Puños de la moto (Simetría de manos de tu dibujo) */}
      <path
        d="M10 50 L35 50 L45 58 L55 58 L65 50 L90 50"
        className="text-slate-700"
        strokeWidth="3"
      />
      {/* Puños texturados (Grips) */}
      <rect
        x="12"
        y="46"
        width="18"
        height="8"
        rx="2"
        className="text-slate-700"
        fill="white"
      />
      <rect
        x="70"
        y="46"
        width="18"
        height="8"
        rx="2"
        className="text-slate-700"
        fill="white"
      />
      {/* Los espejos retrovisores custodiando */}
      <path
        d="M30 46 L26 32 C26 32, 40 26, 40 32 Z"
        className="text-slate-400/70"
        strokeWidth="2"
      />
      <path
        d="M70 46 L74 32 C74 32, 60 26, 60 32 Z"
        className="text-slate-400/70"
        strokeWidth="2"
      />
      {/* Centro de equilibrio */}
      <circle
        cx="50"
        cy="58"
        r="3"
        className="text-slate-700"
        fill="currentColor"
      />
    </svg>
  );
};

const container = ({ id, title, text }) => {
  return (
    <div
      key={id}
      className={`flex flex-col items-center px-6 py-8 hover:bg-slate-50 hover:shadow-md transition-colors duration-500 rounded-xl`}
    >
      {/* Contenedor del Icono SVG */}
      <div className="w-28 h-28 flex items-center justify-center mb-6">
        <Svg1 />
      </div>
      <h3 className="text-2xl font-black text-slate-800 tracking-wider uppercase mb-3">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{text}</p>
    </div>
  );
};
export default async function ComponentCompanyIdentity01({ data = [] }) {
  console.log(data);

  // Fallbacks de texto por si la base de datos Firestore viene vacía
  const misionText =
    data?.mision?.value ||
    "Impulsar tu libertad sobre dos ruedas, conectándote con la moto perfecta a través de una experiencia transparente, rápida y segura.";
  const visionText =
    data?.vision?.value ||
    "Ser la plataforma líder y más confiable de Argentina para la compra y venta de motocicletas, innovando el mercado digital de las agencias.";
  const valoresText =
    data?.valores?.value ||
    "Pasión por los motores, transparencia absoluta en cada transacción, seguridad garantizada y un compromiso total con nuestra comunidad motoquera.";

  const valores = [
    { id: 1, title: "mision", text: misionText },
    { id: 2, title: "vision", text: visionText },
    { id: 3, title: "valores", text: valoresText },
  ];
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* CONTENEDOR PRINCIPAL CON DIVISIONES IGUAL A TU IMAGEN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-start text-center">
          {valores.map((item, index) => (
            <RevealOnView key={item.id} delay={index * 120}>
              {container(item)}
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
