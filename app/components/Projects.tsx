"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projectsData } from "../../public/data/projectDataBank";

const categories = ["All", "Full Stack", "Frontend", "Backend"];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData?.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleSeeMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <section id="projects" className="py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4"
        >
          Explore Our Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-6"
        >
          Explore our latest projects — from full-stack apps to sleek front-end
          designs, crafted with precision and passion.
        </motion.p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-6">
          {categories?.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg"
                  : "bg-white/80 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="underline"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-20"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {visibleProjects?.map((project, i) => (
              <motion.div
                key={project?.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
              >
                {/* Image with Hover Overlay */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project?.imageLink}
                    alt={project?.title}
                    width={600}
                    height={300}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                  {/* Hover Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                    {project?.liveLink && (
                      <a
                        href={project?.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/90 dark:bg-gray-800 text-gray-800 dark:text-white shadow hover:scale-110 transition"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project?.clientCode && (
                      <a
                        href={project?.clientCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/90 dark:bg-gray-800 text-gray-800 dark:text-white shadow hover:scale-110 transition flex items-center gap-1"
                      >
                        <FaGithub /> Client Code
                      </a>
                    )}
                    {project?.serverCode && (
                      <a
                        href={project?.serverCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/90 dark:bg-gray-800 text-gray-800 dark:text-white shadow hover:scale-110 transition flex items-center gap-1"
                      >
                        <FaGithub /> Server Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-1 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition">
                    {project?.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow text-center mb-4">
                    {project?.shortDescription}
                  </p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-[6px]">
                    {project?.techStack?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project?.slug}`}
                    className="mt-5 inline-block text-center text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition"
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
          <div className="mt-14">
            <button
              onClick={handleSeeMore}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition font-medium"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
