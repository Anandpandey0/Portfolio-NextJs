import Head from "next/head";

import Header from "../components/Header";
import FrontPage from "../components/FrontPage";

// import "rc-scrollbar/assets/index.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anand Pandey Portfolio</title>
        <meta
          name="description"
          content="Anand Pandey Portfolio website deployed on vercel Software Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FrontPage />
      {/* <main className="text-red-500">Portfolio Website</main> */}
    </>
  );
}
