const posts = [
  {
    title: "5 Reasons You Need a Website",
    date: "July 20, 2025",
    summary:
      "Having a professional website boosts your brand and sales. Here’s why you should build one.",
  },
  {
    title: "Top 3 UI Trends in 2025",
    date: "July 10, 2025",
    summary:
      "Minimalism, glassmorphism and micro-interactions are taking over. Learn how to use them.",
  },
];

const Blog = () => {
  return (
    <section className="py-20 px-4 bg-sky-100" id="blog">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {posts?.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post?.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{post?.date}</p>
              <p className="text-gray-700">{post?.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
