"use client";

import Image from "next/image";
import { useState } from "react";

const Slider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging) return;

    const clientX =
      event.type.includes("touch") ? event.touches[0].clientX : event.clientX;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleDown = () => setIsDragging(true);
  const handleUp = () => setIsDragging(false);

  return (
    <div
      className="w-full relative"
      onMouseUp={handleUp}
      onTouchEnd={handleUp}
    >
      <div
        className="relative w-full max-w-[700px] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove} // Handle touch drag
        onMouseDown={handleDown}
        onTouchStart={handleDown} // Handle touch start
      >
        {/* Before Image */}
        <Image
          alt="Before"
          layout="intrinsic"
          width={700}
          height={393}
          draggable={false}
          priority
          src={beforeImage}
        />

        {/* After Image */}
        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[700px] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            layout="intrinsic"
            width={700}
            height={393}
            priority
            draggable={false}
            alt="After"
            src={afterImage}
          />
        </div>

        {/* Resizer Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
