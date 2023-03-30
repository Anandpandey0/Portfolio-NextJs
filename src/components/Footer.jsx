import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className=" bg-black flex justify-evenly p-2 text-white mt-10 flex-col lg:flex-row w-full gap-4 items-center">
        <div>Designed and Developed by Anand Pandey</div>
        <div>Copyright@2023</div>
        <div className="flex justify-evenly w-full lg:w-1/5">
          <Link href="https://github.com/Anandpandey0/">
            <BsGithub size="1.5rem" />
          </Link>
          <Link href="https://www.linkedin.com/in/anandpandey0">
            <AiFillLinkedin size="1.5rem" />
          </Link>
          <Link href="mailto: anand.pandey1052@outlook.com">
            <AiFillMail size="1.5rem" />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
