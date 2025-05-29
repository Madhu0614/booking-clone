'use client';

import React from 'react';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
  { src: "new-delhi.jpg",
    name: "New Delhi",
    properties:"2.901 properties",
  },
  { src: "bangalore.jpg",
    name: "Bangalore",
    properties:"1.234 properties",  
  },
  { src: "mumbai.jpg",
    name: "Mumbai",
    properties:"3.456 properties",                      
  },
  { src: "chennai.jpg",
    name: "Chennai",
    properties:"2.789 properties",
  },
  { src: "varanasi.jpg",
    name: "Varanasi",
    properties:"1.234 properties",
  },
  { src: "hyderabad.jpg",
    name: "Hyderabad",
    properties:"2.345 properties",
  },
  { src: "jaipur.jpg",
    name: "Jaipur",
    properties:"1.234 properties",
  },
  { src: "gurgaon.jpg",
    name: "Gurgaon",
    properties:"1.234 properties",
  },
  { src: "calangute.jpg",
    name: "Calangute",
    properties:"2.345 properties",
  },
  { src: "pondicherry.jpg",
    name: "Pondicherry",
    properties:"1.234 properties",
  },

];
const additionalCarouselItems = [
  { src: "hotels.jpeg",
    name: "Hotels",
  },
  { src: "apartments.jpeg",
    name: "Apartments",
  },
  { src: "resorts.jpeg",
    name: "Resorts",
  },
  { src: "villas.jpeg",
    name: "Villas",

  },
  { src: "cabins.jpeg",
    name: "Cabins",
  },
  { src: "cottages.jpeg",
    name: "Cottages",

  },
  { src: "glamping.jpeg",
    name: "Glamping",
  },
    { src: "serviced-apartments.jpeg",
        name: "Serviced Apartments",
    },
    { src: "vacation-homes.jpeg",
        name: "Vacation Homes",
    },
];

export default function CarouselComponent() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">Browse by property type</h1>
      <Carousel className="w-full h-full" orientation="horizontal">
        <CarouselContent>
          {additionalCarouselItems.map((item, index) => (
            <CarouselItem key={index} className="basis-1/4 px-2 flex flex-col">
              <div className="w-full bg-white">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-[180px] object-cover rounded-xl"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold truncate mb-1">{item.name}</h2> 
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <h1 className="text-3xl font-bold mb-4">Explore India</h1>
      <p className="text-gray-600 mb-4">
        These popular destinations have a lot to offer
      </p>

      <Carousel className="w-full h-full" orientation="horizontal">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/6 px-2 flex flex-col"
            >
              <div className="w-full     bg-white">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-[150px] object-cover rounded-xl"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold truncate  mb-1">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600 truncate  mb-1">
                    {item.properties} </p>

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