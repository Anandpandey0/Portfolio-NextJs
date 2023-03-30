import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../images/logo.png";
import { CgGitFork } from "react-icons/cg";
import { AiOutlineStar } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <div className=" w-full p-8 flex justify-between items-center ">
      <div className="logo h-full w-24">
        <Image
          src={logo}
          alt="hi"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
      </div>
      <div className="navbar-items hidden lg:flex justify-evenly lg:w-3/5 xl:w-2/5 items-center text-xl flex-wrap gap-1 lg:text-2xl">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact Me</Link>
        <Link href="/">
          <p className="hover:bg-[#a681cc] rounded-full p-2 px-4  flex items-center">
            <CgGitFork size="1.5rem" />
            <AiOutlineStar size="1.5rem" />
          </p>
        </Link>
      </div>
      <div className=" p-2 px-3 lg:hidden hover:bg-[#a681cc] rounded-full ">
        <button onClick={onOpen}>
          <BiMenu size="2rem" />
        </button>
      </div>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Portfolio Website</DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col  h-1/2 justify-evenly text-xl lg:text-2xl">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact Me</Link>
              <Link href="/">
                <p className=" rounded-full py-2 flex items-center w-fit text-sm">
                  <span>Star My Github</span>
                  {/* <CgGitFork size="1.5rem" /> */}
                  <AiOutlineStar size="1.5rem" />
                </p>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
