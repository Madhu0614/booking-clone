"use client";
import { useEffect, useState } from "react";

export default function Footer() {
    const words = ["cottages", "cabins", "villas"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white max-w-[1150px] mx-auto mt-10 rounded-lg overflow-hidden border pt-0 ml-[180px]">
            <div className="flex items-center justify-between px-10 py-10 relative">
                {/* Left Yellow Circle */}
                <div className="absolute left-[-20px] top-[230px] transform -translate-y-1/2 bg-[#ffb700] h-[70px] w-[70px] rounded-full"></div>

                {/* Blue Circular Background */}
                <div className="flex-1 flex justify-center items-center absolute top-[-80px] ml-[100px]">
                    <div className="bg-blue-600 rounded-full w-[550px] h-[480px] flex flex-col justify-center items-center text-white text-center px-6">
                        <h1 className="text-4xl ml-[80px]  flex items-center font-bold space-x-2">
                            <span>Find</span>

                            {/* Word scroll container */}
                            <div className="relative h-[48px] w-[180px] overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateY(-${currentWordIndex * 48}px)` }}
                                >
                                    {words.map((word, index) => (
                                        <div key={index} className="h-[48px] flex items-center">
                                            <span className="underline decoration-yellow-400 inline-block w-[110px] text-left">
                                                {word}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </h1>

                        <p className="text-2xl mt-2">for your next trip</p>
                        <button className="mt-6 bg-white text-blue-600 font-medium px-6 py-2 rounded shadow hover:bg-gray-100 transition">
                            Discover homes
                        </button>
                    </div>
                </div>

                {/* Right Illustration */}
                <div className="flex-1 flex justify-center ml-[800px] max-w-max">
                    <img src="footer.png" alt="illustration" className="w-[800px] h-full" />
                </div>
            </div>
        </div>
    );
}
