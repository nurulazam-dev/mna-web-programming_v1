"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "We will contact you soon.",
      toast: true,
      position: "top-end",
      timer: 3000,
      showConfirmButton: false,
    });
    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold leading-snug">
            Let’s <span className="text-cyan-400">Connect</span> & Build
            Something Amazing
          </h2>
          <p className="text-gray-300 max-w-lg">
            We specialize in Web Design, Development, App Solutions, and
            Teaching Platforms. Whether it’s a project inquiry or just a
            friendly hello — we’re always listening.
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <div className="p-4 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-300">+880 1234 567 890 (Support)</p>
                <p className="text-gray-300">+880 1234 567 891 (Business)</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <div className="p-4 bg-gradient-to-tr from-pink-400 to-red-500 rounded-full">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-300">mnawebprogramming@gmail.com</p>
                <p className="text-gray-300">nurulazam.dev@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition">
              <div className="p-4 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-full">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-300">
                  MNA Web Programming House, Raozan, Chattogram, Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                required
                className="w-full p-4 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition shadow-lg shadow-cyan-500/30"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
