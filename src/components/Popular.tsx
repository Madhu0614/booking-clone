import React, { useState } from 'react';

const domesticCities = [
  'Srinagar Hotel', 'Jaipur Hotel', 'Rishikesh Hotel', 'Munnar Hotel', 'Gurgaon Hotel',
  'Bangalore Hotel', 'Hyderabad Hotel', 'Varkala Hotel', 'Mysore Hotel', 'Manāli Hotel',
  'Mumbai Hotel', 'Puri Hotel', 'Varanasi Hotel', 'New Delhi Hotel', 'Shimla Hotel',
  'Ooty Hotel', 'Pondicherry Hotel', 'Ayodhya Hotel', 'Cochin Hotel', 'Mussoorie Hotel',
  'Lonavala Hotel', 'Chennai Hotel', 'Pune Hotel', 'Udaipur Hotel', 'Kolkata Hotel'
];

const internationalCities = [
  'Paris Hotel', 'London Hotel', 'New York Hotel', 'Tokyo Hotel', 'Dubai Hotel',
  'Singapore Hotel', 'Bangkok Hotel', 'Istanbul Hotel', 'Barcelona Hotel', 'Rome Hotel',
  'Amsterdam Hotel', 'Berlin Hotel', 'Madrid Hotel', 'Lisbon Hotel', 'Prague Hotel'
];

const regions = [
  'Andaman Islands', 'Himalayan Region', 'Western Ghats', 'Thar Desert', 'Sundarbans',
  'Nilgiri Hills', 'Deccan Plateau', 'Eastern Ghats', 'Vindhya Range', 'Kutch Region'
];

const countries = [
  'India', 'United States', 'United Kingdom', 'France', 'Germany','China',
  'Japan', 'Australia', 'Canada', 'Brazil', 'Italy', 'Spain', 'Russia', 'South Africa',
];

const placesToStay = [
  'Hotels', 'Apartments', 'Villas', 'Hostels', 'Bed & Breakfasts', 'Serviced Apartments',
  'Guest Houses', 'Resorts', 'Boutique Hotels', 'Motels', 'Homestays', 'Cottages', 'Cabins', 'Lodges'
];

const MAX_VISIBLE = 15;

export default function CarouselComponent({ category }: { category: string }) {
  const [showMore, setShowMore] = useState(false);

  let items: string[] = [];

  switch (category) {
    case 'Domestic cities':
      items = domesticCities;
      break;
    case 'International cities':
      items = internationalCities;
      break;
    case 'Regions':
      items = regions;
      break;
    case 'Countries':
      items = countries;
      break;
    case 'Places To Stay':
      items = placesToStay;
      break;
    default:
      return null;
  }

  const visibleItems = showMore ? items : items.slice(0, MAX_VISIBLE);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 text-sm text-gray-800 px-2">
      {visibleItems.map((item) => (
        <a key={item} href="#" className="hover:underline">
          {item}
        </a>
      ))}
      {!showMore && items.length > MAX_VISIBLE && (
        <button
          onClick={() => setShowMore(true)}
          className="text-blue-600 hover:underline font-medium col-span-full text-left"
        >
          + Show more
        </button>
      )}
    </div>
  );
}
