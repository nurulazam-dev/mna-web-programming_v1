"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import brandLogo from "../../../public/images/logo/MNA-WEB-PROGRAMMING.png";

const navLinks = [
  "Home",
  "Projects",
  "Courses",
  "About Us",
  "Contact Us",
  "Register",
  "Login",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-r from-gray-700/60 to-gray-800/80 ${
        scrolled
          ? "bg-gradient-to-r from-white/80 to-white/70 dark:from-gray-900/80 dark:to-gray-800/60 shadow-lg backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <Image
              src={brandLogo}
              alt="MNA Web Programming Logo"
              width={scrolled ? 110 : 140}
              height={scrolled ? 110 : 140}
              priority
              className="transition-all duration-300"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              // href={`#${link.toLowerCase()}`}
              href={`/${link.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}`}
              className="relative text-gray-800 dark:text-gray-200 font-medium group"
            >
              {link}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-3xl text-gray-800 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            ></motion.div>

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-72 h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg md:hidden p-6 z-50 flex flex-col"
            >
              <div className="flex justify-end">
                <button
                  className="text-3xl text-gray-800 dark:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <FiX />
                </button>
              </div>
              <div className="mt-10 flex flex-col space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-800 dark:text-gray-200 font-medium text-lg"
                    whileHover={{ x: 5, color: "#0077ff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
