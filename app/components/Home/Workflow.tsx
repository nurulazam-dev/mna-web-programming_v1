"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaDraftingCompass,
  FaProjectDiagram,
  FaCode,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const workflowSteps = [
  {
    step: "Step 1",
    title: "Requirement Gathering",
    description:
      "We make gathering project requirements, resources, and information a top priority to ensure a successful start to every project.",
    icon: <FaSearch />,
    color: "from-pink-500 to-red-500",
  },
  {
    step: "Step 2",
    title: "UI/UX Design",
    description:
      "We create engaging UI/UX designs that align with your brand and enhance the user experience.",
    icon: <FaDraftingCompass />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    step: "Step 3",
    title: "Prototype",
    description:
      "We deliver a prototype after designing, which our development team uses to bring your product to life.",
    icon: <FaProjectDiagram />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "Step 4",
    title: "Development",
    description:
      "Development of mobile application, web platform & blockchain using the latest tools and technologies.",
    icon: <FaCode />,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: "Step 5",
    title: "Deployment",
    description:
      "Smoothly launch your product with our efficient deployment process using the latest tools and technologies.",
    icon: <FaRocket />,
    color: "from-orange-500 to-yellow-500",
  },
  {
    step: "Step 6",
    title: "Support & Maintenance",
    description:
      "Our team is always ready to answer every query and provide ongoing support after deployment.",
    icon: <FaTools />,
    color: "from-teal-500 to-green-500",
  },
];

const Workflow = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Process <span className="text-cyan-400">We Follow</span>
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500 transform -translate-x-1/2"></div>

        {workflowSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Icon Circle */}
            <div className="w-1/2 flex justify-center relative">
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${step.color} shadow-lg border-4 border-white z-10`}
              >
                <div className="text-white text-2xl">{step.icon}</div>
              </div>
            </div>

            {/* Card */}
            <div className="w-1/2 bg-[#101930] p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition duration-300">
              <p className="text-sm text-cyan-400 font-semibold">{step.step}</p>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
