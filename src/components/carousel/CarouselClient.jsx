"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const placeholderColors = [
  "bg-neutral-200",
  "bg-neutral-300",
  "bg-neutral-400",
];

export default function CarouselClient({ logos, textData } = {}) {
  const textContent = Array.isArray(textData) ? textData[0] : textData;
  const title = textContent?.title || "";
  const description = textContent?.description || "";
  const validLogos = Array.isArray(logos)
    ? logos.filter((logo) => logo?.urlImage)
    : [];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
      <div>
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center mb-8 px-4">{description}</p>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="max-w-xs sm:container rounded-2xl h-[250px] sm:h-[400px]"
      >
        {validLogos.length > 0
          ? validLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={logo.urlImage}
                  alt={logo.alt || ""}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 80rem"
                  className="object-cover"
                />
              </SwiperSlide>
            ))
          : placeholderColors.map((color, index) => (
              <SwiperSlide key={`placeholder-${index}`}>
                <div aria-hidden="true" className={`h-full w-full ${color}`} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
