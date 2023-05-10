import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </SessionProvider>
  );
}
