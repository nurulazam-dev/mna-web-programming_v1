"use client";

import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-white text-3xl" />,
    desc: "Modern, fast, and scalable websites built using React & Next.js.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt className="text-white text-3xl" />,
    desc: "Cross-platform mobile applications using the latest technologies.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-white text-3xl" />,
    desc: "Clean, user-friendly, and responsive design using Figma and Tailwind CSS.",
    gradient: "from-orange-400 to-yellow-400",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-b from-[#040b1a] to-[#0a0f1f] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-cyan-400">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We provide innovative digital solutions tailored to your business
          needs.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-[#101930] rounded-2xl p-8 border border-transparent hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              {/* Icon Circle */}
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${service.gradient} shadow-lg mb-6 group-hover:scale-110 transition duration-300`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-cyan-400 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
