import React from "react";
import DocsPropsType from "@/types/static/docs.props.type";
import { NextSeo } from "next-seo";
import httpClient from "@/lib/httpClient";
import useConfig from "@/hooks/useConfig";
import PopularLayout from "@/layout/static/PopularLayout";

const Frame = (props: DocsPropsType) => {
  const { seoConfig } = useConfig({
    title: "부마위키 - 틀",
    description: "부마위키의 모든 틀을 담은 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...seoConfig} />
      <PopularLayout {...props} />
    </>
  );
};

export async function getServerSideProps() {
  const popular = (await httpClient.static.getByTitle("popular")).data;

  return {
    props: {
      docs: popular,
    },
  };
}

export default Frame;
