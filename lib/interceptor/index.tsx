import { Storage } from "@/lib/storage";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { getAccessToken } from "../httpClient/getAccessToken";
import exception from "@/constants/exception.constants";

export const requestInterceptors = async (
  requestConfig: AxiosRequestConfig,
) => {
  if (!Storage.getItem("access_token") && Storage.getItem("refresh_token"))
    await getAccessToken();

  if (requestConfig.headers) {
    requestConfig.headers.Authorization = Storage.getItem("access_token");
  }

  const urlParams = requestConfig.url?.split("/:") || [];
  if (urlParams.length < 2) return requestConfig;

  const paramParsedUrl = urlParams
    ?.map((paramKey) => {
      return requestConfig.params[paramKey];
    })
    .join("/");

  urlParams?.forEach((paramKey: string) => {
    delete requestConfig.params[paramKey];
  }, {});

  return {
    ...requestConfig,
    url: paramParsedUrl,
  };
};

export const responseInterceptors = async (response: AxiosResponse) => {
  const 권한이없다면 = response.status === exception.status.FORBIDDEN;

  console.log(response);
  // const 로그인하지않은유저라면 =

  if (권한이없다면) await getAccessToken();

  return {
    ...response,
    data: response.data,
  };
};
