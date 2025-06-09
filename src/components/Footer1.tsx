'use client';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function Footer1() {
  return (
    <footer className="bg-white text-black py-[50px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          
          {/* 👇 Visible only on desktop */}
          <div className="hidden md:flex flex-col space-y-2">
            <h1 className="font-semibold text-lg mb-2">Support</h1>
            <a href="#" className="text-sm hover:underline">Coronavirus (COVID-19) FAQs</a>
            <a href="#" className="text-sm hover:underline">Manage your trips</a>
            <a href="#" className="text-sm hover:underline">Contact Customer Service</a>
            <a href="#" className="text-sm hover:underline">Safety Resource Center</a>
          </div>

          <div className="hidden md:flex flex-col space-y-2">
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

          <div className="hidden md:flex flex-col space-y-2">
            <h1 className="font-semibold text-lg mb-2">Privacy & cookies</h1>
            <a href="#" className="text-sm hover:underline">Terms & conditions</a>
            <a href="#" className="text-sm hover:underline">Grievance officer</a>
            <a href="#" className="text-sm hover:underline">Modern Slavery Statement</a>
            <a href="#" className="text-sm hover:underline">Human Rights Statement</a>
          </div>

          <div className="hidden md:flex flex-col space-y-2">
            <h1 className="font-semibold text-lg mb-2">Extranet login</h1>
            <a href="#" className="text-sm hover:underline">Partner help</a>
            <a href="#" className="text-sm hover:underline">List your property</a>
            <a href="#" className="text-sm hover:underline">Modern Slavery Statement</a>
            <a href="#" className="text-sm hover:underline">Become an affiliate</a>
          </div>

          <div className="hidden md:flex flex-col space-y-2">
            <h1 className="font-semibold text-lg mb-2">About</h1>
            <a href="#" className="text-sm hover:underline">About Booking.com</a>
            <a href="#" className="text-sm hover:underline">How We Work</a>
            <a href="#" className="text-sm hover:underline">Sustainability</a>
            <a href="#" className="text-sm hover:underline">Press center</a>
            <a href="#" className="text-sm hover:underline">Careers</a>
            <a href="#" className="text-sm hover:underline">Investor relations</a>
            <a href="#" className="text-sm hover:underline">Corporate contact</a>
          </div>

          {/* 👇 Visible only on mobile */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full space-y-2">

              <AccordionItem value="support">
                <AccordionTrigger className="font-semibold text-lg">Support</AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-1 pl-4">
                  <a href="#" className="text-sm hover:underline">Coronavirus (COVID-19) FAQs</a>
                  <a href="#" className="text-sm hover:underline">Manage your trips</a>
                  <a href="#" className="text-sm hover:underline">Contact Customer Service</a>
                  <a href="#" className="text-sm hover:underline">Safety Resource Center</a>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="discover">
                <AccordionTrigger className="font-semibold text-lg">Discover</AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-1 pl-4">
                  <a href="#" className="text-sm hover:underline">Genius loyalty program</a>
                  <a href="#" className="text-sm hover:underline">Seasonal and holiday deals</a>
                  <a href="#" className="text-sm hover:underline">Travel articles</a>
                  <a href="#" className="text-sm hover:underline">Booking.com for Business</a>
                  <a href="#" className="text-sm hover:underline">Traveller Review Awards</a>
                  <a href="#" className="text-sm hover:underline">Car rental</a>
                  <a href="#" className="text-sm hover:underline">Flight finder</a>
                  <a href="#" className="text-sm hover:underline">Restaurant reservations</a>
                  <a href="#" className="text-sm hover:underline">Booking.com for Travel Agents</a>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy">
                <AccordionTrigger className="font-semibold text-lg">Privacy & cookies</AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-1 pl-4">
                  <a href="#" className="text-sm hover:underline">Terms & conditions</a>
                  <a href="#" className="text-sm hover:underline">Grievance officer</a>
                  <a href="#" className="text-sm hover:underline">Modern Slavery Statement</a>
                  <a href="#" className="text-sm hover:underline">Human Rights Statement</a>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="extranet">
                <AccordionTrigger className="font-semibold text-lg">Extranet login</AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-1 pl-4">
                  <a href="#" className="text-sm hover:underline">Partner help</a>
                  <a href="#" className="text-sm hover:underline">List your property</a>
                  <a href="#" className="text-sm hover:underline">Modern Slavery Statement</a>
                  <a href="#" className="text-sm hover:underline">Become an affiliate</a>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="about">
                <AccordionTrigger className="text-lg font-semibold">About</AccordionTrigger>
                    <AccordionContent className="flex flex-col space-y-2 pl-4 pt-2">
                      <a href="#" className="text-sm hover:underline">About Booking.com</a>
                      <a href="#" className="text-sm hover:underline">How We Work</a>
                      <a href="#" className="text-sm hover:underline">Sustainability</a>
                      <a href="#" className="text-sm hover:underline">Press center</a>
                      <a href="#" className="text-sm hover:underline">Careers</a>
                      <a href="#" className="text-sm hover:underline">Investor relations</a>
                      <a href="#" className="text-sm hover:underline">Corporate contact</a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          </div>

          <div className="border-t mt-12 pt-6 text-center text-sm text-gray-600 bg-white">
  <p className="mb-2">
    Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
  </p>
  <p className="mb-4">
    Copyright © 1996–2025 Booking.com™. All rights reserved.
  </p>
  <div className="hidden sm:flex justify-center items-center space-x-6">
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
