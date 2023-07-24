import * as S from "./style";

import ArrowDown from "assets/arrow_down.svg";
import ArrowRight from "assets/arrow_right.svg";
import React from "react";
import AccodianType from "@/types/accodian.type";

const AccodianMenu = ({ children, name, isOpen }: AccodianType) => {
  const [detail, setDetail] = React.useState<boolean>(true);
  const [opacity, setOpacity] = React.useState<number>(1);

  const onClickDetail = () => {
    setDetail((detail) => !detail);
    if (opacity === 1) return setOpacity(0.4);
    setOpacity(1);
  };

  React.useEffect(() => {
    if (!isOpen && isOpen !== undefined) {
      setOpacity(0.4);
      setDetail((detail) => !detail);
    }
  }, [isOpen]);

  return (
    <S.AccodianWrap>
      <S.AccodianTitleWrap onClick={onClickDetail}>
        <S.AccodianArrow src={detail ? ArrowRight : ArrowDown} alt="" />
        <S.AccodianName opacity={opacity}>{name}</S.AccodianName>
      </S.AccodianTitleWrap>
      <S.AccodianLine />
      <S.AccodianDetail>{detail ? children : ""}</S.AccodianDetail>
    </S.AccodianWrap>
  );
};

export default AccodianMenu;
