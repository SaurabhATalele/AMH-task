"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <motion.div className="w-screen flex justify-between  fixed px-10 py-5 backdrop-blur-lg ">
        <h2 className="lg:text-[1.6vw] text-xl font-bold text-primary-red">
          {" "}
          Logo
        </h2>
        {!visible && (
          <Image
            width={24}
            height={24}
            src={"https://img.icons8.com/ios/100/menu--v1.png"}
            alt="menu--v1"
            className="lg:hidden"
            onClick={() => setVisible(!visible)}
          />
        )}
        {visible && (
          <Image
            width={24}
            height={16}
            src={"https://img.icons8.com/ios/100/delete-sign.png"}
            alt="menu--v1"
            className="lg:hidden"
            onClick={() => setVisible(!visible)}
          />
        )}
        <ul className="lg:flex lg:flex-row gap-5 flex-col hidden">
          <li className="text-gray-700 hover:text-primary-red cursor-pointer hover:border-b-2 border-primary-red active:border-primary-red active:border-b-2">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-gray-700 hover:text-primary-red cursor-pointer hover:border-b-2 border-primary-red active:border-primary-red active:border-b-2">
            <Link href={"/about"}>About us</Link>
          </li>
          <li className="text-gray-700 hover:text-primary-red cursor-pointer hover:border-b-2 border-primary-red active:border-primary-red active:border-b-2">
            <Link href={"/blogs"}>Blogs</Link>
          </li>
          <li className="text-gray-700 hover:text-primary-red cursor-pointer hover:border-b-2 border-primary-red active:border-primary-red active:border-b-2">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="text-gray-700 hover:text-primary-red cursor-pointer hover:border-b-2 border-primary-red active:border-primary-red active:border-b-2">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </motion.div>
      <ul
        className={`lg:hidden gap-5 flex-col flex ${
          visible ? "w-56" : "w-0"
        } bg-white z-10 pt-20 items-center overflow-hidden fixed min-h-screen  transition-all duration-700`}
      >
        <li className="text-gray-700 hover:text-primary-red cursor-pointer hover:border-b-2 border-primary-red active:border-primary-red active:border-b-2">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="text-gray-700 hover:text-primary-red cursor-pointer hover:border-b-2 border-primary-red active:border-primary-red active:border-b-2">
          <Link href={"/about"}>About us</Link>
        </li>
        <li className="text-gray-700 hover:text-primary-red cursor-pointer hover:border-b-2 border-primary-red active:border-primary-red active:border-b-2">
          <Link href={"/blogs"}>Blogs</Link>
        </li>
        <li className="text-gray-700 hover:text-primary-red cursor-pointer hover:border-b-2 border-primary-red active:border-primary-red active:border-b-2">
          <Link href={"/services"}>Services</Link>
        </li>
        <li className="text-gray-700 hover:text-primary-red cursor-pointer hover:border-b-2 border-primary-red active:border-primary-red active:border-b-2">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
