import { Storage } from "@/lib/storage";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const requestInterceptors = async (
  requestConfig: AxiosRequestConfig,
) => {
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
