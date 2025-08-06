"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-300 px-5 md:px-15 pt-16 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-600 pb-12"
      >
        {/* Brand Overview */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            MNA Web Programming
          </h2>
          <p className="text-sm text-gray-400 leading-6">
            Empowering the next generation of developers. From agency services
            to online learning — we build and teach the web.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/services/web-development"
                className="hover:text-white"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services/mobile-apps" className="hover:text-white">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/services/ui-ux-design" className="hover:text-white">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="/services/devops" className="hover:text-white">
                DevOps & Cloud
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              Email:{" "}
              <a
                href="mailto:mnaofficialbd@gmail.com"
                className="hover:text-white"
              >
                mnaofficialbd@gmail.com
              </a>
            </li>
            <li>Phone: +880 1234 567 890</li>
            <li>Phone: +880 1234 567 890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>

          <div className="flex gap-2 mt-5 text-white text-xl">
            <a
              href="https://facebook.com/mnawebprogrammingbd"
              target="_blank"
              className="text-blue-500 hover:text-cyan-50 border border-white p-1 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com/company/mnawebprogrammingbd"
              target="_blank"
              className="text-blue-400 hover:text-cyan-50 border border-white p-1 rounded-full"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/nurulazam-dev"
              target="_blank"
              className="text-gray-400 hover:text-cyan-50 border border-white p-1 rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/nurulazam_dev"
              target="_blank"
              className="text-pink-400 hover:text-cyan-50 border border-white p-1 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/nurulazam_dev"
              target="_blank"
              className="text-sky-400 hover:text-cyan-50 border border-white p-1 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="https://tiktok.com/@nurulazam_dev"
              target="_blank"
              className="text-white hover:text-pink-500 border border-white p-1 rounded-full"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@mnawebprogrammingbd"
              target="_blank"
              className="text-red-500 hover:text-cyan-50 border border-white p-1 rounded-full"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {currentYear} MNA Web Programming. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
