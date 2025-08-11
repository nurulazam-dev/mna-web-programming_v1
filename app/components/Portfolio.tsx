"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects/data";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          p.techStack?.some(
            (tech) => tech.toLowerCase() === activeCategory.toLowerCase()
          )
        );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">✨ Our Portfolio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our latest projects — from full-stack web apps to sleek
          frontend interfaces.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg"
                  : "bg-white hover:bg-gray-100 text-gray-700 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {project.title}
                  </h3>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm flex-grow text-justify">
                    {project.description}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-block text-center text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-10">
            <button
              onClick={handleSeeMore}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
