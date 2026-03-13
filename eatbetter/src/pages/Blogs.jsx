import React from "react";

const blogs = [
  {
    title: "Healthy Snacking Tips",
    image: "/Chatpata/DesiMasala.webp",
    description:
      "Discover how healthy snacks can improve your daily lifestyle."
  },
  {
    title: "Benefits of Millet Snacks",
    image: "/Chatpata/Pudina-Punch.webp",
    description:
      "Millet snacks are nutritious, gluten-free and rich in fiber."
  },
  {
    title: "Protein Laddoos for Energy",
    image: "/Protein/1-f.webp",
    description:
      "Protein laddoos give natural energy without refined sugar."
  }
];

function Blogs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Our Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {blogs.map((blog, index) => (

          <div
            key={index}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
          >

            <div className="h-56 flex items-center justify-center bg-gray-50">
              <img
                src={blog.image}
                alt={blog.title}
                className="max-h-full object-contain"
              />
            </div>

            <div className="p-6">

              <h2 className="text-xl font-semibold mb-3">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {blog.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Blogs;