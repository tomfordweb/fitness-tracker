import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../component/layout";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
