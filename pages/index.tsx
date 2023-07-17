import React from "react";
import { NextSeo } from "next-seo";
import HomeLayout from "@/layout/HomeLayout";
import useConfig from "@/hooks/useConfig";

const Home = () => {
  const { seoConfig } = useConfig({
    title: "부마위키 - 대문",
    description: "역사의 고서, 부마위키",
  });

  return (
    <>
      <NextSeo {...seoConfig} />
      <HomeLayout />
    </>
  );
};

export default Home;
