import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
import Image from "next/image";
import loginbanner from "../../public/loginbanner.png";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Head from "next/head";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  // if (session) {
  //   return (
  //     <div>
  //       <p>Welcome , {session.user.name}</p>
  //       <button onClick={() => signOut()}>Sign Out</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <p>You are not logged in</p>
  //       <button onClick={() => signIn("google")}>Sign In</button>
  //     </div>
  //   );
  // }
  const signInHandler = async () => {
    await signIn("google");
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-[#a681cc] h-[80vh] flex  flex-col lg:flex-row overflow-x-clip">
        <div className="lg:w-1/2 text-white text-center my-auto">
          <h1 className="text-3xl mt-20 font-semibold">
            Welcome!! {session && session.user.name}
          </h1>
          {!session ? (
            <button
              onClick={signInHandler}
              className="mt-10 p-2 text-2xl bg-white text-black px-8 border-solid border-2 border-green-500 rounded-full flex items-center mx-auto gap-4 hover:bg-gray-300"
            >
              <FcGoogle />
              Sign in with Google
            </button>
          ) : (
            <button
              onClick={() => signOut()}
              className="mt-10 p-2 text-2xl bg-white text-black px-8 border-solid border-2 border-green-500 rounded-full flex items-center mx-auto gap-4 hover:bg-gray-300"
            >
              Sign Out
            </button>
          )}
        </div>
        <div className="lg:w-1/2 h-full">
          <div className="w-full  relative h-full">
            <Image src={loginbanner} alt="" fill className="object-contain " />
          </div>
        </div>
      </div>
      <div className="flex mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default Login;
