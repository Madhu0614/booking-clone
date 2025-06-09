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
  { src: "HAMPI-DELMONT-RESORT.jpg", 
    name: "Hampi Delmonte RESORT",
    location: "Hampi, India",
    rating: 8.9,
    reviews: 1355,
    originalPrice: 31419, 
    discountedPrice: 2700,

  },
  { src: "Olive-Hotel-Benz-Circle,-Vijayawada-by-Embassy-Group.jpg", 
    name: "Olive Hotel Benz Circle, Vijayawada by Embassy Group",
    location: "Vijayawāda, India",
    rating: 8.5,
    reviews: 58,
    originalPrice: 3141,
    discountedPrice: 2700,
    },
  { src: "/Transit-by-Encalm-Nap-and-Shower.jpg", 
    name: "Transit by Encalm Nap and Shower",
    location: "Shamshabad, India",
    rating: 8.2,
    reviews: 191,
    originalPrice: 31419, 
    discountedPrice: 2700,
  },
  { src: "Hampi-Natures-Cottage.jpg", 
    name: "Hampi Natures Cottage",
    location: "New Hampi, India",
    rating: 6.4,
    reviews: 8,
    originalPrice: 2700,
    discountedPrice: 2700,
  },
  { src: "Olive-Hotel-Benz-Circle,-Vijayawada-by-Embassy-Group.jpg", 
    name: "Olive Hotel Benz Circle, Vijayawada by Embassy Group",
    location: "Vijayawāda, India",
    rating: 8.5,
    reviews: 51,
    originalPrice: 7361,
    discountedPrice: 7361,
  },
  { src: "FabHotel-Galaxy-Park-Nr-Hyderabad-International.jpg", 
    name: "FabHotel Galaxy Park Nr Hyderabad International",
    location: "Hyderabad, India",
    rating: 8.9,
    reviews: 1355,
    originalPrice: 31419, 
    discountedPrice: 2700,
  },
  { src: "/Numa-Florence-Vita.webp", 
    name: "Numa Florence Vita",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 8.2,
    reviews: 27,
    originalPrice: 5400, 
    discountedPrice: 5400,
  },
  { src: "Happy-Hampi-Home.jpg", 
    name: "Happy Hampi Home",
    location: "Hospet, India",
    rating: 9.4,
    reviews: 5,
    originalPrice: 4335, 
    discountedPrice: 4335,
  },
  { src: "Super-Collection-O-Grand-Governorpet.jpg", 
    name: "Super Collection O Grand Governorpet",  
    location: "Vijayawāda, India",   
    rating: 7.2,
    reviews: 121,
    originalPrice: 5218, 
    discountedPrice: 5218,
  },  
];

export default function CarouselComponent() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Deals for the weekend</h1>
      <p className="text-gray-600 mb-4">Save on stays for June 6 - June 8</p>

      <div className="relative">
        <Carousel className="w-full h-full" orientation="horizontal">
          {/* Make content swipeable on mobile */}
          <div className="overflow-x-auto scroll-smooth snap-x sm:overflow-visible">
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[75%] sm:basis-1/2 md:basis-1/4 px-2 flex-shrink-0 snap-start"
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
                        <span className="text-gray-500">
                          ({item.reviews.toLocaleString()} reviews)
                        </span>
                      </div>
                      <div>
                        <span className="bg-green-700 text-white px-1 py-0.8 rounded font-semibold text-sm">
                          Getaway Deal
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pt-[20px] ml-[70px]">
                        <p className="text-sm text-gray-500">2 nights</p>
                        <p className="text-sm text-red-500 line-through">
                          ₹ {item.originalPrice.toLocaleString()}
                        </p>
                        <p className="text-base font-semibold text-gray-800">
                          ₹ {item.discountedPrice.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <div className="hidden md:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}