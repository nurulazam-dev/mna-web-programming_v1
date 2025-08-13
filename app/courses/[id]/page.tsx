"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaDollarSign, FaBook } from "react-icons/fa";

type Instructor = {
  image: string;
  name: string;
  title: string;
  bio: string;
};

type Course = {
  imageLink: string;
  title: string;
  desc: string;
  curriculum?: string[];
  instructor: Instructor;
  duration: string;
  price: string;
  id: string;
};

interface CourseDetailsProps {
  course: Course;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={course?.imageLink}
          alt={course?.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 flex items-end p-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            {course?.title}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Main Content */}
        <motion.div
          className="lg:col-span-2 space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
            <p className="text-gray-600 dark:text-gray-300">{course?.desc}</p>
          </div>

          {/* Curriculum */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaBook /> Curriculum
            </h2>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
              {course?.curriculum?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructor */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 flex items-center gap-4">
            <Image
              src={course?.instructor?.image}
              alt={course?.instructor.name}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">
                {course?.instructor?.name}
              </h3>
              <p className="text-gray-500">{course?.instructor?.title}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {course?.instructor?.bio}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Sticky Sidebar */}
        <motion.aside
          className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 h-fit sticky top-24"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg">
              <FaClock /> Duration:{" "}
              <span className="font-semibold">{course?.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FaDollarSign /> Price:{" "}
              <span className="font-semibold">{course?.price}</span>
            </div>
            <Link href={`/enroll/${course?.id}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full py-3 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
              >
                Enroll Now
              </motion.button>
            </Link>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
