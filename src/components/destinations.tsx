import React from "react";
import Image from 'next/image';

const destinations = [
    { src: "flag.png", name: "India" },
    { src: "new-delhi.jpg", name: "New Delhi" },
    { src: "bangalore.jpg", name: "Bangalore" },
    { src: "mumbai.jpg", name: "Mumbai" },
    { src: "chennai.jpg", name: "Chennai" },
    { src: "varanasi.jpg", name: "Varanasi" },
];
export default function TrendingDestinations() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-1">Trending destinations</h2>
      <p className="text-gray-600 mb-6">Travellers searching for India also booked these</p>

      {/* Top row: Always 2 cards */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {destinations.slice(1, 3).map((dest, idx) => (
          <div
            key={idx}
            className="relative h-[240px] rounded-xl overflow-hidden shadow-md"
          >
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent z-10" />
            <Image
              src={dest.src}
              alt={dest.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-3 left-3 text-white px-3 py-1 rounded-lg text-xl font-semibold z-20">
              {dest.name}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row: Always 3 cards */}
      <div className="grid grid-cols-3 gap-4">
        {destinations.slice(3).map((dest, idx) => (
          <div
            key={idx}
            className="relative h-[240px] rounded-xl overflow-hidden shadow-md"
          >
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent z-10" />
            <Image
              src={dest.src}
              alt={dest.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-3 left-3 text-white px-3 py-1 rounded-lg text-xl font-semibold z-20">
              {dest.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}