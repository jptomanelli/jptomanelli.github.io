import React from "react";
import { NextSeo } from "next-seo";

import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="John P. Tomanelli II"
        description="Full-Stack Web Developer"
      />
      <Component {...pageProps} />
    </>
  );
};