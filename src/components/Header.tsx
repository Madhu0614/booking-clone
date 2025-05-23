"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import NavButton from "@/components/NavButton";
import Hero from "./HeroText";

const suggestedCurrencies = [
  { name: "Euro", code: "EUR" },
  { name: "United States Dollar", code: "USD" },
  { name: "Pound Sterling", code: "GBP" },
  { name: "United Arab Emirates Dirham", code: "AED" },
  { name: "Australian Dollar", code: "AUD" },
  { name: "Thai Baht", code: "THB" },
];

const allCurrencies = [
  { name: "Indian Rupee", code: "INR" },
  { name: "Property currency", code: "€$£" },
  { name: "Argentine Peso", code: "ARS" },
  { name: "Azerbaijani Manat", code: "AZN" },
  { name: "Bahraini Dinar", code: "BHD" },
  { name: "Brazilian Real", code: "BRL" },
  { name: "Bulgarian Lev", code: "BGN" },
  { name: "Canadian Dollar", code: "CAD" },
  { name: "Chilean Peso", code: "CLP" },
  { name: "Chinese Yuan", code: "CNY" },
  { name: "Colombian Peso", code: "COP" },
  { name: "Czech Koruna", code: "CZK" },
  { name: "Danish Krone", code: "DKK" },
  { name: "Egyptian Pound", code: "EGP" },
];

export default function Header() {
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  return (
    <header className="bg-[#003b95] text-white shadow-md w-full pb-[3.8rem] pt-1">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-[1.6rem] font-bold ml-[1rem]">Booking.com</div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex items-center mr-[1.4rem] font-semibold ">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-blue-700 cursor-pointer text-[1rem] flex items-center space-x-2">
                <span>{selectedCurrency}</span>
                
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto p-6 sm:max-w-4xl">
              <h2 className="text-xl font-bold mb-2">Select your currency</h2>
              <p className="text-sm text-gray-500 mb-6">
                Where applicable prices will be converted to, and shown in, the currency that you select...
              </p>

              <h3 className="font-semibold mb-2">Suggested for you</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 mb-6">
                {suggestedCurrencies.map((currency) => (
                  <div key={currency.code} className="text-sm">
                    <div className="font-medium">{currency.name}</div>
                    <div className="text-gray-500">{currency.code}</div>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold mb-2">All currencies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                {allCurrencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => setSelectedCurrency(currency.code)}
                    className={`text-left rounded-md px-3 py-2 w-full ${
                      selectedCurrency === currency.code
                        ? "bg-blue-50 text-blue-800 font-semibold"
                        : ""
                    }`}
                  >
                    <div>{currency.name}</div>
                    <div className="text-gray-500 text-sm">{currency.code}</div>
                  </button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
           <Image src="/flag.png" alt="india flag" width={22} height={20} className="rounded-xl" />
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0M12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12"/>
                </svg>
          <Button variant="ghost" className="text-white hover:bg-blue-700 text-[1rem]">List your property</Button>
          <Button variant="ghost" className="text-blue-700 bg-white">Register</Button>
          <Button variant="ghost" className="text-blue-700 bg-white">Sign in</Button>
        </nav>
        
      </div>
      <div>
        <nav className="  hidden md:flex items-center space-x-3 mr-10 ">
       <NavButton/>
       </nav>
      </div>
      <div>
     <Hero />
   </div>
    </header>
  );
}
