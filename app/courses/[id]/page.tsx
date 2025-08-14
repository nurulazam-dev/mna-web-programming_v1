"use client";

import { coursesData } from "@/public/data/coursesDataBank";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaClock, FaDollarSign, FaBook, FaArrowLeft } from "react-icons/fa";
type Props = {
  params: {
    id: string;
  };
};

export default function CourseDetails({ params }: Props) {
  const { id } = params;

  const course = coursesData?.find((course) => course?.id === id);

  if (!course) {
    notFound();
  }

  return (
    <section className="min-h-screen py-10">
      <div className="my-4">
        <Link
          href={`/courses`}
          className="inline-flex items-center gap-2 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1 rounded-full transition-all shadow-sm"
        >
          <FaArrowLeft /> Back to Courses
        </Link>
      </div>
      {/* Hero Section */}
      <div className="rounded-xl overflow-hidden shadow-lg group">
        <Image
          src={course?.imageLink}
          alt={course?.title}
          className="w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-700"
          width={1200}
          height={500}
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-white px-4"
      >
        {course?.title}
      </motion.h1>
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
