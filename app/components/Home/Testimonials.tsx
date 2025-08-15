"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { testimonialsData } from "@/public/data/testimonialsDataBank";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaQuoteLeft,
  FaQuoteRight,
  FaTwitter,
} from "react-icons/fa";

interface CardData {
  id: number;
  image: string;
  name: string;
  title: string;
  company: string;
  feedback: string;
}

const cardData: CardData[] = testimonialsData.map((t) => ({
  id: t.id,
  image: t.image,
  name: t.name,
  title: t.title,
  company: t.company,
  feedback: t.feedback,
}));

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(
    Math.floor(cardData.length / 2)
  );
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoplayDelay = 3000;

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardData.length);
  };

  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isPaused, activeIndex]);

  const changeSlide = (newIndex: number) => {
    const newSafeIndex = (newIndex + cardData.length) % cardData.length;
    setActiveIndex(newSafeIndex);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
  };

  const onDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const dragThreshold = 75;
    const dragOffset = info.offset.x;
    if (dragOffset > dragThreshold) {
      changeSlide(activeIndex - 1);
    } else if (dragOffset < -dragThreshold) {
      changeSlide(activeIndex + 1);
    }
  };

  return (
    <section className="py-10 w-full flex-col items-center justify-center font-sans overflow-hidden">
      <div
        // onMouseEnter={() => setIsPaused(true)}
        onMouseEnter={() => setIsPaused(false)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold mb-4 text-center"
          >
            What Our <span className="text-cyan-400">Clients Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto mb-3 text-center px-6"
          >
            Our clients love working with us! Here’s what they have to say:
          </motion.p>
        </div>
        <div className="relative flex w-full flex-col">
          <div className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
            <motion.div
              className="w-full h-full flex items-center justify-center"
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
            >
              {cardData.map((card, index) => (
                <Card
                  key={card.id}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={cardData.length}
                />
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-1">
            <button
              onClick={() => changeSlide(activeIndex - 1)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <FaArrowLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center justify-center gap-3">
              {cardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    activeIndex === index
                      ? "w-6 bg-pink-400"
                      : "w-2 bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => changeSlide(activeIndex + 1)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <FaArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  card: CardData;
  index: number;
  activeIndex: number;
  totalCards: number;
}

const Card: React.FC<CardProps> = ({
  card,
  index,
  activeIndex,
  totalCards,
}) => {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) {
    offset -= totalCards;
  } else if (offset < -totalCards / 2) {
    offset += totalCards;
  }
  const isVisible = Math.abs(offset) <= 1;
  const animate = {
    x: `${offset * 50}%`,
    scale: offset === 0 ? 1 : 0.8,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
    },
  };
  return (
    <motion.div
      className="absolute w-4/6 md:w-1/3 h-[100%] md:h-[95%]"
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={animate}
      initial={false}
    >
      <div className="relative w-full h-full shadow-2xl overflow-hidden flex items-center justify-center ">
        <div className="relative md:w-[410px] w-[270px] min-h-[300px] md:min-h-[370px] bg-[#1e1e1e] text-white rounded-xl px-4 py-6 shadow-lg border-l-[3px] border-red-500 flex-shrink-0">
          <div className="md:pl-5 pl-2">
            <Image
              src={card.image}
              alt={card.name}
              width={85}
              height={85}
              className="rounded-full border-2 border-white object-cover mb-2"
            />
            <div>
              <h4 className="text-xl font-semibold">{card.name}</h4>
              <p className="text-sm text-gray-400">
                {card.title} at {card.company}
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              <FaLinkedin className="h-5 w-5 text-blue-700" />
              <FaFacebook className="h-5 w-5 text-sky-700" />
              <FaInstagram className="h-5 w-5 text-pink-800" />
              <FaTwitter className="h-5 w-5 text-blue-400" />
              <FaGithub className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4 "></div>
          {/* Feedback */}
          <p className="text-gray-400 text-md text-justify flex leading-6">
            <FaQuoteLeft className="opacity-70 text-[12px]" />
            <span className="mx-1">{card.feedback}</span>
          </p>

          {/* Quote Icon */}
          <div className="absolute top-4 right-5">
            <FaQuoteRight className="opacity-10 md:text-9xl text-7xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
