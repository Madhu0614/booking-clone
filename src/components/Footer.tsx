"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function Footer() {
  const words = ["vacation homes", "cottages", "cabins", "villas"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1150px] mx-auto mt-10 relative overflow-hidden border rounded-lg bg-white">
      {/* Golden Circle (left decoration) */}
     <div className="absolute left-[-35px] top-1/2 transform -translate-y-1/2 bg-[#ffb700] h-[80px] w-[80px] rounded-full z-0 md:z-10"></div>

      {/* Blue Right Circle Background */}
      <div className="w-full flex justify-end">
        <div className="relative bg-blue-600 w-[600px] h-[200px] rounded-[100px] flex flex-col justify-center items-center text-white text-center px-6 -mr-[200px] my-10 ">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="flex items-center justify-center gap-2">
              Find
              <span className="underline decoration-yellow-400">
                {words[currentWordIndex]}
              </span>
            </span>
            <span>for your next trip</span>
          </h1>

          <button className="mt-6 bg-white text-blue-600 font-medium px-6 py-2 rounded shadow hover:bg-gray-100 transition">
            Discover homes
          </button>
        </div>
      </div>

      {/* Right Image (Desktop only) */}
      <div className="hidden md:flex absolute right-0 bottom-0">
        <Image src="footer.png" alt="illustration" className="w-[500px] h-auto" />
      </div>
    </div>
  );
}