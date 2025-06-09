'use client';

import React from 'react';
import Image from 'next/image';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
  { src: "/7Seasons_Apartments_Budapest.webp", 
    name: "7 Seasons Apartments Budapest",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 8.9,
    reviews: 1355,
    price: 31419, 

  },
  { src: "/Aparthotel_Stare_Miasto.webp", 
    name: "Aparthotel Stare Miasto",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 8.9,
    reviews: 1355,
    price: 31419, 
  },
  { src: "/Cheval-Three-Quays-at-The-Tower-of-London.webp", 
    name: "Cheval Three Quays at The Tower of London",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 8.9,
    reviews: 1355,
    price: 31419, 
  },
  { src: "/Downtown-Synagogue.webp", 
    name: "Downtown Synagogue",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 8.9,
    reviews: 1355,
    price: 31419, 
  },
  { src: "/Flora-Chiado-Apartments.webp", 
    name: "Flora Chiado Apartments",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 8.9,
    reviews: 1355,
    price: 31419, 
  },
  { src: "/Leman-Locke.webp", 
    name: "Leman Locke",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 8.9,
    reviews: 1355,
    price: 31419, 
  },
  { src: "/Numa-Florence-Vita.webp", 
    name: "Numa Florence Vita",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 8.9,
    reviews: 1355,
    price: 31419, 
  },
  { src: "/Sugar-Loft-Apartments.webp", 
    name: "Sugar Loft Apartments",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 8.9,
    reviews: 1355,
    price: 31419, 
  },
  { src: "/The-Apartments-by-The-Sloane-Club.webp", 
    name: "The Apartments by The Sloane Club",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 8.9,
    reviews: 1355,
    price: 31419, 
  },  
];

export default function CarouselComponent() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Homes guests love</h1>

      <Carousel className="w-full h-full" orientation="horizontal">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-[75%] px-2 flex flex-col"
            >
              <div className="w-full h-[380px] border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <Image
                  src={item.src}
                  alt={item.name}
                  className="w-full h-[180px] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold truncate mb-1">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600 truncate mb-1">
                    {item.location}
                  </p>
                  <div className="flex items-center gap-2 text-sm mb-1 pt-8">
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-bold">
                      {item.rating}
                    </span>
                    <span className="text-gray-700">Excellent</span>
                    <span className="text-gray-500">({item.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 justify-end pl-[100px] pt-[20px]">
                    Starting from <span className="text-sm font-medium text-gray-700">₹ {item.price.toLocaleString()}</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}