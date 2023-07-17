import * as S from "../layout/HomeLayout.style";

import React from "react";
import { NextSeo } from "next-seo";
import { Aside, Board, ScrollBtn } from "@/components";
import useConfig from "@/hooks/useConfig";

const NotFound = () => {
  const { seoConfig } = useConfig({
    title: "부마위키 - 404 Not Found",
    description: "오류가 발생했습니다.",
  });

  return (
    <>
      <NextSeo {...seoConfig} />
      <S.NotFoundWrap>
        <Board>
          <S.NotFound>404 Not Found</S.NotFound>
        </Board>
        <Aside />
        <ScrollBtn />
      </S.NotFoundWrap>
    </>
  );
};

export default NotFound;
