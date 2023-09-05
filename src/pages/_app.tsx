import { type AppType } from "next/dist/shared/lib/utils";
import { Theme } from "@radix-ui/themes";
import Head from "next/head";

import "~/styles/globals.css";
import "@radix-ui/themes/styles.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Aprendiendo DeFi | Web3</title>
        <meta name="description" content="Aprende DeFi facil y divertido" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Theme
        appearance="dark"
        accentColor="cyan"
        grayColor="gray"
        panelBackground="solid"
        scaling="100%"
        radius="full"
      >
        <Component {...pageProps} />
      </Theme>
    </>
  );
};

export default MyApp;
