import React from "react";
import * as util from "@/utils";
import * as S from "./MyPageLayout.style";
import { AccodianMenu, Aside, Board, Classify, ScrollBtn } from "@/components";
import Contributors from "@/types/contributors.type";
import UserType from "@/types/user.type";
import MyPageLikeType from "@/types/like.type";

interface MyPageLayoutPropsType {
  isLogined: boolean;
  user: UserType;
  likes: MyPageLikeType[];
  mutate: () => void;
}

const MyPageLayout = ({
  isLogined,
  user,
  likes,
  mutate,
}: MyPageLayoutPropsType) => {
  return (
    <S.MyPageWrap>
      <Board>
        <S.MyPageTitleWrap>
          <S.MyPageTitleText>{`마이페이지 : ${
            user.nickName || "비로그인 유저"
          }`}</S.MyPageTitleText>
        </S.MyPageTitleWrap>
        <Classify>{user.authority}</Classify>
        <S.MyPageLine />
        <S.MyPageInfoWrap>
          <AccodianMenu name={"정보"}>
            <S.MyPageInfoLoadWrap>
              {isLogined && (
                <>
                  이름은 {user.nickName}이며, 부마위키의{" "}
                  {user.authority === "ADMIN" && "관리자"}
                  {user.authority === "BANNED" && "읽기전용 사용자"}
                  {user.authority === "USER" && "사용자"} 중 한 명이다.
                  <S.LogoutText onClick={mutate}>로그아웃</S.LogoutText>
                </>
              )}
            </S.MyPageInfoLoadWrap>
          </AccodianMenu>
          {isLogined && (
            <>
              <AccodianMenu name={"좋아요 목록"}>
                <S.ContributeWrap>
                  <span>이 유저가 좋아요를 누른 문서의 정보들이다.</span>
                  <S.ContributeList>
                    {likes.map((like) => (
                      <S.ContributeListText key={like.title}>
                        <S.ContributeLink href={`/docs/${like.title}`}>
                          {like.title} ({util.typeEditor(like.docsType)})
                        </S.ContributeLink>
                      </S.ContributeListText>
                    ))}
                  </S.ContributeList>
                </S.ContributeWrap>
              </AccodianMenu>
              <AccodianMenu name={"기여한 문서"}>
                <S.ContributeWrap>
                  <span>이 유저가 기여한 문서의 정보들이다.</span>
                  <S.ContributeList>
                    {user.contributeDocs.map((docs: Contributors) => (
                      <S.ContributeListText key={docs.createTime}>
                        문서명 :&nbsp;
                        <S.ContributeLink href={`/docs/${docs.title}`}>
                          {docs.title}
                        </S.ContributeLink>
                        <br />
                        수정일 : {util.dateParser(docs.createTime)}
                      </S.ContributeListText>
                    ))}
                  </S.ContributeList>
                </S.ContributeWrap>
              </AccodianMenu>
            </>
          )}
        </S.MyPageInfoWrap>
      </Board>
      <ScrollBtn />
      <Aside />
    </S.MyPageWrap>
  );
};

export default MyPageLayout;
