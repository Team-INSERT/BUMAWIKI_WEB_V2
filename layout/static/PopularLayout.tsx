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

interface PopularLayoutPropsType {
  docs: Docs[];
}

const PopularLayout = ({ docs }: PopularLayoutPropsType) => {
  return (
    <S.StaticWrap>
      <Board>
        <S.StaticTitleWrap>
          <S.StaticTitleText>부마위키:인기 문서</S.StaticTitleText>
        </S.StaticTitleWrap>
        <S.StaticClassify>
          <Classify>인기 문서</Classify>
        </S.StaticClassify>
        <S.StaticLine />
        <S.StaticListWrap>
          <AccodianMenu name="인기 문서">
            <S.StaticList>
              {docs.map((docs: Docs, index) => (
                <S.StaticListItem key={docs.id}>
                  <S.StaticLink href={`/docs/${docs.title}`}>
                    {index + 1}위 - {docs.title} (좋아요 {docs.thumbsUpsCounts}
                    개)
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

export default PopularLayout;
