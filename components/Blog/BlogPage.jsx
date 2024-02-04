import React from "react";
import blogs from "./Blogs";
import Image from "next/image";
const BlogPage = () => {
  return (
    <div className="mt-20 p-5 flex flex-col gap-5 flex-wrap justify-center lg:flex-row">
      {blogs.map((blog) => {
        return (
          <div
            key={blog.id}
            className="relative w-full rounded-md shadow-md object-cover flex flex-col items-center h-80 lg:w-80 "
          >
            <Image
              src={blog.featuredImage}
              width={300}
              height={300}
              alt="blogimg"
              className="object-cover h-1/2 w-full"
            />
            <h1 className="p-3 text-lg font-medium">{blog.title}</h1>
            <p className="w-full h-40 px-5 text-sm text-slate-400 truncate">
              {blog.description}
            </p>
            <button className="px-5 py-1 rounded-full bg-primary-red text-white absolute bottom-5">
              Read more
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
