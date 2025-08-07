"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-10 bg-sky-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {projects?.map((project, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 bg-white flex flex-col"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 pt-2 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {project.title}
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
                  <p className="text-gray-600 text-sm mb-4 text-justify">
                    {project.description}
                  </p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-auto inline-block text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 px-4 rounded transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
