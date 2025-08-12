"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "At MNA Web Programming, we offer responsive web design, custom web development, mobile app development, e-commerce solutions, UI/UX design, and an online platform for learning web development with hands-on tutorials.",
  },
  {
    question: "Do you provide website maintenance and ongoing support?",
    answer:
      "Yes! We provide maintenance packages with bug fixing, content updates, security monitoring, speed optimization, and feature enhancements.",
  },
  {
    question: "How long does it take to complete a website project?",
    answer:
      "Timelines depend on complexity. Basic sites take 1–2 weeks, while advanced sites may take 3–6 weeks. We’ll provide a detailed plan after consultation.",
  },
  {
    question: "Can you help me redesign my existing website?",
    answer:
      "Absolutely! We can modernize your site, improve UX, and enhance performance while aligning with your business goals.",
  },
  {
    question: "Is my website mobile-friendly and SEO-optimized?",
    answer:
      "Yes! All our websites are fully responsive, fast-loading, and built with SEO best practices for higher search rankings.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section id="faq" className="py-10 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked <span className="text-cyan-400">Questions</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here are some of the most common questions our clients ask. If you
          have more, feel free to contact us anytime.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-transparent bg-[#101b33] hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-lg font-semibold hover:text-cyan-400 transition"
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 text-cyan-400"
                >
                  {activeIndex === i ? <FaChevronUp /> : <FaChevronDown />}
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-300 text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
