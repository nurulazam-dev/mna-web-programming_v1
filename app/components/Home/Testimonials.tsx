"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO at TechCorp",
    company: "TechCorp Ltd.",
    feedback:
      "MNA Web Programming provided exceptional service and delivered our project on time with top-notch quality.",
    image: "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
  },
  {
    name: "Sarah Smith",
    title: "Entrepreneur",
    company: "Smart Startups",
    feedback:
      "Great communication and quality work. I highly recommend their web and app development services!",
    image: "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
  },
  {
    name: "Mehedi Hasan",
    title: "Software Engineer",
    company: "BanglaTech",
    feedback:
      "The team is talented, proactive, and very helpful. Their online teaching platform is also superb.",
    image: "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
  },
  {
    name: "Emily Johnson",
    title: "Digital Marketer",
    company: "MarketMakers",
    feedback:
      "They helped us build a scalable app that boosted our online sales. Thank you MNA Web Programming!",
    image: "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
  },
  {
    name: "Tanvir Ahmed",
    title: "Freelancer",
    company: "Self-employed",
    feedback:
      "From UI design to deployment, they handled everything flawlessly. I'm really impressed.",
    image: "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
  },
];

const scrollVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const Testimonials = () => {
  const containerRef = useRef(null);

  return (
    <section className="py-10 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          What Our Clients Say
        </h2>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            variants={scrollVariants}
            animate="animate"
            ref={containerRef}
          >
            {testimonials.concat(testimonials).map((t, i) => (
              <div
                key={i}
                className="relative w-[360px] min-h-[240px] bg-[#1e1e1e] text-white rounded-xl px-4 py-6 shadow-lg border-l-[3px] border-red-500 flex-shrink-0"
              >
                <div className="flex items-center gap-1 my-5">
                  <Image
                    src={t?.image}
                    alt="Mohammed Nurul Islam Khan"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">{t?.name}</h4>
                    <p className="text-sm text-gray-400">
                      {t?.title} at {t?.company}
                    </p>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-gray-400 leading-relaxed text-sm text-justify">
                  {t?.feedback}
                </p>

                {/* Rating ribbon */}
                <div className="absolute top-4 right-0">
                  <div className="relative bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-l-md flex items-center gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStarHalfStroke />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
