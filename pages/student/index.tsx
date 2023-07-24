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

interface StudentFrameType {
  name: "freshman" | "sophomore" | "senior";
  classNames: Array<number>;
  gradeNumber: number;
}

const grades: Array<StudentFrameType> = [
  { name: "freshman", gradeNumber: 1, classNames: [1, 2, 3, 4] },
  { name: "sophomore", gradeNumber: 2, classNames: [1, 2, 3, 4] },
  { name: "senior", gradeNumber: 3, classNames: [1, 2, 3, 4] },
];

export async function getStaticProps() {
  const student = (await httpClient.static.getByTitle("student")).data;
  const years = util.getAllYear();

  const gradeFrame = {
    freshman: "",
    sophomore: "",
    senior: "",
  };

  for (const grade of grades) {
    const { name, classNames, gradeNumber }: StudentFrameType = {
      name: grade.name,
      classNames: grade.classNames,
      gradeNumber: grade.gradeNumber,
    };

    let frameContents = "";

    for (const frame of classNames) {
      frameContents += await util.includeFrame(
        `틀:${gradeNumber}학년${frame}반`,
      );
    }
    gradeFrame[name] = frameContents;
  }

  const { freshman, sophomore, senior } = gradeFrame;

  return {
    props: {
      docs: student,
      years,
      freshman,
      sophomore,
      senior,
    },
  };
}

export default Student;
