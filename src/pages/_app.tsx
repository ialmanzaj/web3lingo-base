import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="2699f40b-0888-4871-b219-e8ceb4b6ddfb"
        ></script>
        <title>Web3lingo | Educacion en web3 facil y divertido</title>
        <meta name="description" content="Aprende web3 facil y divertid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} className={inter.className} />
      </main>
    </>
  );
};

export default MyApp;
