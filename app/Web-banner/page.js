import React, { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
    const [mainImage, setMainImage] = useState("/web-banner/1.jpg");

    const thumbnails = [
        '/web-banner/1.jpg',
      "/web-banner/2.jpg",
      "/web-banner/3.jpg",

    ];

    const handleThumbnailClick = (src) => {
        setMainImage(src);
    };

    return (
      <>
        <h1 className="text-center text-5xl my-12 font-bold">Web Banner Design</h1>
        <p className="text-center text-lg mb-8">Click on the thumbnails to change the main image</p>
        <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-3xl">
                <Image  width={500} height={500} id="main-image" src={mainImage} className="w-full rounded-lg" alt="Main Image" />
            </div>

            <div className="grid grid-cols-4 max-w-3xl gap-4" id="thumbnail-container">
                {thumbnails.map((thumb, index) => (
                    <Image 
                        width={500} 
                        height={500} 
                        key={index} 
                        src={thumb} 
                        className="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80" 
                        alt={`Thumb ${index + 1}`}
                        onClick={() => handleThumbnailClick(thumb)}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default Gallery;
