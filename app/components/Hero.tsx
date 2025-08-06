"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 to-blue-50 px-4 pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          We Build <span className="text-primary">Web</span> & <span className="text-primary">App</span> Solutions
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          MNA Web Programming is your trusted partner for modern, fast & responsive digital solutions.
        </p>
        <a
          href="#contact"
          className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-sky-600 transition"
        >
          Get a Free Quote
        </a>
      </motion.div>
    </section>
  );
}
