'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

interface Destination {
  src: string;
  name: string;
  properties?: string;
}

const City: Destination[] = [
  { src: "Puttaparthi.jpg", name: "Puttaparthi", properties: "365 km away" },
  { src: "Hassan.jpg", name: "Hassan", properties: "549 km away" },
  { src: "Mysore.jpg", name: "Mysore", properties: "549 km away" },
  { src: "Cochin.jpg", name: "Cochin", properties: "857 km away" },
  { src: "Allahābād.jpg", name: "Allahābād", properties: "963 km away" },
  { src: "Varanasi.jpg", name: "Varanasi", properties: "1,002 km away" },
  { src: "Agra.jpg", name: "Agra", properties: "1,090 km away" },
  { src: "Jaipur.jpg", name: "Jaipur", properties: "1,094 km away" },
  { src: "Neemrana.jpg", name: "Neemrana", properties: "1,199 km away" },
  { src: "Chandīgarh.jpg", name: "Chandīgarh", properties: "1,494 km away" },
];

const Beach: Destination[] = [
  { src: "Visakhapatnam.jpg", name: "Visakhapatnam", properties: "515 km away" },
  { src: "Utorda.jpg", name: "Utorda", properties: "537 km away" },
  { src: "Colva.jpg", name: "Colva", properties: "549 km away" },
  { src: "Calangute.jpg", name: "Calangute", properties: "541 km away" },
  { src: "Baga.jpg", name: "Baga", properties: "541 km away" },
  { src: "Kannur.jpg", name: "Kannur", properties: "691 km away" },
  { src: "Kovalam.jpg", name: "Kovalam", properties: "709 km away" },
  { src: "Digha.jpg", name: "Digha", properties: "194 km away" },
];

const Outdoors: Destination[] = [
  { src: "Rishīkesh.jpg", name: "Rishīkesh", properties: "156 km away" },
  { src: "Dehradun.jpg", name: "Dehradun", properties: "1,537 km away" },
  { src: "Kasauli.jpg", name: "Kasauli", properties: "1,100 km away" },
  { src: "Shimla.jpg", name: "Shimla", properties: "1,250 km away" },
  { src: "Gangtok.jpg", name: "Gangtok", properties: "1,550 km away" },
  { src: "Manāli.jpg", name: "Manāli", properties: "1,657 km away" },
  { src: "Shillong.jpg", name: "Shillong", properties: "1,709 km away" },
  { src: "McLeod Ganj.jpg", name: "McLeod Ganj", properties: "1,801 km away" },
  { src: "Leh.jpg", name: "Leh", properties: "2,251 km away" },
];

const Relax: Destination[] = [
  { src: "Devanahalli-Bangalore.jpg", name: "Devanahalli-Bangalore", properties: "469 km away" },
  { src: "Bambolim.jpg", name: "Bambolim", properties: "537 km away" },
  { src: "Kodaikānāl.jpg", name: "Kodaikānāl", properties: "801 km away" },
  { src: "Kumarakom.jpg", name: "Kumarakom", properties: "894 km away" },
  { src: "Munnar.jpg", name: "Munnar", properties: "825 km away" },
  { src: "Manāli.jpg", name: "Manāli", properties: "1,657 km away" },
  { src: "Kasauli.jpg", name: "Kasauli", properties: "1,510 km away" },
  { src: "Dharamshala.jpg", name: "Dharamshala", properties: "1,668 km away" },
  { src: "Dalhousie.jpg", name: "Dalhousie", properties: "1,800 km away" },
];

const Romance: Destination[] = [
  { src: "romantic1.jpg", name: "Ooty" },
  { src: "romantic2.jpg", name: "Shimla" },
  { src: "romantic3.jpg", name: "Manali" },
];

const Food: Destination[] = [
  { src: "food1.jpg", name: "Hyderabad Biryani" },
  { src: "food2.jpg", name: "Delhi Street Food" },
  { src: "food3.jpg", name: "Mumbai Vada Pav" },
];

const CATEGORY_MAP: Record<string, Destination[]> = {
  city: City,
  beach: Beach,
  outdoors: Outdoors,
  relax: Relax,
  romance: Romance,
  food: Food,
};

interface Props {
  category: string;
}

export default function CarouselComponent({ category }: Props) {
  const data = CATEGORY_MAP[category.toLowerCase()] || [];

  return (
    <div className="max-w-[1200px] mx-auto px-2 sm:px-4 py-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
        Quick and easy trip planner
      </h1>
      <p className="text-sm sm:text-base text-gray-600 mb-4">
        Pick a vibe and explore the top destinations in India
      </p>

      <Carousel className="w-full" orientation="horizontal">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-[45%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 px-2 flex flex-col"
            >
              <div className="w-full bg-white overflow-hidden transition duration-300 hover:scale-[1.02] hover:shadow-lg rounded-lg">
                <Image
                  src={item.src}
                  alt={item.name}
                  className="w-full h-[140px] sm:h-[150px] object-cover rounded-t-lg"
                />
                <div className="p-3 sm:p-4">
                  <h2 className="text-base sm:text-lg font-semibold truncate mb-1">
                    {item.name}
                  </h2>
                  {item.properties && (
                    <p className="text-sm text-gray-500">{item.properties}</p>
                  )}
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