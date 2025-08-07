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
    <section id="contact" className="py-10 px-4">
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
            <div className="flex items-center gap-2">
              <div className="text-3xl bg-blue-100 p-3 rounded-full mr-2">
                <FaPhoneAlt className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone:</h3>

                <h5 className="text-gray-700 text-md5">
                  +880 1234 567 890 (Support)
                </h5>
                <h5 className="text-gray-700 text-md">
                  +880 1234 567 891 (Business)
                </h5>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center gap-2">
              <div className="text-3xl bg-blue-100 p-3 rounded-full mr-2">
                <FaEnvelope className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email:</h3>
                <h6 className="text-gray-700 text-md">
                  mnawebprogramming@gmail.com
                </h6>
                <h6 className="text-gray-700 text-md">
                  nurulazam.dev@gmail.com
                </h6>
              </div>
            </div>

            {/* Address Section */}
            <div className="flex items-center gap-2">
              <div className="text-3xl bg-blue-100 p-3 rounded-full mr-2">
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Location:
                </h3>
                <h6 className="text-gray-700 text-md">
                  MNA Web Programming House, Raozan, Chattogram, Bangladesh.
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FaUser className="absolute top-4.5 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-4.5 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
