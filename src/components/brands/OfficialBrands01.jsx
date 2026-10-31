import Link from "next/link";

export default async function OfficialBrands({ data = [] }) {
  if (!data || data.length === 0) {
    return null;
  }

  const titleSection = data[0]?.titleSection || "Nuestras Marcas Oficiales";
  const brandList = data.slice(1) || [];
  // console.log(brandList);
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center gap-10 select-none">
      {/* TÍTULO SECCIÓN */}
      <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-slate-800 uppercase text-center">
        {titleSection}
      </h2>

      {/* CONTENEDOR DE MARCAS */}
      <div className="w-full max-w-7xl mx-auto flex flex-row flex-wrap items-center justify-center gap-1 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x">
        {brandList.map((brand, index) => {
          // 🚨 FILTRADO: Si showInBrands no es explícitamente true, saltamos este elemento y no renderizamos nada
          if (!brand?.showInBrands) return null;

          const urlImage = brand?.brandUrlImage256Local
            ? brand.brandUrlImage256Local
            : brand.brandUrlImageFull;
          const brandUrlImage = urlImage ? urlImage : null;

          return (
            /* Tu contenedor estratégico p-4 que resguarda el escalado */
            <div key={brand?.brandSlug || index} className="p-2">
              <Link
                href={brand.brandSlug || "#"}
                title={`Ver vehículos de ${brand.brandName || "marca"}`}
                className="
            /* 1. ESTRUCTURA DE LA CAJA BASE */
            group relative min-w-[60px] min-h-[60px] w-18 h-18 md:w-20 md:h-20 
            bg-white border border-slate-200 p-[1px] flex items-center justify-center 
            snap-center shrink-0 cursor-pointer rounded-none overflow-hidden
            
            /* 2. INTERACTIVIDAD HOVER PRINCIPAL */
            transition-all duration-300 ease-in-out
            hover:border-transparent hover:shadow-md hover:scale-105 hover:rounded-lg
          "
              >
                {/* INTERIOR CAPA 1 (Z-0): LA LÍNEA QUE GIRA CONTINUAMENTE AL HACER HOVER */}
                <div className="absolute opacity-0 group-hover:opacity-100 w-[160%] h-[160%] transition-opacity duration-300 bg-[conic-gradient(from_0deg,#1e293b_40deg,transparent_100deg)] animate-spin [animation-duration:2.5s] z-0" />

                {/* INTERIOR CAPA 2 (Z-10): LA TAPA INTERNA BLANCA (Genera el grosor del borde de 2px) */}
                <div className="absolute inset-[2px] bg-white rounded-none transition-all duration-300 group-hover:rounded-[6px] z-10" />

                {/* INTERIOR CAPA 3 (Z-20): TU CONTENEDOR DEL LOGOTIPO SEGURO AL FRENTE */}
                <div className="relative z-20 w-full h-full flex items-center justify-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 p-2">
                  {brandUrlImage && (
                    <img
                      src={brandUrlImage}
                      alt={`Logotipo oficial de ${brand.brandName || "marca"}`}
                      className="absolute inset-0 w-full h-full object-contain p-2"
                    />
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
