"use client";
import { journeyData } from "@/public/data/aboutUsDataBank";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaGlobe, FaUsers } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const CompanyValuesData = [
  {
    icon: <LiaLaptopCodeSolid />,
    title: "Web Solutions",
    desc: "From websites to full-stack apps",
    gradient: "from-violet-700 to-blue-800",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Online Courses",
    desc: "Interactive programming learning",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    desc: "Skilled professionals & mentors",
    gradient: "from-indigo-700 to-violet-600",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    desc: "Serving clients & learners worldwide",
    gradient: "from-orange-400 to-yellow-400",
  },
];

const AboutUs = () => {
  return (
    <section className="py-10 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold mb-4 text-center"
      >
        About <span className="text-cyan-400">MNA Web Programming</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-2xl mx-auto mb-6 text-center"
      >
        <span className="font-semibold text-blue-400">MNA Web Programming</span>{" "}
        is a full-service <strong>Web Development Agency</strong> and an{" "}
        <strong>Online Learning Platform</strong>, helping businesses grow
        digitally and empowering individuals to become world-class developers.
      </motion.p>

      {/* =====================
      Company Values / Stats
      ===================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center px-4"
      >
        {CompanyValuesData?.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl shadow-lg px-2 py-3 hover:shadow-blue-500/30 hover:scale-[1.02] duration-300 hover:shadow-2xl transition"
          >
            <div className="flex justify-center items-center text-white mb-1">
              <div
                className={`border rounded-full text-7xl p-4 bg-gradient-to-r ${item?.gradient}`}
              >
                {item?.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-blue-400">
              {item?.title}
            </h3>
            <p className="text-gray-400">{item?.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* =====================
          Timeline - Story
      ===================== */}
      <div className="space-y-4 px-10 my-6">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          Our Journey
        </motion.h3>

        <div className="relative border-l-4 border-blue-500 pl-8 space-y-6">
          {journeyData?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-500/30 hover:scale-[1.02] transition duration-300 relative"
            >
              <span className="absolute -left-12 top-6 bg-blue-500 text-white font-bold px-3 py-1 rounded-lg">
                {item?.year}
              </span>
              <h4 className="text-xl font-semibold text-white mb-1">
                {item?.title}
              </h4>
              <p className="text-gray-400">{item?.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =====================
          Company details
      ===================== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 max-w-6xl mx-auto"
      >
        {/* Who We Are */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-500/30 hover:scale-[1.02] transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Who We Are
          </h3>
          <p className="text-gray-300">
            We&apos;re a passionate team of developers, designers, and educators
            helping startups and enterprises build impactful digital products.
            From the initial idea to the final deployment — we’re with you every
            step of the way.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-500/30 hover:scale-[1.02] transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            What We Do
          </h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>🔷 Custom Web Design & UI/UX</li>
            <li>🔷 Full-stack Web Development</li>
            <li>🔷 Android/iOS App Development</li>
            <li>🔷 Online Web Development Courses & Training</li>
          </ul>
        </div>

        {/* ===========Mission============ */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-500/30 hover:scale-[1.02] transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-300">
            To deliver <strong>innovative digital solutions</strong> and{" "}
            <strong>empower learners</strong> by providing practical,
            industry-level online courses in web development.
          </p>
        </div>

        {/* ============Our Vision========== */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-500/30 hover:scale-[1.02] transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-300">
            To become a globally recognized{" "}
            <strong>web development agency</strong> and the{" "}
            <strong>number 1 online learning platform</strong> for aspiring
            developers worldwide.
          </p>
        </div>
      </motion.div>

      <div className="text-center mt-12">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold shadow-lg transition duration-300"
        >
          Let’s Work Together
        </motion.a>
      </div>
    </section>
  );
};

export default AboutUs;
