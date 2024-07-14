import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>sedapoer</title>
        <meta
          name="description"
          content="learn how to cook"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0" />
        <link rel="icon" href= "~/public/assets/logomangkuk.png" type="image/png"></link>
        <link rel="manifest" href="/app.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
