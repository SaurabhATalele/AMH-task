import BlogPage from "@/components/Blog/BlogPage";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col">
      <Navbar />
      <BlogPage />
    </div>
  );
};

export default page;
