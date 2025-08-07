"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "At MNA Web Programming, we offer a comprehensive range of services including responsive web design, custom web development, mobile app development, e-commerce solutions, UI/UX design, and an online platform for learning web development through hands-on tutorials and projects.",
  },
  {
    question: "Do you provide website maintenance and ongoing support?",
    answer:
      "Absolutely! We provide reliable maintenance packages that include bug fixing, content updates, security monitoring, speed optimization, and feature enhancements to ensure your website stays up-to-date and runs smoothly.",
  },
  {
    question: "How long does it take to complete a website project?",
    answer:
      "The timeline depends on the complexity and features of your project. On average, a basic website takes 1 to 2 weeks, while more advanced or custom websites can take 3 to 6 weeks. We'll give you a detailed timeline after the initial consultation.",
  },
  {
    question: "Can you help me redesign my existing website?",
    answer:
      "Yes, we specialize in website redesigns! Whether you need a modern refresh, improved user experience, or better performance, we can revamp your existing site to align with current trends and your business goals.",
  },
  {
    question: "Is my website going to be mobile-friendly and SEO-optimized?",
    answer:
      "Definitely! All our websites are mobile-responsive, optimized for fast loading, and follow SEO best practices to improve your visibility on search engines.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="py-20 px-4 bg-sky-50" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white shadow-sm rounded-xl overflow-hidden border"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-left px-6 py-4 text-lg font-medium text-gray-800 hover:bg-sky-100 transition"
              >
                {faq.question}
                <span className="ml-2 text-primary">
                  {activeIndex === i ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4 text-gray-600 text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
