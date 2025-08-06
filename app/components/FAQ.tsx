"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer web design, web development, app development, and UI/UX design.",
  },
  {
    question: "Do you provide maintenance support?",
    answer: "Yes, we offer ongoing support and maintenance packages.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "It depends on the project, but usually 1 to 3 weeks.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="py-20 px-4 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        {faqs?.map((faq, i) => (
          <div key={i} className="mb-4 border-b pb-4">
            <button
              className="text-left w-full font-semibold text-lg text-gray-800 flex justify-between"
              onClick={() => toggle(i)}
            >
              {faq?.question}
              <span>{activeIndex === i ? "-" : "+"}</span>
            </button>
            {activeIndex === i && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-gray-600 mt-2"
              >
                {faq?.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
