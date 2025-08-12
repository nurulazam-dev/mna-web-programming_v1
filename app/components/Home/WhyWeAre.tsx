"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-pink-500 text-4xl" />,
    title: "Innovative Solutions",
    description:
      "We deliver modern, cutting-edge solutions that help your business stay ahead in the digital age.",
  },
  {
    icon: <FaUsers className="text-green-500 text-4xl" />,
    title: "Client-Centered Approach",
    description:
      "Your goals are our top priority. We work closely with you to ensure success at every step.",
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    title: "Creative & Unique Ideas",
    description:
      "Our team brings fresh ideas to every project, making sure your brand stands out.",
  },
  {
    icon: <FaCheckCircle className="text-blue-500 text-4xl" />,
    title: "Proven Track Record",
    description:
      "We have a history of delivering successful projects on time and within budget.",
  },
];

const WhyWeAre = () => {
  return (
    <section className="relative py-10 px-6 text-white overflow-hidden">
      {/* Background Glow */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent)]"></div> */}

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4"
        >
          Why We Are Different
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-6"
        >
          We are not just another agency. We’re a team of passionate innovators,
          problem solvers, and storytellers who thrive on helping brands grow.
        </motion.p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition transform border border-slate-700"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAre;
