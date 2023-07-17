import {
  AccodianMenu,
  Aside,
  Board,
  Classify,
  ScrollBtn,
  SubFooter,
} from "@/components";
import Docs from "@/types/docs.type";
import React from "react";
import * as S from "./StaticLayout.style";

interface AccidentLayoutPropsType {
  years: number[];
  docs: Docs[];
}

const AccidentLayout = ({ years, docs }: AccidentLayoutPropsType) => {
  return (
    <S.StaticWrap>
      <Board>
        <S.StaticTitleWrap>
          <S.StaticTitleText>부마위키:사건/사고</S.StaticTitleText>
        </S.StaticTitleWrap>
        <S.StaticClassify>
          <Classify>사건/사고</Classify>
        </S.StaticClassify>
        <S.StaticLine />
        <S.StaticListWrap>
          {years.map((year) => (
            <AccodianMenu name={`${year}년 사건/사고`} key={year} isOpen={true}>
              {docs.map((accident: Docs) => (
                <S.StaticList key={accident.id}>
                  {accident.enroll === year && (
                    <S.StaticListItem>
                      <S.StaticLink href={`/docs/${accident.title}`}>
                        {accident.title}
                      </S.StaticLink>
                    </S.StaticListItem>
                  )}
                </S.StaticList>
              ))}
            </AccodianMenu>
          ))}
        </S.StaticListWrap>
        <SubFooter />
      </Board>
      <ScrollBtn />
      <Aside />
    </S.StaticWrap>
  );
};

export default AccidentLayout;
