import React from "react";

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
        <div className="max-w-[1100px] px-0 py-2 justify-center mx-[200px]">
            <h2 className="text-3xl font-bold mb-1">Trending destinations</h2>
            <p className="text-gray-600 mb-6">Travellers searching for India also booked these</p>

            {/* Top row with 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {destinations.slice(1, 3).map((dest, idx) => (
                    <div key={idx} className="relative h-[270px] rounded-xl overflow-hidden shadow-md">
                        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent z-10" />
                        <img
                            src={dest.src}
                            alt={dest.name}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute top-3 left-3 text-white px-3 py-1 rounded-lg text-2xl font-semibold z-20">
                            {dest.name}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom row with 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {destinations.slice(3).map((dest, idx) => (
                    <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-md">
                        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent z-10" />
                        <img
                            src={dest.src}
                            alt={dest.name}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute top-3 left-3 text-white px-3 py-1 rounded-lg text-2xl font-semibold z-20">
                            {dest.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
