"use client"; // 🚨 Obligatorio: Este componente se ejecuta puramente en el cliente
import { useEffect } from "react";

export default function VideoSpeedController({ videoId, speed = 1 }) {
  useEffect(() => {
    // Buscamos el video en el DOM real cuando la página ya terminó de cargar
    const video = document.getElementById(videoId);
    if (video) {
      video.playbackRate = speed;
    }
  }, [videoId, speed]);

  // Este componente es invisible, no renderiza HTML en pantalla
  return null;
}
