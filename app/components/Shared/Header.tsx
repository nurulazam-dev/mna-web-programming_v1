"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import brandLogo from "../../../public/images/logo/MNA-WEB-PROGRAMMING.png";

const navLinks = ["Home", "Services", "Portfolio", "Contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <div>
          <Image
            src={brandLogo}
            alt="MNA Web Programming Logo"
            width={120}
            height={120}
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          {navLinks?.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-primary transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white px-6 pb-4"
        >
          {navLinks?.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
