import Aboutus from "@/components/Aboutus";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen flex justify-center overflow-x-hidden">
        <Aboutus />
      </div>
    </>
  );
};

export default page;
