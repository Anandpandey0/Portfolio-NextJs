import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero from "../images/hero-icon.svg";
import banner from "../images/banner.svg";
import Footer from "./Footer";
const FrontPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate((prevAnimate) => !prevAnimate);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <div className="w-full lg:w-2/3 mx-auto mt-8 flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl font-bold  p-2 px-10 lg:px-0">
          Hello There{" "}
          <span className={`text-4xl ${animate ? "animate-bounce" : ""}`}>
            👋
          </span>
        </h1>
        <h3 className="text-lg lg:text-xl font-semibold  p-2  px-10 lg:px-0">
          I design and code beautifully simple things, and I love what I do.
        </h3>
        <div className="hero mt-8">
          <Image src={hero} alt="hero-icon" priority />
        </div>
        <div className=" mt-8 w-2/3 flex justify-center items-center">
          <Image src={banner} alt="hero-icon" />
        </div>
      </div>

      <div className="content bg-[#a681cc] w-full text-white h-[80vh] lg:h-[70vh] z-1">
        <div className="p-10 lg:w-2/3  mx-auto lg:p-24 flex flex-col  lg:justify-center">
          <h1 className="text-2xl lg:text-3xl font-semibold lg:w-fit mx-auto">
            Hi, I &apos; m Anand Pandey. Nice to meet you.
          </h1>
          <p className="mt-10 lg:text-lg text-base   ">
            Since beginning my journey as a freelance designer over 11 years
            ago, I &apos; ve done remote work for agencies, consulted for
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I &apos; m quietly
            confident, naturally curious, and perpetually working on improving
            my chops one design problem at a time.
          </p>
        </div>
      </div>
      {/* <div className="experience  w-[90%]   flex-col lg:flex-row  rounded-2xl lg:h-[100vh] mx-auto z-[999]   mt-[-8rem] bg-white  flex">
        <div className="lg:w-1/2   lg:h-full h-fit border-x-2 border-y-2 border-solid border-gray-300 p-16  flex flex-col items-center text-lg rounded-l-xl">
          <div className="logo    ">
            <Image src={weblogo} alt="web developer" />
          </div>
          <h1 className="p-4 text-2xl font-bold">Full Stack Web Developer</h1>
          <p className="lg:p-4 lg:px-8 font-semibold">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <p className=" lg:px-8 font-semibold">
            Skilled React developer with a focus on recreating popular web apps
            with pixel-perfect accuracy.
          </p>
          <div className="lg:p-10 p-6  ">
            <h1 className="text-[#a681cc] text-xl lg:w-2/3 p-1 mx-auto">
              Programming Languages I speak:
            </h1>
            <p className="font-semibold lg:p-4 py-8 px-2">
              React.js , Next.js, TailwindCSS,HTML,CSS, Express.js, Node.js, C++{" "}
            </p>
          </div>
        </div>
        <div className="lg:w-1/2  lg:h-full h-fit border-2 lg:border-y-2 lg:border-r-2 border-solid border-gray-300 p-16  flex flex-col items-center text-lg rounded-r-xl">
          <div className="logo    ">
            <Image src={weblogo} alt="web developer" />
          </div>
          <h1 className="p-4 text-2xl font-bold">Full Stack Web Developer</h1>
          <p className="lg:p-4 lg:px-8 font-semibold">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <p className=" lg:px-8 font-semibold">
            Skilled React developer with a focus on recreating popular web apps
            with pixel-perfect accuracy.
          </p>
          <div className="lg:p-10 p-6  ">
            <h1 className="text-[#a681cc] text-xl lg:w-2/3 p-1 mx-auto">
              Programming Languages I speak:
            </h1>
            <p className="font-semibold lg:p-4 py-8 px-2">
              React.js , Next.js, TailwindCSS,HTML,CSS, Express.js, Node.js, C++{" "}
            </p>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default FrontPage;
