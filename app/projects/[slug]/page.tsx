"use client";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { projects } from "../data";
import Image from "next/image";
import { FaArrowLeft, FaVideo } from "react-icons/fa";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetails({ params }: Props) {
  const project = projects?.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section>
      <motion.div
        className="max-w-6xl mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mt-6 flex items-center">
          <Link
            href={`/projects`}
            className=" text-blue-600 font-medium border border-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-lg transition flex items-center gap-2"
          >
            <FaArrowLeft /> Back To Projects
          </Link>
        </div>
        {/* Image */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg mt-4">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
            width={800}
            height={400}
          />
        </div>
        <div className="flex justify-between items-center my-3">
          {/* Title */}
          <div>
            <h1 className="text-4xl font-bold mb-1">{project.title}</h1>
            <p className="text-gray-600">{project.shortDescription}</p>
          </div>
          {/* Links */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow"
              >
                🌐 Live Demo
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium shadow flex items-center gap-2"
              >
                <FaVideo className="text-gray-100" /> Watch Video
              </a>
            )}
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-black text-white px-6 py-2 rounded-lg font-medium shadow"
              >
                💻 Source Code
              </a>
            )}
          </div>
        </div>
        <div className="border border-gray-400 h-[2px] my-1"></div>
        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            🛠️ Technologies Used:
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.techStack?.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-1 bg-gray-200 text-sm rounded-full border border-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Bullet Points */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            ✨ Highlights:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {project.highlights?.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Full Description */}
        <div className="prose prose-lg max-w-none text-gray-800">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            📄 Detailed Description
          </h3>
          <p>{project.description}</p>
        </div>
      </motion.div>
    </section>
  );
}
