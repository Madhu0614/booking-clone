'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from 'react';
import CarouselComponent from './Popular';

const categories = [
  { label: 'Domestic cities', key: 'Domestic cities' },
  { label: 'International cities', key: 'International cities' },
  { label: 'Regions', key: 'Regions' },
  { label: 'Countries', key: 'Countries' },
  { label: 'Places To Stay', key: 'Places To Stay' },
];

export default function Travelers() {
  const [selected, setSelected] = useState('Domestic cities');

  return (
    <div className="w-full max-w-[1200px] mx-auto pt-10 ">
        <h1 className="text-3xl font-bold mb-4 justify-start ml-[10px]">Popular with travelers from India</h1>
      <Tabs value={selected} onValueChange={setSelected} className="w-full">

        {/* Tab buttons */}
        <TabsList className="flex flex-wrap gap-2 mb-4 bg-white p-2 mt-2 justify-start">
          {categories.map(({ key, label }) => (
            <TabsTrigger
              key={key}
              value={key}
              className="text-gray-600 flex items-center gap-2 px-4 py-2 capitalize transition-colors
                        data-[state=active]:border-blue-400 rounded-[10px]
                        data-[state=active]:border-[1.5px]
                        data-[state=active]:text-blue-600 
                        hover:bg-gray-300"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Fixed height tab content container */}
        <div className="relative h-[150px] overflow-y-auto ">
          {categories.map(({ key }) => (
            <TabsContent key={key} value={key} className="absolute inset-0 px-4 py-6">
              <CarouselComponent category={key} />
            </TabsContent>
          ))}
        </div>

      </Tabs>
    </div>
  );
}
