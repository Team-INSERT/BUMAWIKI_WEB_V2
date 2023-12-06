import React from "react";
import Adblock from "@/components/Script/details/Adblock";
import Adsense from "@/components/Script/details/Adsense";
import Analytics from "@/components/Script/details/Analytics";

const Scripts = () => {
  return (
    <>
      <Adblock />
      <Adsense />
      <Analytics />
    </>
  );
};

export default Scripts;