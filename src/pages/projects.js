import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import hero from "../images/hero-icon.svg";
import { AiFillGithub } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import Head from "next/head";
import { DeviceFrameset } from "react-device-frameset";
// import "react-device-frameset/dist/styles/marvel-devices.min.css";
const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2   gap-4 lg:ml-20  ">
        <div className="border-solid border-2 hover:border-4  cursor-pointer border-[#a681cc]  lg:w-5/6 w-[90%] h-55vh]  p-4 hover:transform hover:scale-105 transition duration-300 block mx-auto">
          <DeviceFrameset device="iPhone 8" color="gold" landscape>
            <div className="h-2/5 w-full p-2">
              <Image src={hero} alt="" className="object-cover mx-auto " />
            </div>
          </DeviceFrameset>
          <h1 className="pt-8 text-center font-semibold text-2xl">
            Project Name
          </h1>
          <p className="p-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            aperiam cumque temporibus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam voluptatem excepturi veniam facilis
            architecto quia obcaecati optio pariatur est perspiciatis. Ea,
            aperiam.
          </p>
          <div className="flex items-center justify-center gap-10 w-full flex-wrap">
            <button className="flex items-center bg-[#a681cc] p-2 px-4 text-white hover:bg-[#9662cb] ">
              <AiFillGithub size="1.5rem" className="mx-2" /> Github
            </button>
            <button className="flex items-center bg-[#a681cc] p-2 px-4 text-white hover:bg-[#9662cb]">
              <BsDisplay size="1.5rem" className="mx-2" /> Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
