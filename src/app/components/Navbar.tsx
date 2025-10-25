"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50">
      {/* Full-width background */}
      <img
        src="/navbar-background.png"
        alt="Navbar Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Constrained content */}
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex justify-between items-center z-10" style={{ paddingTop: "0" }}>
        <Link href="/" className="text-xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-20 w-20 inline-block mr-2" />
        </Link>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm absolute top-full left-0 w-full text-white flex flex-col gap-4 px-6 py-4 z-20">
          <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
