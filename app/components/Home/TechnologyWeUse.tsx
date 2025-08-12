"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPostman,
  SiRedux,
  SiTypescript,
  SiBootstrap,
  SiNextdotjs,
  SiHeroku,
  SiNetlify,
  SiRender,
  SiDaisyui,
  SiReactrouter,
  SiMongoose,
  SiVercel,
} from "react-icons/si";

import { VscVscodeInsiders } from "react-icons/vsc";

const technologies = [
  // Frontend
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    category: "Frontend",
    color: "text-orange-600",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    category: "Frontend",
    color: "text-blue-600",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    category: "Frontend",
    color: "text-purple-600",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "Frontend",
    color: "text-cyan-500",
  },
  {
    name: "Daisy UI",
    icon: <SiDaisyui />,
    category: "Frontend",
    color: "text-pink-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    category: "Frontend",
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Frontend",
    color: "text-blue-700",
  },
  {
    name: "React JS",
    icon: <FaReact />,
    category: "Frontend",
    color: "text-blue-500",
  },
  {
    name: "React Router",
    icon: <SiReactrouter />,
    category: "Frontend",
    color: "text-red-500",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    category: "Frontend",
    color: "text-purple-500",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    category: "Frontend",
    color: "text-black",
  },

  // Backend
  {
    name: "Node JS",
    icon: <FaNodeJs />,
    category: "Backend",
    color: "text-green-600",
  },
  {
    name: "Express JS",
    icon: <SiExpress />,
    category: "Backend",
    color: "text-gray-700",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Backend",
    color: "text-green-500",
  },
  {
    name: "Mongoose",
    icon: <SiMongoose />,
    category: "Backend",
    color: "text-green-600",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    category: "Backend",
    color: "text-yellow-500",
  },

  // Tools
  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "Tools",
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    category: "Tools",
    color: "text-black",
  },
  {
    name: "VS Code",
    icon: <VscVscodeInsiders />,
    category: "Tools",
    color: "text-blue-500",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    category: "Tools",
    color: "text-orange-500",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    category: "Tools",
    color: "text-pink-600",
  },
  {
    name: "Netlify",
    icon: <SiNetlify />,
    category: "Tools",
    color: "text-green-500",
  },
  {
    name: "Heroku",
    icon: <SiHeroku />,
    category: "Tools",
    color: "text-purple-700",
  },
  {
    name: "Render",
    icon: <SiRender />,
    category: "Tools",
    color: "text-indigo-500",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    category: "Tools",
    color: "text-black",
  },
];

const categories = ["Frontend", "Backend", "Tools"];

const TechnologyWeUse = () => {
  return (
    <div className="py-10 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold mb-4 text-center"
      >
        Our Technology <span className="text-cyan-400">and Tools</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-2xl mx-auto mb-6 text-center"
      >
        We leverage a wide range of modern technologies and tools to build
        scalable, efficient, and user-friendly applications. Here’s a glimpse of
        what we use:
      </motion.p>
      <div className="space-y-12 max-w-6xl mx-auto">
        {categories?.map((category) => (
          <div
            key={category}
            className="border border-blue-800 bg-[#101930] rounded-xl shadow-md p-6"
          >
            <div className="bg-blue-800 text-white inline-block px-4 py-1 rounded-t-md  font-semibold mb-4">
              {category} Technology
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech, index) => (
                  <div
                    key={index}
                    className="bg-[#1a233a] rounded-lg p-4 border border-gray-700 hover:scale-105 transition duration-300 flex flex-col items-center"
                  >
                    <div className={`text-4xl mb-2 ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <p className="text-sm text-white font-medium">
                      {tech.name}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyWeUse;
