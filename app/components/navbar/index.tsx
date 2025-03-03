"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Get active path
import { navItems } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change after scrolling down 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center lg:px-20 px-4 
       top-0 left-0 w-full h-[60px] transition-all 
      ${
        isScrolled
          ? "bg-[#e3f2fa] shadow-md" // Keep solid bg with shadow on scroll
          : "bg-[#e3f2fa]" // Initial background color
      }`}
    >
      <div className="flex gap-[20px] items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 w-[150px] h-[28px]">
          <Image src="/images/completenav.png" alt="logo" width={100} height={100} />
          <Image src="/images/ServizCAMPB.png" alt="logo" width={100} height={100} className="w-[128px]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[14px] cursor-pointer transition ${
                pathname === item.href ? "text-[#548235] font-semibold" : "text-gray-700 hover:text-[#548235e4]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop "Book Service" Button */}
        <Button href="/book-service" label="Book Service" className="w-fit h-8 items-center justify-center z-[9999] flex" />

      {/* Mobile Menu Button */}
      <button className="md:hidden text-green-700" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-md rounded-md p-6 flex flex-col space-y-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg transition cursor-pointer ${
                pathname === item.href ? "text-[#548235] font-semibold" : "text-gray-700 hover:text-[#548235ec]"
              }`}
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile "Book Service" Button */}
          <Button href="/book-service" label="Book Service" className="w-full z-[9999] cursor-pointer" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
