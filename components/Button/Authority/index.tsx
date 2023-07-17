import * as S from "./style";

import React from "react";
import authority from "@/constants/authority.constants";
import useAuthorityMutation from "@/features/AuthorityFeature";

interface AuthorityPropsType {
  email: string;
}

const Authority = ({ email }: AuthorityPropsType) => {
  const { mutate } = useAuthorityMutation();

  const onClickAuthorityUser = (authority: string) => {
    if (window.confirm(`유저 권한을 ${authority}(으)로 변경하시겠습니까?`))
      return mutate({ email, authority });
  };

  return (
    <S.AuthorityButtonWrap>
      <S.AuthorityLinkWrap
        onClick={() => onClickAuthorityUser(authority.ADMIN)}
      >
        <S.AuthorityButton>
          <S.AuthorityText>{authority.ADMIN}</S.AuthorityText>
        </S.AuthorityButton>
      </S.AuthorityLinkWrap>
      <S.AuthorityLinkWrap onClick={() => onClickAuthorityUser(authority.USER)}>
        <S.AuthorityButton>
          <S.AuthorityText>{authority.USER}</S.AuthorityText>
        </S.AuthorityButton>
      </S.AuthorityLinkWrap>
      <S.AuthorityLinkWrap
        onClick={() => onClickAuthorityUser(authority.READONLY)}
      >
        <S.AuthorityButton>
          <S.AuthorityText>{authority.READONLY}</S.AuthorityText>
        </S.AuthorityButton>
      </S.AuthorityLinkWrap>
    </S.AuthorityButtonWrap>
  );
};

export default Authority;
