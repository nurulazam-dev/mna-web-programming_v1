"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Amazing work! The website was delivered fast and professionally.",
  },
  {
    name: "Sarah Smith",
    feedback:
      "MNA Web Programming is my go-to team for all my web and app needs.",
  },
  {
    name: "Mehedi Hasan",
    feedback: "Excellent service, great communication, and perfect output.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-sky-50" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials?.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg"
            >
              <p className="text-gray-700 italic mb-4">“{t?.feedback}”</p>
              <h4 className="text-primary font-semibold">{t?.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
