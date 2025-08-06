import Image from "next/image";

const projects = [
  {
    title: "E-commerce Website",
    image: "/images/projects/ecommerce.jpg",
  },
  {
    title: "NGO Loan App",
    image: "/images/projects/ngo.jpg",
  },
  {
    title: "Hospital Management",
    image: "/images/projects/hospital.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-sky-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects?.map((project, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border hover:shadow-lg transition"
            >
              <Image
                src={project?.image}
                alt={project?.title}
                width={56}
                height={56}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project?.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
