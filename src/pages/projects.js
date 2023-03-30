import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

import { AiFillGithub, AiFillLock } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import lock from "../../public/lock.png";

import Head from "next/head";

import Link from "next/link";
import Timer from "@/components/timer";
// import "react-device-frameset/dist/styles/marvel-devices.min.css";
const Projects = ({ projects }) => {
  function trimText(text) {
    // Split the text into an array of words
    const words = text.split(" ");

    // Check if the number of words is greater than 40
    if (words.length > 80) {
      // Trim the array to 40 words
      words.splice(40, words.length - 80);

      // Join the array back into a string with ellipsis
      text = words.join(" ") + "...";
    }

    // Return the trimmed text
    return text;
  }
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
        {/* {projects.map((project) => (
          <div
            className="border-solid border-4  cursor-pointer hover:border-[#a681cc]  lg:w-5/6 w-[90%] h-fit md:h-[100vh]  p-4   block mx-auto shadow-md transition-shadow duration-500 hover:shadow-lg relative"
            key={project._id}
          >
            <div className="h-[30vh]  w-full p-2 relative ">
              <Image
                src={project.img}
                alt=""
                fill
                className="object-contain "
              />
            </div>

            <h1 className="pt-8 mb-4 text-center font-semibold text-2xl">
              {project.name}
            </h1>
            <div className="flex flex-col h-1/2  justify-between  ">
              <p className="p-2 text-center xl:h-[328px]">
                {project.desc.length > 500
                  ? project.desc.substring(0, 400) + "..."
                  : project.desc}
              </p>
              <div className="flex items-center justify-center gap-10 w-full flex-wrap mb-8">
                <Link href={project.github} target="_blank">
                  <button className="flex items-center bg-[#a681cc] p-2 px-4 text-white hover:bg-[#9662cb] ">
                    <AiFillGithub size="1.5rem" className="mx-2" /> Github
                  </button>
                </Link>
                <Link href={project.demo} target="_blank">
                  <button className="flex items-center bg-[#a681cc] p-2 px-4 text-white hover:bg-[#9662cb]">
                    <BsDisplay size="1.5rem" className="mx-2" /> Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))} */}

        <div className="border-solid border-4  cursor-pointer hover:border-[#a681cc]  lg:w-5/6 w-[90%] h-fit md:h-[100vh]  p-4   block mx-auto shadow-md transition-shadow duration-500 hover:shadow-lg relative">
          <div className="h-[25vh]  w-full p-2 relative ">
            <Image src={lock} alt="" fill className="object-contain " />
          </div>

          <h1 className="pt-8 mb-4 text-center font-semibold text-2xl">
            Notion Clone
          </h1>
          <div className="flex flex-col h-1/2  justify-between  ">
            <p className="p-2 text-center xl:h-[328px]">
              Notion clone web app is a productivity tool that allows users to
              sign in and sign up, take notes, manage to-do lists, and add new
              pages. The app features a sleek and intuitive user interface that
              &apos; s easy to navigate. The app &apos;s note-taking feature
              enables users to quickly jot down their thoughts and ideas, while
              the add tasks functionality helps them manage their tasks
              efficiently. Overall, Notion clone web app is a versatile and
              powerful productivity tool that can help users stay organized and
              improve their productivity.
            </p>
            <div className="flex items-center justify-center gap-10 w-full flex-wrap mb-2">
              <button
                className="flex items-center bg-black p-2 px-4 text-white cursor-pointer  "
                disabled
              >
                <AiFillLock size="1.5rem" className="mx-2" /> Github
              </button>

              <button
                className="flex items-center bg-black p-2 px-4 text-white cursor-pointer "
                disabled
              >
                <AiFillLock size="1.5rem" className="mx-2" /> Demo
              </button>
            </div>
            <div className="text-[#a681cc]  text-center mt-2 font-bold text-xl">
              Will Open After:
            </div>
            <Timer endTime="April, 15, 2023" />
          </div>
        </div>
        <div className="border-solid border-4  cursor-pointer hover:border-[#a681cc]  lg:w-5/6 w-[90%] h-fit md:h-[100vh]  p-4   block mx-auto shadow-md transition-shadow duration-500 hover:shadow-lg relative">
          <div className="h-[25vh]  w-full p-2 relative ">
            <Image src={lock} alt="" fill className="object-contain " />
          </div>

          <h1 className="pt-8 mb-4 text-center font-semibold text-2xl">
            Messenger Clone
          </h1>
          <div className="flex flex-col h-1/2  justify-between  ">
            <p className="p-2 text-center xl:h-[328px]">
              My Messenger Clone project, built in Next.js without the use of
              external libraries, is a functional and visually appealing chat
              application that replicates popular messaging platforms. Featuring
              real-time messaging, image and file sharing, and chat history, the
              project is built from scratch using only core technologies . The
              application delivers a smooth user experience and loads quickly,
              even with high traffic volumes. It has a functionality to show if
              the reviever is currently online or not
            </p>
            <div className="flex items-center justify-center gap-10 w-full flex-wrap mb-2">
              <button
                className="flex items-center bg-black p-2 px-4 text-white cursor-pointer  "
                disabled
              >
                <AiFillLock size="1.5rem" className="mx-2" /> Github
              </button>

              <button
                className="flex items-center bg-black p-2 px-4 text-white cursor-pointer "
                disabled
              >
                <AiFillLock size="1.5rem" className="mx-2" /> Demo
              </button>
            </div>
            <div className="text-[#a681cc]  text-center mt-2 font-bold text-xl">
              Will Open After:
            </div>
            <Timer endTime="April, 30, 2023" />
          </div>
        </div>
      </div>
    </div>
  );
};
// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/getProjects");
//   const projects = await res.json();
//   return {
//     props: {
//       projects,
//     },
//   };
// }
export default Projects;