import React from "react";
import * as S from "./UserLayout.style";
import * as util from "@/utils";
import {
  AccodianMenu,
  Aside,
  Authority,
  Board,
  Classify,
  ScrollBtn,
} from "@/components";
import UserType from "@/types/user.type";
import Contributors from "@/types/contributors.type";
import authority from "@/constants/authority.constants";

interface UserLayoutPropsType {
  user: UserType;
  myuser: UserType;
}

const UserLayout = ({ user, myuser }: UserLayoutPropsType) => {
  return (
    <S.UserWrap>
      <Board>
        <S.UserTitleWrap>
          <S.UserTitleText>유저 : {user.nickName}</S.UserTitleText>
        </S.UserTitleWrap>
        <Classify>{user.authority}</Classify>
        <S.UserLine />
        <S.UserInfoWrap>
          <AccodianMenu name="정보">
            <S.UserInfoLoadWrap>
              {myuser.authority === authority.ADMIN && (
                <Authority email={user.email} />
              )}
              <span>
                이름은 {user.nickName}이며, 부마위키의
                {user.authority === authority.ADMIN && " 관리자"}
                {user.authority === authority.READONLY && " 읽기전용 사용자"}
                {user.authority === authority.USER && " 사용자"}중 한 명이다.
              </span>
            </S.UserInfoLoadWrap>
          </AccodianMenu>
          <AccodianMenu name="기여한 문서">
            <S.ContributeWrap>
              <span>이 유저가 기여한 문서의 정보들이다.</span>
              <S.ContributeList>
                {user.contributeDocs.map((docs: Contributors) => (
                  <span key={docs.createTime}>
                    문서명 :&nbsp;
                    <S.ContributeLink href={`/docs/${docs.title}`}>
                      {docs.title}
                    </S.ContributeLink>
                    <br />
                    수정 날짜 : {util.dateParser(docs.createTime)}
                  </span>
                ))}
              </S.ContributeList>
            </S.ContributeWrap>
          </AccodianMenu>
          <S.UserLine />
        </S.UserInfoWrap>
      </Board>
      <ScrollBtn />
      <Aside />
    </S.UserWrap>
  );
};

export default UserLayout;
