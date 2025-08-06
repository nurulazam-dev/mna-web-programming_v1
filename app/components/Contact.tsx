"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "We will contact you soon.",
      toast: true,
      position: "top-end",
      timer: 3000,
      showConfirmButton: false,
    });
    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="py-10 px-4 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Let’s Talk</h2>
          <p className="text-gray-600 mb-4 text-justify">
            We specialize in Web Design, Web Development, App Development, and
            provide an Online Web Development Teaching Platform. Whether you
            need a service or just want to connect — we’re here for you.
          </p>

          <div className="space-y-4">
            {/* Phone Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-primary" />
                <span className="text-gray-700 text-md">
                  +880 1234 567 890 (Support)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-primary" />
                <span className="text-gray-700 text-md">
                  +880 1234 567 891 (Business)
                </span>
              </div>
            </div>

            {/* Email Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Email
              </h3>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary" />
                <span className="text-gray-700 text-md">
                  mnawebprogramming@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary" />
                <span className="text-gray-700 text-md">
                  nurulazam.dev@gmail.com
                </span>
              </div>
            </div>

            {/* Address Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Office Address
              </h3>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-gray-700 text-md">
                  MNA Web Programming House, Raozan, Chattogram, Bangladesh.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-8 shadow-xl rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FaUser className="absolute top-3.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="hover:bg-slate-800 text-white px-6 py-3 rounded bg-sky-600 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
