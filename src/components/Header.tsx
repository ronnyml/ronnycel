"use client";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../data/data";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      {/* Desktop Header */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[conic-gradient(at_top_left,_#000000_40%,_#0d1225_80%,_#000100_100%)] shadow-lg border-b border-white/10 hidden md:block transition-all duration-300">
        <nav className="flex justify-center items-center space-x-8 h-[4rem]">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              target={link.url.startsWith('http') ? "_blank" : ""}
              className="text-white hover:text-gray-200 font-semibold px-4 py-2 rounded transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black shadow-lg border-b border-white/10 lg:hidden h-16 flex items-center justify-end transition-all duration-300">
        <button type="button" className="space-y-2 mr-5" onClick={() => setIsNavOpen(prev => !prev)} aria-label="Open navigation menu">
          <div className="bg-white block w-8 h-1 rounded transition-all" />
          <div className="bg-white block w-8 h-1 rounded transition-all" />
          <div className="bg-white block w-8 h-1 rounded transition-all" />
        </button>
        <div className={isNavOpen ? "showMenuNav fixed inset-0 z-50 bg-black flex flex-col" : "hideMenuNav"}>
          <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <nav className="flex flex-col items-center justify-center min-h-screen bg-black rounded-none shadow-none p-8 w-full">
            {navLinks.map((link) => (
              <Link 
                key={link.url}
                href={link.url}
                onClick={() => setIsNavOpen(false)}
                target={link.url.startsWith('http') ? "_blank" : ""}
                className="border-b border-gray-700 my-4 uppercase text-white hover:text-blue-200 font-semibold px-4 py-2 rounded transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 w-full text-center"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-[4rem]" />
    </>
  )
}

export default Header;