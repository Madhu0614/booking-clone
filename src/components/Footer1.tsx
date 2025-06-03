'use client';
import React from 'react';

export default function Footer1() {
  return (
    <footer className="bg-white text-black py-[50px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          
          {/* Support Section */}
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-lg mb-2">Support</h1>
            <a href="#" className="text-sm hover:underline">Coronavirus (COVID-19) FAQs</a>
            <a href="#" className="text-sm hover:underline">Manage your trips</a>
            <a href="#" className="text-sm hover:underline">Contact Customer Service</a>
            <a href="#" className="text-sm hover:underline">Safety Resource Center</a>
          </div>

          {/* Optional: Repeatable Sections */}
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-lg mb-2">Discover</h1>
            <a href="#" className="text-sm hover:underline">Genius loyalty program</a>
            <a href="#" className="text-sm hover:underline">Seasonal and holiday deals</a>
            <a href="#" className="text-sm hover:underline">Travel articles</a>
            <a href="#" className="text-sm hover:underline">Booking.com for Business</a>
            <a href="#" className="text-sm hover:underline">Traveller Review Awards</a>
            <a href="#" className="text-sm hover:underline">Car rental</a>
            <a href="#" className="text-sm hover:underline">Flight finder</a>
            <a href="#" className="text-sm hover:underline">Restaurant reservations</a>
            <a href="#" className="text-sm hover:underline">Booking.com for Travel Agents</a>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-lg mb-2">Privacy & cookies</h1>
            <a href="#" className="text-sm hover:underline">Terms & conditions</a>
            <a href="#" className="text-sm hover:underline">Grievance officer</a>
            <a href="#" className="text-sm hover:underline">Modern Slavery Statement</a>
            <a href="#" className="text-sm hover:underline">Human Rights Statement</a>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-lg mb-2">Extranet login</h1>
            <a href="#" className="text-sm hover:underline">Partner help</a>
            <a href="#" className="text-sm hover:underline">List your property</a>
            <a href="#" className="text-sm hover:underline">Modern Slavery Statement</a>
            <a href="#" className="text-sm hover:underline">Become an affiliate</a>
          </div>

         <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-lg mb-2">About</h1>
            <a href="#" className="text-sm hover:underline">About Booking.com</a>
            <a href="#" className="text-sm hover:underline">How We Work</a>
            <a href="#" className="text-sm hover:underline">Sustainability</a>
            <a href="#" className="text-sm hover:underline">Press center</a>
            <a href="#" className="text-sm hover:underline">Careers</a>
            <a href="#" className="text-sm hover:underline">Investor relations</a>    
            <a href="#" className="text-sm hover:underline">Corporate contact</a>   
          </div>


        </div>
        
          <div className="border-t mt-12 pt-6 text-center text-sm text-gray-600 bg-white">
  <p className="mb-2">
    Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
  </p>
  <p className="mb-4">
    Copyright © 1996–2025 Booking.com™. All rights reserved.
  </p>
  <div className="flex justify-center items-center space-x-6">
    <img src="/booking.png" alt="Booking.com" className="h-[60px]" />
    <img src="/priceline.png" alt="Priceline" className="h-[40px]" />
    <img src="/kayak.png" alt="KAYAK" className="h-[60px]" />
    <img src="/agoda.png" alt="Agoda" className="h-[40px]" />
    <img src="/opentable.jpg" alt="OpenTable" className="h-[70px]" />
  </div>
</div>

      </div>
    </footer>
  );
}
