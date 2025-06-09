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
    <div className="w-full max-w-[1200px] mx-auto pt-10 px-2 sm:px-4">
      <h1 className="text-3xl font-bold mb-4 ml-1 sm:ml-2">Popular with travelers from India</h1>

      <Tabs value={selected} onValueChange={setSelected} className="w-full">

        {/* Horizontally scrollable tab list */}
        <div className="overflow-x-auto scrollbar-hide">
          <TabsList className="flex w-max gap-2 bg-white p-2">
            {categories.map(({ key, label }) => (
              <TabsTrigger
                key={key}
                value={key}
                className="text-gray-600 whitespace-nowrap flex items-center gap-2 px-4 py-2 capitalize transition-colors
                           data-[state=active]:border-blue-400 rounded-[10px]
                           data-[state=active]:border-[1.5px]
                           data-[state=active]:text-blue-600 
                           hover:bg-gray-300"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Responsive tab content section */}
        <div className="mt-4">
          {categories.map(({ key }) => (
            <TabsContent key={key} value={key} className="w-full">
              <CarouselComponent category={key} />
            </TabsContent>
          ))}
        </div>

      </Tabs>
    </div>
  );
}