"use client";

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
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded-xl"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            required
            className="w-full border p-3 rounded-xl"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-sky-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
