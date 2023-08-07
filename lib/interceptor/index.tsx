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
  return {
    ...response,
    data: response.data,
  };
};
