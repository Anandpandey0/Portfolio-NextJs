import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Head from "next/head";
import Image from "next/image";
import React from "react";
import banner from "../../public/banner.svg";

const About = ({ skills }) => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {console.log(skills)}
      <div className="flex flex-wrap gap-2 justify-evenly items-center">
        <div className="h-1/2 lg:h-full lg:w-1/3 lg:border-2 border-solid  border-black p-4 text-xl font-semibold">
          <p>
            Hi Everyone, I am Anand Pandey. I am a final year Btech Computer
            Science student .
          </p>
          <p className="mt-8 text-[#a681cc]">
            &quot; Creating web app clones is not just about copying and pasting
            code, it&apos;s about understanding the essence of the app and
            breathing life into it. As a React developer, I strive to achieve
            this with every project. &quot;
          </p>
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/3 relative">
          <Image src={banner} alt="banner-photo" />
        </div>
      </div>
      <h1 className="text-center text-4xl font-semibold pt-8">
        Professional <span className="text-[#a681cc]">Skilset</span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 my-4 pt-10">
        {/* {skills.map((skill) => (
          <div
            className="border-4 border-solid border-red flex justify-center hover:border-[#915ac8] transform transition duration-400 ease-in-out hover:scale-105"
            key={skill._id}
          >
            <div className="h-[25vh]  w-full p-2 relative ">
              <Image
                src={skill.img}
                alt="skill"
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))} */}
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/getSkills");
//   const skills = await res.json();
//   return {
//     props: {
//       skills,
//     },
//   };
// }
export default About;