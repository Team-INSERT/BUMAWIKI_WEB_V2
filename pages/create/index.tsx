import * as util from "@/utils";

import React from "react";
import CreateDocsType from "@/types/create.type";
import FrameType from "@/types/frame.type";
import sizeInitState from "@/state/size.state";
import { useRouter } from "next/router";
import createInitState from "@/state/create.state";
import { NextSeo } from "next-seo";
import useUser from "@/hooks/useUser";
import createFormInitState from "@/state/formtype.state";
import CreateLayout from "@/layout/CreateLayout";
import { IFileTypes } from "@/components/DragDrop";
import { toast } from "react-toastify";
import useConfig from "@/hooks/useConfig";
import useCreateDocsMutation from "@/features/CreateDocsFeature";

const Create = () => {
  const router = useRouter();
  const { query } = router;
  const years = util.getAllYear();
  const { seoConfig } = useConfig({
    title: "부마위키 - 문서생성",
    description: "부마위키 문서생성 페이지입니다.",
  });

  const [parentFiles, setParentFiles] = React.useState<IFileTypes[]>([]);
  const [size, setSize] = React.useState<FrameType>(sizeInitState);
  const [docs, setDocs] = React.useState<CreateDocsType>({
    title: (query.name as string) || "",
    ...createInitState,
  });
  const { user: userInfo, isLogined } = useUser();

  const { mutate } = useCreateDocsMutation();

  const onClickCreateDocs = () => {
    const { title, enroll, docsType } = docs;
    const isInvalid =
      title.includes("?") ||
      title.includes("\\") ||
      title.includes("//") ||
      title.includes('"');

    if (isInvalid) return toast.error("문서명에 특수문자를 넣을 수 없습니다.");
    if (!isLogined) return toast.error("로그인 후 이용 가능한 서비스입니다.");
    if (!enroll) return toast.error("연도를 선택해주세요!");
    if (!title) return toast.error("문서의 이름을 정해주세요!");
    if (!docsType) return toast.error("문서의 분류를 선택해주세요!");

    mutate({ ...docs, files: parentFiles });
  };

  const makeFrame = () => {
    const frame = `<틀>
	<틀제목>제목삽입</틀제목>
	${`<행>
		${"<열>내용삽입</열>".repeat(size.row)}
	</행>`.repeat(size.column)}
</틀>`;

    setDocs({ ...docs, contents: frame });
  };

  const changeDocsType = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLOptionElement
    >,
  ) => {
    const type = e.target.id;
    const value = e.target.value;
    if (value !== "on")
      return setDocs({
        ...docs,
        docsType: type,
        title: docs.title.replace("틀:", ""),
        contents: "",
      });
    if (type === "FRAME")
      return setDocs({ ...docs, docsType: type, title: `틀:${docs.title}` });
    return setDocs({
      ...docs,
      docsType: type,
      title: docs.title.replace("틀:", ""),
      contents: "",
    });
  };

  return (
    <>
      <NextSeo {...seoConfig} />
      <CreateLayout
        userInfo={userInfo}
        setDocs={setDocs}
        docs={docs}
        createForm={createFormInitState}
        years={years}
        getFiles={(file: IFileTypes[]) => setParentFiles(file)}
        size={size}
        setSize={setSize}
        makeFrame={makeFrame}
        onClickCreateDocs={onClickCreateDocs}
        changeDocsType={changeDocsType}
      />
    </>
  );
};

export default Create;
