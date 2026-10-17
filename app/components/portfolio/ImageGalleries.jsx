"use client";

import Image from "next/image";
import { useState } from "react";

const productImages = ["/product/1.jpg", "/product/2.jpg", "/product/3.jpg"];
const posterImages = [1, 2, 3, 4, 5, 6].map((image) => `/poster/${image}.jpg`);
const bannerImages = [1, 2, 3].map((image) => `/web-banner/${image}.jpg`);

function ImageGallery({ images, label, className = "" }) {
  return (
    <div className={`grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 ${className}`}>
      {images.map((src, index) => (
        <div
          className="group relative aspect-[1.15] overflow-hidden bg-[#e8e8e1]"
          key={src}
        >
          <Image
            src={src}
            alt={`${label} example ${index + 1}`}
            fill
            sizes="(max-width: 768px) 45vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      ))}
    </div>
  );
}

export function ProductGallery() {
  return <ImageGallery images={productImages} label="Product design" />;
}

export function PosterGallery() {
  return <ImageGallery images={posterImages} label="Poster design" className="md:grid-cols-3" />;
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
