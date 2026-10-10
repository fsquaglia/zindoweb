import React from "react";
import { MdHistoryEdu } from "react-icons/md";
import { FaBullseye } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

const CircularButton = ({
  color = "#4b5563",
  text = "VISION",
  onClick,
  numberForIcon = 0,
}) => {
  // Seleccionar el ícono según el número proporcionado
  const renderIcon = () => {
    switch (numberForIcon) {
      case 0:
        return <MdHistoryEdu className="text-2xl font-extralight" />;
      case 1:
        return <FaBullseye className="text-2xl font-extralight" />;
      case 2:
        return <FaEye className="text-2xl font-extralight" />;
      case 3:
        return <IoDiamondOutline className="text-2xl font-extralight" />;
      default:
        return <MdHistoryEdu className="text-2xl font-extralight" />;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative size-16 sm:size-24 md:size-32 rounded-full overflow-hidden
        flex items-center justify-center
        text-white font-light sm:font-semibold
        text-xs sm:text-base
        shadow-lg transform transition-all duration-300
        hover:scale-105 active:scale-95
      `}
      style={{
        background: `linear-gradient(to bottom, ${color}cc 0%, ${color} 70%, ${color}bb 100%)`,
        boxShadow: `0 8px 16px rgba(0,0,0,0.4), inset 0 4px 6px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.3)`,
      }}
    >
      {/* Efecto de brillo suave */}
      <span
        className="
          absolute inset-0
          bg-white opacity-0
          transition-opacity duration-500
          hover:opacity-20
        "
      ></span>

      {/* Texto o ícono visible */}
      <span className="hidden sm:block relative z-10 select-none">{text}</span>
      <span className="block sm:hidden relative z-10 select-none">
        {renderIcon()}
      </span>
    </button>
  );
};

export default CircularButton;
