// src/components/sections/FinanceFeatures01.jsx
import React from "react";
import {
  FaPercent,
  FaCalendarDays,
  FaCarSide,
  FaComments,
} from "react-icons/fa6";

export default async function ComponentFinanceFeatures01({ data = [] }) {
  if (!data || data.length === 0) return null;

  // Fallbacks por si el documento de Firestore no tiene cargados los textos aún
  const title = data[0].titleSection || "Planes de Financiación a tu Medida**";
  const subtitle =
    data[0].subTitleSection ||
    "Elegí la opción que mejor se adapte a tu bolsillo y llevate tu próximo vehículo sin vueltas.**";
  const titleFooter =
    data[0].titleFooter || "¿Querés que analicemos tu perfil crediticio?";
  const textFooter =
    data[0].textFooter ||
    "Comunicate con nuestros asesores comerciales para armar un plan de cuotas personalizado según tus ingresos actuales.";
  const textCTA = data[0].textCTA || "Asesorarme Ahora";
  const newCards = data.slice(1);
  const financialIcons = [FaPercent, FaCalendarDays, FaCarSide];

  return (
    <section className="w-full bg-slate-50 py-16 px-4 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </div>

        {/* GRILLA DE PLANES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {newCards.map((option, index) => {
            const Icon = financialIcons[index];
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 p-6 rounded-none transition-all duration-300 hover:shadow-md hover:border-slate-300 flex flex-col justify-between"
              >
                <div>
                  {/* ICONO CON BASE CIRCULAR */}
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                    {Icon && (
                      <Icon
                        className="w-6 h-6 text-red-600"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {option.cardTitle}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {option.cardText}
                  </p>
                </div>

                {/* MINI NOTA DE CONVENIENCIA */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                    {option.cardMsg}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* BANNER DE ACCIÓN CENTRALIZADO */}
        <div className="w-full bg-slate-900 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-xl font-bold">{titleFooter}</h4>
            <p className="text-slate-400 text-sm mt-1">{textFooter}</p>
          </div>
          <a
            href="#contacto" // O mapearlo directo para que abra el chat o modal
            className="flex items-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 transition hover:bg-red-700 whitespace-nowrap shrink-0 group"
          >
            <FaComments className="w-5 h-5 transition-transform group-hover:scale-110" />
            {textCTA}
          </a>
        </div>
      </div>
    </section>
  );
}
