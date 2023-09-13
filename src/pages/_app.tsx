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
        <title>Aprendiendo DeFi | Web3</title>
        <meta name="description" content="Aprende DeFi facil y divertido" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} className={inter.className} />
      </main>
    </>
  );
};

export default MyApp;
