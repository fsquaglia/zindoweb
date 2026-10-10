"use client";

import { useState } from "react";
import Circle from "./Circle";

export default function HistoryViewer({ data }) {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);

  const clicked = (idx) => {
    setSelectedIdx(idx);
    setSelectedDescription(data[idx].description);
  };

  const colorFor = (idx) =>
    selectedIdx === idx ? data[idx].colorCircle : "#4b5563";

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-gray-700 py-20">
      {/* columna de botones circulares*/}
      <div
        className={`flex flex-row md:flex-col gap-4 justify-center items-center transition-all duration-700 ${
          selectedDescription ? "md:mr-8" : ""
        }`}
      >
        <Circle
          color={colorFor(0)}
          text={data?.[0]?.title ?? "HISTORIA"}
          numberForIcon={0}
          onClick={() => clicked(0)}
        />
        <div className="flex flex-row gap-4 md:gap-12">
          <Circle
            color={colorFor(1)}
            text={data?.[1]?.title ?? "MISION"}
            numberForIcon={1}
            onClick={() => clicked(1)}
          />
          <Circle
            color={colorFor(2)}
            text={data?.[2]?.title ?? "VISION"}
            numberForIcon={2}
            onClick={() => clicked(2)}
          />
        </div>
        <Circle
          color={colorFor(3)}
          text={data?.[3]?.title ?? "VALORES"}
          numberForIcon={3}
          onClick={() => clicked(3)}
        />
      </div>

      {/* panel de texto – aparece solo después del primer clic */}
      {selectedDescription && (
        <div
          key={selectedDescription}
          className="sm:h-40 container px-auto max-w-sm overflow-hidden flex items-center justify-center"
        >
          <p
            key={selectedDescription}
            className="text-center animate-fadeIn opacity-0"
          >
            {selectedDescription}
          </p>
        </div>
      )}
    </div>
  );
}
