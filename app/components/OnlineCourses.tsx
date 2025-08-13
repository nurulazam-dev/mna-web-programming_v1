"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaGlobe,
} from "react-icons/fa";

const courses = [
  {
    title: "Full-Stack Web Development",
    icon: <FaLaptopCode className="text-white text-3xl" />,
    desc: "Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and more to build scalable web applications.",
    duration: "6 Months",
    price: "$299",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-white text-3xl" />,
    desc: "Build Android & iOS apps using Flutter and React Native from scratch.",
    duration: "4 Months",
    price: "$249",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "UI/UX Design Masterclass",
    icon: <FaPaintBrush className="text-white text-3xl" />,
    desc: "Master Figma, Wireframing, Prototyping, and advanced design principles.",
    duration: "3 Months",
    price: "$199",
    gradient: "from-orange-400 to-yellow-400",
  },
  {
    title: "Web Programming Learning Platform",
    icon: <FaGlobe className="text-white text-3xl" />,
    desc: "Exclusive platform for learning web programming with structured lessons & projects.",
    duration: "Ongoing Access",
    price: "$149/year",
    gradient: "from-green-400 to-teal-400",
  },
];

export default function OnlineCourses() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold mb-4"
          >
            Our Online <span className="text-cyan-400">Courses</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto mb-6"
          >
            Learn anytime, anywhere with our expert-led courses designed to help
            you master the latest technologies.
          </motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="rounded-2xl shadow-lg p-6 border relative overflow-hidden hover:scale-105 transform transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`p-4 rounded-full inline-block mb-4 bg-gradient-to-r ${course.gradient}`}
              >
                {course.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-200 text-sm mb-4">{course.desc}</p>
              <div className="flex justify-between text-gray-300 text-sm mb-4">
                <span>⏳ {course.duration}</span>
                <span>💲 {course.price}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-lg font-medium bg-white text-black hover:bg-gray-200 transition"
              >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
