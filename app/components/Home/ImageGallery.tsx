"use client";

import Image from "next/image";

export default function ImageGallery() {
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

      <div className="grid grid-cols-4 gap-2">
        <Image
          src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg"
          alt=""
          height={300}
          width={400}
          className="col-span-2 w-full h-full object-cover"
        />
        <Image
          src="https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg"
          alt=""
          height={300}
          width={400}
          className="w-full h-full object-cover"
        />
        <Image
          src="https://img.freepik.com/free-photo/sea-beach_1203-3516.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          height={300}
          width={400}
          className="w-full h-full object-cover row-span-2"
        />
        <Image
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          alt=""
          height={300}
          width={400}
          className="w-full h-full object-cover"
        />
        <Image
          src="https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg"
          alt=""
          height={300}
          width={400}
          className="col-span-2 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
