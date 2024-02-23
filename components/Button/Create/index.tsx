import React from "react";
import * as S from "./style";
import Pen from "assets/pen.svg";

const DocsCreateButton = () => {
  return (
    <S.CreateButtonWrap>
      <S.PenWrap src={Pen} alt="pen" />
      <S.PenText>글쓰기</S.PenText>
    </S.CreateButtonWrap>
  );
};

export default DocsCreateButton;
