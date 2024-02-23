import * as S from "./style";

import Create from "assets/create.svg";
import Search from "assets/search.svg";
import React from "react";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import { headerInitState } from "@/state/header.state";
import { toast } from "react-toastify";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const { isLogined } = useUser();
  const router = useRouter();

  const navigateSearchResult = () => {
    if (search.length) return router.push(`/search/${search}`);
    return toast.error("검색할 문서명을 입력해주세요!");
  };

  return (
    <S.HeaderWrap>
      <S.HeaderLink href={"/"}>
        <S.HeaderLogo
          src="/images/logo.png"
          width="1000"
          height="1000"
          alt="logo"
        />
      </S.HeaderLink>
      <S.HeaderSectionWrap>
        {headerInitState.map((header) => (
          <S.HeaderSection href={header.href} key={header.title}>
            <S.HeaderSectionLogo src={header.image} alt="" />
            <S.HeaderSectionText>{header.title}</S.HeaderSectionText>
          </S.HeaderSection>
        ))}
      </S.HeaderSectionWrap>
      <S.HeaderSearchWrap>
        <S.HeaderSearchForm onSubmit={(e) => e.preventDefault()}>
          <S.HeaderSearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <S.HeaderSearchButton onClick={navigateSearchResult}>
            <S.HeaderSearchLogo src={Search} alt="" />
          </S.HeaderSearchButton>
        </S.HeaderSearchForm>
        <S.HeaderLoginWrap>
          {isLogined ? (
            <S.HeaderMypageText href="/mypage">내정보</S.HeaderMypageText>
          ) : (
            <S.HeaderLoginText href="https://auth.bssm.kro.kr/oauth?clientId=22fb2e30&redirectURI=https://buma.wiki/oauth">
              로그인
            </S.HeaderLoginText>
          )}
        </S.HeaderLoginWrap>
      </S.HeaderSearchWrap>
    </S.HeaderWrap>
  );
};

export default Header;
