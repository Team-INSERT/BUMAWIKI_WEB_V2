import * as S from "./style";

import github from "assets/github.svg";
import instagram from "assets/instagram.svg";
import React from "react";

const Footer = () => {
  return (
    <S.FooterWrap>
      <S.FooterLogoWrap>
        <S.FooterLink
          href="https://github.com/Original-Gimchi"
          target="_blank"
          rel="noreferrer"
        >
          <S.FooterLogo src={github} alt="" />
        </S.FooterLink>
        <S.FooterLine />
        <S.FooterLink
          href="https://www.instagram.com/#"
          target="_blank"
          rel="noreferrer"
        >
          <S.FooterLogo src={instagram} alt="" />
        </S.FooterLink>
      </S.FooterLogoWrap>
      <S.FooterInfoWrap>
        <S.FooterInfo>
          buma.wiki | bumawiki@gmail.com | BSSM | TEAM OG | PROJECT BUMAWIKI
        </S.FooterInfo>
      </S.FooterInfoWrap>
      <S.FooterInfoWrap>
        <S.FooterInfo>
          1393, Garak-daero, Gangseo-gu, Busan, Republic of Korea
        </S.FooterInfo>
      </S.FooterInfoWrap>
    </S.FooterWrap>
  );
};

export default Footer;
