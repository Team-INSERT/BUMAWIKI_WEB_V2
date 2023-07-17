import useLoginMutation from "@/features/LoginFeature";
import useConfig from "@/hooks/useConfig";
import { NextSeo } from "next-seo";

import React from "react";

const OAuth = () => {
  const { seoConfig } = useConfig({
    title: `부마위키 - 로그인`,
    description: `부마위키의 로그인페이지입니다.`,
  });

  const { mutate } = useLoginMutation();

  React.useEffect(() => {
    mutate();
  }, [mutate]);

  return <NextSeo {...seoConfig} />;
};

export default OAuth;
