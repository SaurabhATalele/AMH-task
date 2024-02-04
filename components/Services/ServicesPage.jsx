"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div className="flex p-5 pt-20 justify-center">
      <div className="flex flex-col lg:flex-row justify-between gap-10 py-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col justify-center items-center lg:w-56 py-3 rounded-lg shadow-lg  shadow-slate-300"
        >
          <Image src={"/webd.png"} width={200} height={200} alt="webD" />
          <h1 className="p-8 text-sm lg:text-[1.4vw] font-medium text-center">
            Web Design and Development
          </h1>
          <button className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-light">
            Learn More
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col justify-center items-center lg:w-56 py-3 rounded-lg shadow-lg  shadow-slate-300"
        >
          <Image src={"/dm.png"} width={130} height={122} alt="webD" />
          <h1 className="p-8 lg:text-[1.4vw] font-medium text-center">
            Digital Marketing services
          </h1>
          <button className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-light">
            Learn More
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col justify-center items-center lg:w-56 py-3 rounded-lg shadow-lg  shadow-slate-300"
        >
          <Image src={"/ec.png"} width={140} height={200} alt="webD" />
          <h1 className="p-8 lg:text-[1.4vw] font-medium text-center">
            E-commerce Services
          </h1>
          <button className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-light">
            Learn More
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col justify-center items-center lg:w-56 py-3 rounded-lg shadow-lg  shadow-slate-300"
        >
          <Image src={"/branding.png"} width={130} height={200} alt="webD" />
          <h1 className="p-8 lg:text-[1.4vw] font-medium text-center">
            Branding & creative services
          </h1>
          <button className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-light">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
