import Contactus from "@/components/Contactus/Contactus";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-screen justify-center items-center">
        <Contactus />
      </div>
    </>
  );
};

export default page;
