import * as util from "@/utils";

import React from "react";
import DocsPropsType from "@/types/static/docs.props.type";
import { NextSeo } from "next-seo";
import httpClient from "@/lib/httpClient";
import StudentLayout from "@/layout/static/StudentLayout";
import useConfig from "@/hooks/useConfig";

interface StudentPropsType extends DocsPropsType {
  freshman: string;
  sophomore: string;
  senior: string;
}

const Student = (props: StudentPropsType) => {
  const { seoConfig } = useConfig({
    title: "부마위키 - 학생",
    description: "교내의 모든 학생을 담은 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...seoConfig} />
      <StudentLayout {...props} />
    </>
  );
};

export async function getStaticProps() {
  const student = (await httpClient.static.getByTitle("student")).data;
  const years = util.getAllYear();
  return {
    props: {
      docs: student,
      years,
    },
  };
}

export default Student;
