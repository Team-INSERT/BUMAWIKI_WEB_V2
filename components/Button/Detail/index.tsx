import * as S from "./style";

import React from "react";
import { useRouter } from "next/router";
import { CustomToastContainer } from "@/layout/HomeLayout.style";
import { toast } from "react-toastify";
import authority from "@/constants/authority.constants";
import useUpdateTitleMutation from "@/features/UpdateTitleFeature";
import useUpdateTypeMutation from "@/features/UpdateTypeFeature";
import useUser from "@/hooks/useUser";
import useDeleteDocsMutation from "@/features/DeleteDocsFeature";
import Swal from "sweetalert2";

interface DetailBtnProps {
  docsId: number;
}

const DetailBtn = ({ docsId }: DetailBtnProps) => {
  const router = useRouter();
  const { user, isLogined } = useUser();
  const [docsName, setDocsName] = React.useState("");
  const [docsType, setDocsType] = React.useState("");

  const updateTitle = useUpdateTitleMutation(docsName);
  const updateType = useUpdateTypeMutation(docsId, docsType);
  const deleteDocs = useDeleteDocsMutation(docsId);

  const onChangeTitle = async () => {
    if (!docsName) return toast.error("내용이 없습니다.");
    updateTitle.mutate();
  };

  const onChangeType = async () => {
    if (!docsType) return toast.error("내용이 없습니다.");
    updateType.mutate();
  };

  const onDeleteDocs = () => {
    Swal.fire({
      title: "문서를 정말 삭제하시겠습니까?",
      showDenyButton: true,
      confirmButtonText: "네",
      denyButtonText: "아니오",
    }).then((result) => {
      if (result.isConfirmed) deleteDocs.mutate();
    });
  };

  const onNavigatePage = (type: string) => {
    if (type === "VERSION")
      return router.push(`/version/${router.query.title}`);
    if (type === "UPDATE" && !isLogined)
      return toast.error("로그인 후 편집하실 수 있습니다!");
    router.push(`/update/${router.query.title}`);
  };

  return (
    <S.DetailButtonWrap>
      <CustomToastContainer
        autoClose={1000}
        position={toast.POSITION.TOP_RIGHT}
      />
      {user.authority === authority.ADMIN ? (
        <>
          <S.DetailInput
            value={docsType}
            onChange={(e) => setDocsType(e.target.value)}
          />
          <S.DetailWrap onClick={onChangeType}>
            <S.DetailButton>
              <S.DetailText>타입변경</S.DetailText>
            </S.DetailButton>
          </S.DetailWrap>
          <S.DetailWrap onClick={onDeleteDocs}>
            <S.DetailButton>
              <S.DetailText>삭제</S.DetailText>
            </S.DetailButton>
          </S.DetailWrap>
          <S.DetailInput
            value={docsName}
            onChange={(e) => setDocsName(e.target.value)}
          />
          <S.DetailWrap onClick={onChangeTitle}>
            <S.DetailButton>
              <S.DetailText>변경</S.DetailText>
            </S.DetailButton>
          </S.DetailWrap>
        </>
      ) : (
        ""
      )}
      <S.DetailLinkWrap onClick={() => onNavigatePage("UPDATE")}>
        <S.DetailButton>
          <S.DetailText>편집</S.DetailText>
        </S.DetailButton>
      </S.DetailLinkWrap>
      <S.DetailLinkWrap onClick={() => onNavigatePage("VERSION")}>
        <S.DetailButton>
          <S.DetailText>기록</S.DetailText>
        </S.DetailButton>
      </S.DetailLinkWrap>
    </S.DetailButtonWrap>
  );
};

export default DetailBtn;
