"use client";

import { motion } from "framer-motion";
import { ImSad2 } from "react-icons/im";
import StylistCustomButton from "./components/Shared/StylistCustomButton";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-4">
      {/* Floating Ghost Illustration */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="mb-2"
      >
        <ImSad2 className="w-28 h-28 text-white" />
      </motion.div>

      {/* 404 Text */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900"
      >
        4 0 4
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-300 mt-4 mb-3 text-center"
      >
        Oops! The page you&apos;re looking for doesn’t exist. Maybe it&apos;s
        floating around in the void 👻
      </motion.p>

      {/* Back Home Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6"
      >
        <StylistCustomButton customLink="/" buttonText="Go Back Home" />
      </motion.div>
    </div>
  );
}
