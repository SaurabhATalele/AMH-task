import Link from "next/link";
import React from "react";

const Aboutus = () => {
  return (
    <div className="flex w-3/4 flex-col  items-center gap-10 p-5 mt-20 text-justify overflow-x-hidden ">
      <h1 className="font-bold text-2xl text-primary-red">ABOUT US</h1>
      <p className="text-md">
        Welcome to{" "}
        <span className="text-primary-red font-medium">DigiMarket</span>, your
        premier destination for cutting-edge digital marketing solutions.
        <br />
        <br />
        At <span className="text-primary-red font-medium">DigiMarket</span>, we
        are passionate about helping businesses thrive in the digital landscape.
        With a team of seasoned experts in digital marketing, branding, and web
        development, we are committed to delivering exceptional results tailored
        to your unique needs.
      </p>

      <h1 className="text-xl font-bold text-primary-red">Our mission</h1>
      <p>
        <span className="text-primary-red font-medium">
          {" "}
          Our mission is simple:
        </span>{" "}
        to empower businesses of all sizes to achieve their digital marketing
        goals and exceed their expectations. We believe in the transformative
        power of digital marketing to drive growth, foster meaningful
        connections, and elevate brands to new heights.
      </p>

      <h1 className="text-center text-xl font-bold text-primary-red ">
        What Sets Us Apart
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap w-full justify-between gap-4">
        <div className="flex gap-5 flex-col text-justify lg:w-1/3 shadow-md rounded-lg px-10 py-5 shadow-slate-400">
          <h1 className="text-lg font-medium text-primary-red text-center">
            Strategic Approach
          </h1>
          <p className="text-sm text-gray-500">
            We take a strategic approach to digital marketing, leveraging
            data-driven insights and industry best practices to craft customized
            solutions that deliver tangible results.
          </p>
        </div>
        <div className="flex gap-5 flex-col text-justify lg:w-1/3 shadow-md rounded-lg px-10 py-5 shadow-slate-400">
          <h1 className="text-lg font-medium text-primary-red text-center">
            Innovative Solutions
          </h1>
          <p className="text-sm text-gray-500">
            Our team stays ahead of the curve with the latest trends and
            technologies in digital marketing, ensuring that our clients benefit
            from innovative solutions that drive engagement and conversions.
          </p>
        </div>
        <div className="flex gap-5 flex-col text-justify lg:w-1/3 shadow-md rounded-lg px-10 py-5 shadow-slate-400">
          <h1 className="text-lg font-medium text-primary-red text-center">
            Collaborative Partnership
          </h1>
          <p className="text-sm text-gray-500">
            We believe in the power of collaboration and work closely with our
            clients to understand their objectives, preferences, and challenges.
            Your success is our top priority, and we are dedicated to building
            long-term partnerships based on trust, transparency, and mutual
            respect.
          </p>
        </div>
      </div>
      <Link
        href={"/"}
        className="px-5 py-1 bg-primary-red text-white rounded-full"
      >
        Home
      </Link>
    </div>
  );
};

export default Aboutus;
