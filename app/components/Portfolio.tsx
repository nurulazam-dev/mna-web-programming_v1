// app/components/Portfolio.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Website",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
    slug: "ecommerce-website",
    description:
      "A scalable online store platform with secure payment, product filtering, and real-time order tracking.",
  },
  {
    title: "NGO Loan App",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
    slug: "ngo-loan-app",
    description:
      "A digital loan management app for NGOs with loan tracking, analytics, and member onboarding.",
  },
  {
    title: "Hospital Management",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
    slug: "hospital-management",
    description:
      "Comprehensive hospital solution with patient records, billing system, doctor scheduling, and more.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-sky-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {projects.map((project, i) => (
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
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
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
