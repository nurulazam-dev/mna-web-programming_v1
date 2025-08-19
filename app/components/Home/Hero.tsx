"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
// import brandLogo from "../../../public/images/logo/MNA-Web-Programming-logo.png";
// import TypewriterView from "../Shared/TypewriterView";
import ParticleTextView from "../Shared/ParticleTextView";
import StylistCustomButton from "../Shared/StylistCustomButton";
import OrbitingSkills from "./OrbitingSkills";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden mt-5"
    >
      {/* Decorative background shapes */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight  md:text-left text-center">
            Empowering Your{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h1>
          <p className="text-slate-200 text-lg max-w-xl md:text-left text-justify">
            We specialize in modern <strong>Web Design</strong>, robust{" "}
            <strong>Web Development</strong>, powerful{" "}
            <strong>App Development</strong>, and online education through our
            exclusive <strong>Web Programming Learning Platform</strong>.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-slate-200">
            {[
              "Full-Stack Development",
              "Scalable Solutions",
              "Custom Web Design",
              "Mobile App Solutions",
              "Responsive Development",
              "Learn Web Development",
            ]?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-sky-500" />
                <span className="md:text-sm text-md font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <StylistCustomButton
              customLink="/contact-us"
              buttonText="Get Free Consultation"
            />
            <StylistCustomButton
              customLink="/courses"
              buttonText="Explore Courses"
            />
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 md:mt-0 mt-7"
          // className="flex justify-center relative"
        >
          {/* <TypewriterView /> */}
          <div className="mb-2 flex justify-center">
            <OrbitingSkills />
            {/*  <Image
              src={brandLogo}
              alt="MNA Web Programming"
              width={220}
              height={220}
              priority
            /> */}
          </div>
          <ParticleTextView />
          {/* <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 via-transparent to-transparent rounded-full blur-3xl opacity-40" />
            <Image
            src={heroImage}
            alt="Hero Banner"
            width={520}
            height={520}
            className="relative z-10 rounded-2xl shadow-2xl object-cover"
            priority
          /> 
          <ParticleView /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
