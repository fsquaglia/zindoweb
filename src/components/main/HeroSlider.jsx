"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider({ imagenes = [] }) {
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    // Si hay una sola imagen, no tiene sentido activar el temporizador
    if (imagenes.length <= 1) return;

    // Configuramos el temporizador estricto de 5 segundos (5000 ms)
    const intervalo = setInterval(() => {
      setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [imagenes]);

  return (
    <div className="relative w-full h-full">
      {imagenes.map((urlImage, index) => {
        const estaActiva = index === indiceActual;

        return (
          <div
            key={`${urlImage}-${index}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-2000 ease-in-out ${
              estaActiva ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* CAPA 1: Imagen de fondo que abarca TODA la pantalla con BLUR */}
            <div className="absolute inset-0 w-full h-full blur-md scale-105 brightness-50">
              <Image
                src={urlImage}
                alt="Fondo difuminado"
                fill
                priority={index === 0} // Prioridad de carga solo a la primera del array
                className="object-cover w-full h-full"
                loading="eager" // Carga inmediata para mejorar la experiencia visual
              />
            </div>

            {/* Capa de sombra intermedia para ganar contraste con las letras */}
            <div className="absolute inset-0 bg-black/20 z-15" />

            {/* CAPA 2: Recuadro central de menor tamaño con la imagen limpia (SIN BLUR) */}
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 z-10">
              <div className="relative w-full h-full max-w-5xl max-h-[75vh] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                <Image
                  src={urlImage}
                  alt="Vehículo destacado"
                  fill
                  sizes="(max-w-1200px) 100vw, 1200px"
                  className="object-cover w-full h-full"
                  loading="eager" // Carga inmediata para mejorar la experiencia visual
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
