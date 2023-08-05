import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Aprendiendo DeFi | Web3</title>
        <meta
          name="description"
          content="Aprende DeFi facil y divertido"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
