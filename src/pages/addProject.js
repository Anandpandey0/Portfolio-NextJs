import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import handleAddProject from "../../utils/addProject";

const AddProject = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [github, setGithub] = useState("");
  const [demo, setDemo] = useState("");

  const addProjectHandler = async (e) => {
    e.preventDefault();
    await handleAddProject(name, img, desc, github, demo);
    console.log("Added");
    setName("");
    setImg("");
    setDesc("");
    setGithub("");
    setDemo("");
  };

  return (
    <>
      <Header />

      <div className="form lg:w-1/2 border-2 border-solid border-[#a681cc] mx-auto  ">
        <form className="flex flex-col p-2 gap-5" onSubmit={addProjectHandler}>
          <div className="flex justify-evenly">
            <label htmlFor="Name" className="font-semibold text-2xl w-1/2 ">
              Name:
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-1/2 border-2 border-solid border-black p-2"
            />
          </div>
          <div className="flex justify-evenly">
            <label htmlFor="img" className="font-semibold text-2xl w-1/2">
              Image-Url:
            </label>
            <input
              type="text"
              onChange={(e) => setImg(e.target.value)}
              value={img}
              className="w-1/2  border-2 border-solid border-black p-2 "
            />
          </div>
          <div className="flex justify-evenly">
            <label htmlFor="Name" className="font-semibold text-2xl w-1/2">
              Description:
            </label>
            <input
              type="text"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              className="w-1/2  border-2 border-solid border-black p-2"
            />
          </div>
          <div className="flex justify-evenly">
            <label htmlFor="Name" className="font-semibold text-2xl w-1/2">
              Github-Url:
            </label>
            <input
              type="text"
              onChange={(e) => setGithub(e.target.value)}
              value={github}
              className="w-1/2  border-2 border-solid border-black p-2"
            />
          </div>
          <div className="flex justify-evenly">
            <label htmlFor="Name" className="font-semibold text-2xl w-1/2">
              Demo-Url:
            </label>
            <input
              type="text"
              onChange={(e) => setDemo(e.target.value)}
              value={demo}
              className="w-1/2  border-2 border-solid border-black p-2"
            />
          </div>
          <button type="submit" className="bg-[#a681cc] w-1/2 mx-auto p-2">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProject;
