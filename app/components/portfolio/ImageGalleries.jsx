"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const productImages = [
  "/product/1.jpg",
  "/product/2.jpg",
  "/product/3.jpg",
  "/product/4.png",
  "/product/5.png",
  "/product/6.png",
  "/product/7.png",
];
const bannerImages = [1, 2, 3].map((image) => `/web-banner/${image}.jpg`);

function ImageGallery({ images, label, className = "" }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedIndex === null) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      <div className={`grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 ${className}`}>
        {images.map((src, index) => (
          <button
            type="button"
            className="group relative aspect-[4/5] overflow-hidden bg-[#e8e8e1] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#849548]"
            key={src}
            onClick={() => setSelectedIndex(index)}
            aria-label={`View full ${label} ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${label} example ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15 flex items-end p-3">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-semibold text-white bg-black/60 backdrop-blur-md px-2 py-1 rounded">
                Click to expand
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-[92vw] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[82vh] overflow-hidden rounded shadow-2xl">
              <Image
                src={images[selectedIndex]}
                alt={`${label} full view ${selectedIndex + 1}`}
                width={1200}
                height={1500}
                className="max-h-[80vh] w-auto object-contain"
                priority
              />
            </div>

            <div className="mt-3 flex items-center gap-6 text-white text-xs">
              <button
                type="button"
                onClick={() => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 transition cursor-pointer"
                aria-label="Previous image"
              >
                <FaChevronLeft className="text-[10px]" /> Prev
              </button>
              <span className="font-mono text-white/75 text-[11px]">
                {selectedIndex + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={() => setSelectedIndex((prev) => (prev + 1) % images.length)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 transition cursor-pointer"
                aria-label="Next image"
              >
                Next <FaChevronRight className="text-[10px]" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 grid h-9 w-9 place-items-center rounded-full bg-[#20211e] text-white hover:bg-[#849548] transition shadow-lg text-sm cursor-pointer"
              aria-label="Close preview"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function ProductGallery() {
  return <ImageGallery images={productImages} label="Product design" />;
}

export function BannerGallery() {
  const [activeImage, setActiveImage] = useState(bannerImages[0]);

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-3">
      <div className="relative aspect-[1.8] overflow-hidden bg-[#e8e8e1]">
        <Image
          src={activeImage}
          alt="Selected web banner design"
          fill
          sizes="(max-width: 768px) 90vw, 900px"
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {bannerImages.map((src, index) => (
          <button
            type="button"
            key={src}
            onClick={() => setActiveImage(src)}
            aria-label={`Preview web banner ${index + 1}`}
            aria-pressed={activeImage === src}
            className={`relative aspect-[2.2] overflow-hidden border transition ${
              activeImage === src
                ? "border-[#849548] opacity-100"
                : "border-transparent opacity-65 hover:opacity-100"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 28vw, 300px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
