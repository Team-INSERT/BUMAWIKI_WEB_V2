import React from "react";
import {
  AccodianMenu,
  Aside,
  Board,
  Classify,
  ScrollBtn,
  SubFooter,
} from "@/components";
import Docs from "@/types/docs.type";
import * as S from "./StaticLayout.style";
import * as util from "@/utils";
import { decodeContents } from "@/utils/document/requestContents";

interface StudentLayoutPropsType {
  docs: Docs[];
  years: number[];
}

const StudentLayout = ({ docs, years }: StudentLayoutPropsType) => {
  return (
    <S.StaticWrap>
      <Board>
        <S.StaticTitleWrap>
          <S.StaticTitleText>부마위키:학생</S.StaticTitleText>
        </S.StaticTitleWrap>
        <S.StaticClassify>
          <Classify>학생</Classify>
        </S.StaticClassify>
        <S.StaticLine />
        <S.StaticListWrap>
          {years.map((year) => (
            <AccodianMenu name={`${year}년도 입학생`} key={year} isOpen>
              {docs.map((student: Docs) => (
                <S.StaticList key={student.id}>
                  {student.enroll === year && (
                    <S.StaticListItem>
                      <S.StaticLink href={`/docs/${student.title}`}>
                        {student.title}
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

export default StudentLayout;
