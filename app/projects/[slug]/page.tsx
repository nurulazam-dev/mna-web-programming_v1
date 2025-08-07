import { notFound } from "next/navigation";
import Image from "next/image";

const projects = [
  {
    slug: "ecommerce-website",
    title: "E-commerce Website",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
    description:
      "This modern E-commerce platform includes product management, cart system, secure checkout, customer dashboard, and real-time notifications. Built with Next.js, Tailwind, and Stripe integration.",
  },
  {
    slug: "ngo-loan-app",
    title: "NGO Loan App",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
    description:
      "Designed for non-profits to manage microloans and community financing. Features include member registration, document uploads, monthly statements, and custom analytics dashboard.",
  },
  {
    slug: "hospital-management",
    title: "Hospital Management",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
    description:
      "Full-stack web app for hospital operations, including patient tracking, appointment booking, medical records, and billing. Secure, responsive, and built for scalability.",
  },
];

export default function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-xl mb-8 w-full object-cover"
        />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          {project.title}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          {project.description}
        </p>
      </div>
    </section>
  );
}
