import Image from "next/image";

const posts = [
  {
    title: "5 Reasons You Need a Website",
    date: "July 20, 2025",
    summary:
      "Having a professional website boosts your brand and sales. Here’s why you should build one.",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
  },
  {
    title: "Top 3 UI Trends in 2025",
    date: "July 10, 2025",
    summary:
      "Minimalism, glassmorphism and micro-interactions are taking over. Learn how to use them.",
    image:
      "https://nurulazam-dev.web.app/assets/dimand_web_development-xR-iwXVL.jpeg",
  },
];

const Blog = () => {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-sky-100 to-white"
      id="blog"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          📚 Our Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {posts?.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={post?.image}
                alt={post?.title}
                className="w-full object-cover"
                width={500}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <button className="text-blue-600 font-medium hover:underline transition">
                  Read More →
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
