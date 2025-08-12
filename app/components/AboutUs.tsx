"use client";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-10 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block pb-1">
          About MNA Web Programming
        </h2>
        <p className="text-lg leading-relaxed mt-4">
          <span className="font-semibold text-blue-400">
            MNA Web Programming
          </span>{" "}
          is a cutting-edge IT agency committed to transforming your digital
          ideas into reality. We specialize in delivering modern, responsive,
          and performance-driven solutions for businesses of all sizes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto"
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

        {/* Mission */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-500/30 hover:scale-[1.02] transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-300">
            Our mission is to empower individuals and businesses through
            innovative and scalable software solutions. We also aim to nurture
            future developers by providing high-quality, hands-on education.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-blue-500/30 hover:scale-[1.02] transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Why Choose MNA?
          </h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>✔️ 100% Satisfaction Guarantee</li>
            <li>✔️ On-time Delivery & Support</li>
            <li>✔️ Modern Tools & Technologies</li>
            <li>✔️ Affordable Pricing & Packages</li>
          </ul>
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
