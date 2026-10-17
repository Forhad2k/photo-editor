"use client";

import Image from "next/image";
import { useState } from "react";

export default function BeforeAfter({ beforeImage, afterImage, title }) {
  const [position, setPosition] = useState(50);

  const moveSlider = (event) => {
    if (event.buttons !== 1 && event.type === "pointermove") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextPosition = ((event.clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  return (
    <div
      className="relative aspect-square w-full touch-none select-none overflow-hidden bg-[#e8e8e1]"
      role="slider"
      aria-label={`${title} before and after comparison`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") setPosition((value) => Math.max(0, value - 5));
        if (event.key === "ArrowRight") setPosition((value) => Math.min(100, value + 5));
      }}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        moveSlider(event);
      }}
      onPointerMove={moveSlider}
    >
      <Image
        src={beforeImage}
        alt={`${title}, before editing`}
        fill
        sizes="(max-width: 768px) 90vw, 30vw"
        className="pointer-events-none object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt={`${title}, after editing`}
          fill
          sizes="(max-width: 768px) 90vw, 30vw"
          className="object-cover"
        />
      </div>
      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[9px] font-semibold tracking-wider text-white">
        BEFORE
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-[9px] font-semibold tracking-wider text-white">
        AFTER
      </span>
      <span
        className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)]"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white bg-white/90 text-xs text-[#20211e]">
          ↔
        </span>
      </span>
    </div>
  );
}
