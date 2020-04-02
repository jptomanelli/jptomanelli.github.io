import React from "react";
import { NextSeo } from "next-seo";

export default function MyApp({ Component, pageProps }) {
  if (pageProps.css && pageProps.css.includes("mapbox")) {
    require("../mapboxStyle.css");
  } 
  
  if (pageProps.css && pageProps.css.includes("default"))  {
    require("../styles.css");
  }

  return (
    <>
      <NextSeo
        title="John P. Tomanelli II"
        description="Full-Stack Web Developer"
      />
      <Component {...pageProps} />
    </>
  );
}
