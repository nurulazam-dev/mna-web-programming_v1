import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode size={32} className="text-primary" />,
    desc: "Modern, fast, and scalable websites built using React & Next.js.",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt size={32} className="text-primary" />,
    desc: "Cross-platform mobile applications using the latest technologies.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush size={32} className="text-primary" />,
    desc: "Clean, user-friendly, and responsive design using Figma and Tailwind CSS.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {services?.map((service, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="mb-4">{service?.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service?.title}</h3>
              <p className="text-gray-600">{service?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
