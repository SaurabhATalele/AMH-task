"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="flex flex-col gap-5 items-center overflow-x-hidden -z-10">
      <div className="w-screen min-h-screen items-center flex flex-col lg:flex-row justify-center lg:gap-20 ">
        <div className="lg:w-1/3 p-10 lg:p-0 flex flex-col items-center gap-5">
          <motion.h1
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: "0px", opacity: 1 }}
            className="text-3xl lg:text-[3rem]  font-bold uppercase"
            style={{ lineHeight: "3.5rem" }}
          >
            Best <span className="text-primary-red">Marketing </span>
            company
          </motion.h1>
          <motion.h3
            initial={{ x: "100px", opacity: 0 }}
            animate={{ x: "0px", opacity: 1 }}
            className="w-full lg:text-[1.4vw] text-lg text-left font-medium"
          >
            #1 Marketing Service Agency in India
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:text-[1.4vw] text-lg "
          >
            If you are looking for the ebest SEO company for your business,
            PageTraffic is the best choice.{" "}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex w-full"
          >
            <button className=" mt-5 py-2 px-6 bg-primary-red text-white rounded-3xl ">
              Get Started
            </button>
          </motion.div>
        </div>
        <Image
          src={"/Hero.svg"}
          width={350}
          height={350}
          alt="Hero"
          className="h-[340px] lg:h-auto"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="lg:text-[1.6rem] text-xl font-bold">
          Our work featured on
        </h1>
        <motion.div
          initial={{
            y: "100%",
          }}
          viewport={{ once: true }}
          whileInView={{
            y: "0",
          }}
          className="-z-10"
        >
          <Image
            src={"/Group 7.png"}
            width={800}
            height={60}
            alt="comp"
            className="block -z-10"
          ></Image>
        </motion.div>
      </div>
      <div className="flex flex-col gap-5 items-center max-w-screen">
        <h1 className="text-xl lg:text-[1.6rem]  font-bold">Our Expertise</h1>
        <p className="  text-sm lg:text-[1.4vw] font-medium">
          Unleashing the Creative Potential of Modern Marketing
        </p>
        <div className="flex flex-col lg:flex-row justify-between gap-10 py-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col justify-center items-center lg:w-56 h-80 py-3 rounded-lg shadow-lg  shadow-slate-300"
          >
            <Image src={"/webd.png"} width={200} height={150} alt="webD" />
            <h1 className="p-8 lg:text-[1rem] font-medium text-center">
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
            <h1 className="p-8 lg:text-[1rem] font-medium text-center">
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
            <h1 className="p-8 lg:text-[1rem] font-medium text-center">
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
            <h1 className="p-8 lg:text-[1rem] font-medium text-center">
              Branding & creative services
            </h1>
            <button className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-light">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      <footer className="w-full flex flex-col lg:flex-row border-t-[1px] border-[#f3f3f3] items-center gap-10  justify-around lg:p-10">
        <div>
          <h2 className="lg:text-[1.6vw] text-[5vw] font-bold text-primary-red">
            {" "}
            Logo
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="flex flex-col gap-5">
            <h2 className="font-medium">COMPANY</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>About Agency</li>
              <li>Our Team</li>
              <li>Showcase</li>
              <li>Blog</li>
              <li>Content Creation</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-medium">SERVICES</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Web Design & Development</li>
              <li>Branding & Creative Services</li>
              <li>Digital Marketing</li>
              <li>E-Commerce</li>
              <li>Content Creation</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-medium">CONTACT</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            src={"/Hero.svg"}
            width={150}
            height={180}
            alt="hero"
            className="hidden lg:block"
          />
        </div>
      </footer>
    </main>
  );
};

export default Home;

// Content Creation
