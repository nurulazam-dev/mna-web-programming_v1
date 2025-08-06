"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import heroImage from "../../public/images/logo/MNA-WEB-PROGRAMMING.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-sky-100 px-6 md:px-12 lg:px-24 pt-5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Empowering Your{" "}
            <span className="text-primary">Digital Journey</span>
          </h1>
          <p className="text-gray-600 text-lg">
            We specialize in modern <strong>Web Design</strong>, robust{" "}
            <strong>Web Development</strong>, powerful{" "}
            <strong>App Development</strong>, and online education through our
            exclusive <strong>Web Programming Learning Platform</strong>.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 text-left text-sm text-gray-700">
            <div>
              <p>
                ✅ Full-Stack Development
                <br />
                ✅ Scalable Solutions
                <br />✅ Custom Web Design
              </p>
            </div>

            <div>
              <p>
                ✅ Mobile App Solutions
                <br />
                ✅ Responsive Development
                <br />✅ Learn Web Development
              </p>
            </div>
          </div>

          <div className="pt-3">
            <a
              href="#contact"
              className="hover:bg-slate-800 bg-sky-600 text-white font-medium px-8 py-3 rounded transition duration-300 shadow-md"
            >
              Get Free Consultation
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src={heroImage}
            alt="Hero Banner"
            width={500}
            height={500}
            className="rounded-xl shadow-xl object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
