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
  //   SiVisualstudiocode,
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

export const technologies = [
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

  // Tools / Hosting / Platforms
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

const TechnologyWeUse = () => {
  return (
    <div className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">
        Technologies We Use
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`border-2 rounded-2xl shadow hover:shadow-lg p-4 flex flex-col items-center transition duration-300 border-gray-200 hover:border-${
              tech.color?.split("-")[1]
            }-400`}
          >
            <div className={`text-5xl ${tech.color} mb-2`}>{tech.icon}</div>
            <p className="text-sm font-medium text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyWeUse;
