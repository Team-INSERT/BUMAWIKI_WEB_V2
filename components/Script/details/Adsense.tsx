import React from "react";
import Script from "next/script";

const Adsense = () => {
  return (
    <>
      <Script async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4588218925754368"
              crossOrigin="anonymous"></Script>
    </>
  );
};

export default Adsense;