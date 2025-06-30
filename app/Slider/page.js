import React from 'react'
import Image from 'next/image'

function page() {
    const Images = [
        '/poster/1.jpg',
        '/poster/2.jpg',
        '/poster/3.jpg',
        '/poster/4.jpg',
        '/poster/5.jpg',
        '/poster/6.jpg',
    
      ];
  return (
    <div className=''>     
    <h1 className='text-center text-5xl my-12 font-bold'>Poster Design</h1>       
        <div className=" flex flex-wrap justify-center gap-4 p-4">
      {Images.map((image, index) => (
        <div
          key={index}
          className="w-150 flex flex-col transition-transform duration-500 hover:scale-120 items-center justify-center bg-gray-200"
        >
          <Image
          width={1000}
          height={1000}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default page