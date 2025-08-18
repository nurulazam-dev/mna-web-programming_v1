import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "https://source.unsplash.com/random/800x600?technology",
  "https://source.unsplash.com/random/800x601?web",
  "https://source.unsplash.com/random/800x602?coding",
  "https://source.unsplash.com/random/800x603?developer",
  "https://source.unsplash.com/random/800x604?design",
  "https://source.unsplash.com/random/800x605?programming",
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImage = () => setSelectedImage(null);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Explore Our <span className="text-blue-600">Gallery</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          A glimpse into our projects, activities, and creative journey.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg group"
            onClick={() => openImage(index)}
          >
            <Image
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">View</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={closeImage}
            >
              <X />
            </button>
            <button
              className="absolute left-6 text-white text-4xl"
              onClick={prevImage}
            >
              <ChevronLeft />
            </button>
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Preview"
              className="max-h-[80%] max-w-[90%] rounded-xl shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <button
              className="absolute right-6 text-white text-4xl"
              onClick={nextImage}
            >
              <ChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
