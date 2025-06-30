"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Page() {
  const Images = [
    '/web-banner/1.jpg',
    '/web-banner/2.jpg',
    '/web-banner/3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide the images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000); // Change image every 3 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-5xl my-12 font-bold">Web Banner Design</h1>
      <div className="md:w-200 m-auto overflow-hidden relative">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <Image
                width={1000}
                height={500}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
