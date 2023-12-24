import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Passionate web developer showcasing innovative projects and skills. Explore my portfolio to see how I bring ideas to life.My self Anand Pandey. I am good at cloning web apps
          "
        />
      </Head>
      {/* there1 */}
      <SessionProvider session={session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
      <Analytics />
    </>
  );
}
