"use client";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../data/data";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
      <>
      <div className="bg-gray-900 hidden md:block">
        <nav className="flex justify-center items-center space-x-8 h-14">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              target={link.url.startsWith('http') ? "_blank" : ""}
              className="text-white hover:text-cyan-200 px-3 py-2">
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="bg-gray-900 lg:hidden h-16 flex items-center justify-end">
        <button type="button" className="space-y-2 mr-5" onClick={() => setIsNavOpen(prev => !prev)}>
          <div className="bg-white block w-8 h-1 rounded transition-all" />
          <div className="bg-white block w-8 h-1 rounded transition-all" />
          <div className="bg-white block w-8 h-1 rounded transition-all" />
        </button>
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
            <svg
              className="h-8 w-8 text-gray-600"
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
          <nav className="flex flex-col items-center justify-between min-h-[250px]">
            {navLinks.map((link) => (
              <Link 
                key={link.url}
                href={link.url}
                onClick={() => setIsNavOpen(false)}
                target={link.url.startsWith('http') ? "_blank" : ""}
                className="border-b border-gray-400 my-4 uppercase">
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      </>
  )
}

export default Header;