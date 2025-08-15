"use client";

import { motion } from "framer-motion";

interface StylistCustomButtonProps {
  customLink: string;
  buttonText: string;
}

const StylistCustomButton = ({
  customLink,
  buttonText,
}: StylistCustomButtonProps) => {
  const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <div className="flex items-center justify-center font-sans">
      <style>{customCss}</style>
      <motion.a href={customLink}>
        <button className="cursor-pointer relative inline-flex items-center justify-center p-[1.5px] bg-gray-300 dark:bg-black rounded-full overflow-hidden group">
          <div
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(from var(--angle), transparent 30%, red, transparent 80%)",
              animation: "shimmer-spin 2.5s linear infinite",
            }}
          />
          <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-5 py-2 text-gray-900 dark:text-white bg-white dark:bg-gradient-to-r from-violet-700 to-blue-800 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors duration-300">
            {buttonText}
          </span>
        </button>
      </motion.a>
    </div>
  );
};

export default StylistCustomButton;
