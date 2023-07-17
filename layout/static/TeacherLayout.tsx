import React from "react";
import * as S from "./StaticLayout.style";
import {
  AccodianMenu,
  Aside,
  Board,
  Classify,
  ScrollBtn,
  SubFooter,
} from "@/components";
import Docs from "@/types/docs.type";

interface TeacherLayoutPropsType {
  common_teacher: Docs[];
  major_teacher: Docs[];
  mentor_teacher: Docs[];
}

const TeacherLayout = ({
  common_teacher,
  major_teacher,
  mentor_teacher,
}: TeacherLayoutPropsType) => {
  return (
    <S.StaticWrap>
      <Board>
        <S.StaticTitleWrap>
          <S.StaticTitleText>부마위키:선생님</S.StaticTitleText>
        </S.StaticTitleWrap>
        <S.StaticClassify>
          <Classify>선생님</Classify>
        </S.StaticClassify>
        <S.StaticWarnText>
          ※ 필독! 문서 내 대상을 비하하는 내용을 서술하는 사용자는 부마위키
          이용에 제한을 받을 수 있습니다 ※
        </S.StaticWarnText>
        <S.StaticLine />
        <S.StaticListWrap>
          <AccodianMenu name="인문과목 선생님">
            <S.StaticList>
              {common_teacher.map((teacher: Docs) => (
                <S.StaticListItem key={teacher.id}>
                  <S.StaticLink href={`/docs/${teacher.title}`}>
                    {teacher.title}
                  </S.StaticLink>
                </S.StaticListItem>
              ))}
            </S.StaticList>
          </AccodianMenu>
          <AccodianMenu name="전공과목 선생님">
            <S.StaticList>
              {major_teacher.map((teacher: Docs) => (
                <S.StaticListItem key={teacher.id}>
                  <S.StaticLink
                    href={`/docs/${teacher.title}`}
                    className="link"
                  >
                    {teacher.title}
                  </S.StaticLink>
                </S.StaticListItem>
              ))}
            </S.StaticList>
          </AccodianMenu>
          <AccodianMenu name="멘토 선생님">
            <S.StaticList>
              {mentor_teacher.map((teacher: Docs) => (
                <S.StaticListItem key={teacher.id}>
                  <S.StaticLink
                    href={`/docs/${teacher.title}`}
                    className="link"
                  >
                    {teacher.title}
                  </S.StaticLink>
                </S.StaticListItem>
              ))}
            </S.StaticList>
          </AccodianMenu>
        </S.StaticListWrap>
        <SubFooter />
      </Board>
      <ScrollBtn />
      <Aside />
    </S.StaticWrap>
  );
};

export default TeacherLayout;
