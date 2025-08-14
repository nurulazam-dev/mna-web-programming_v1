"use client";

import { coursesData } from "@/public/data/coursesDataBank";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OnlineCourses = () => {
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
          {coursesData?.map((course, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-lg border relative overflow-hidden hover:scale-105 transform transition-all duration-300"
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Image with Hover Overlay */}
              <div className="relative overflow-hidden">
                <Image
                  src={course?.imageLink}
                  alt={course?.title}
                  width={300}
                  height={180}
                  className="w-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="flex justify-between px-4 text-gray-300 text-sm my-2">
                <span className="border rounded-full px-2 py-1">
                  ⏳ {course.duration}
                </span>
                <span className="border rounded-full px-2 py-1">
                  💲 {course.price}
                </span>
              </div>
              {/* Card Content */}
              <div className="px-2 pt-1 flex flex-col flex-grow h-[110px]">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition">
                  {course?.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow text-center mb-4">
                  {course?.desc}
                </p>
              </div>
              <div className="flex justify-around items-center mb-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={
                    `px-4 py-2 rounded-lg font-medium bg-white text-black hover:bg-gray-200 transition bg-gradient-to-r` +
                    ` ${course?.gradient}`
                  }
                >
                  Enroll Now
                </motion.button>
                <Link href={`/courses/${course?.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg font-medium bg-white text-black hover:bg-gray-200 transition"
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
