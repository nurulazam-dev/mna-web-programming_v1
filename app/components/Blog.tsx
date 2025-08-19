"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  {
    title: "5 Reasons You Need a Website",
    date: "July 20, 2025",
    summary:
      "Having a professional website boosts your brand, builds trust, and increases sales. Here’s why you should invest in one.",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
  },
  {
    title: "Top 3 UI Trends in 2025",
    date: "July 10, 2025",
    summary:
      "Minimalism, glassmorphism, and micro-interactions are taking over. Learn how to implement them in your projects.",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
  },
  {
    title: "Boost Your SEO in 2025",
    date: "June 28, 2025",
    summary:
      "Search engine optimization keeps evolving. Here’s what you need to know to rank higher and get more organic traffic.",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
  },
  /*   {
    title: "The Power of Personal Branding",
    date: "June 15, 2025",
    summary:
      "Your personal brand can be your greatest asset. Discover strategies to build an authentic and powerful online presence.",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
  },
  {
    title: "AI Tools Every Developer Should Try",
    date: "June 5, 2025",
    summary:
      "Artificial intelligence is revolutionizing development. Here are top AI tools to make your workflow faster and smarter.",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
  },
  {
    title: "How to Design for Accessibility",
    date: "May 22, 2025",
    summary:
      "Designing for accessibility is not just ethical — it’s smart business. Learn best practices to make your site usable for everyone.",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
  }, */
];

const Blog = () => {
  return (
    <section className="py-10 px-6" id="blog">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4 text-center"
        >
          Our Latest <span className="text-cyan-400">Blog Posts</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-6 text-center"
        >
          Stay updated with the latest trends in web development, design, and
          technology. Our blog features insights, tutorials, and tips to help
          you succeed in the digital landscape.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs uppercase text-blue-400 tracking-wide mb-2">
                  {post.date}
                </p>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {post.summary}
                </p>
                <button className="inline-flex items-center text-blue-400 hover:underline text-sm font-medium transition">
                  Read More <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
