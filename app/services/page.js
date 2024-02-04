import Navbar from "@/components/Navbar/Navbar";
import ServicesPage from "@/components/Services/ServicesPage";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ServicesPage />
    </div>
  );
};

export default page;
