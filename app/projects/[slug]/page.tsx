"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  FaArrowLeft,
  FaVideo,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";
import Link from "next/link";
import { projectsData } from "../../../public/data/projectDataBank";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetails({ params }: Props) {
  const project = projectsData?.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="my-4">
          <Link
            href={`/projects`}
            className="inline-flex items-center gap-2 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1 rounded-full transition-all shadow-sm"
          >
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg group">
          <Image
            src={project.imageLink}
            alt={project.title}
            className="w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-700"
            width={1200}
            height={500}
          />
        </div>

        {/* Header */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-900">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg">{project.shortDescription}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                🌐 Live Demo <FaExternalLinkAlt size={14} />
              </a>
            )}
            {project.videoLink && (
              <a
                href={project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <FaVideo /> Watch Video
              </a>
            )}
            {project?.clientCode && (
              <a
                href={project?.clientCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <FaCode /> Client Code
              </a>
            )}
            {project?.serverCode && (
              <a
                href={project?.serverCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <FaCode /> Server Code
              </a>
            )}
          </div>
        </div>

        <div className="border-t border-gray-300 my-8"></div>

        {/* Technologies */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Technologies Used:
          </h3>
          <div className="flex flex-wrap gap-3">
            {project?.techStack?.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-1 bg-white border border-gray-200 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:shadow-md hover:bg-gray-50 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-2xl shadow-md p-6 lg:p-10 mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Key Highlights:
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            {project?.highlights?.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-500">•</span> {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
