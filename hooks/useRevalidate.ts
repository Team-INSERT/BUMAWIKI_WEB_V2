import config from "@/config";
import httpClient from "@/lib/httpClient";

const useRevalidate = (docsName: string) => {
  const revalidate = (title = docsName) => {
    httpClient.revalidateDocs
      .post({ title }, { baseURL: `${config.clientUrl}/api/revalidate-docs` })
      .then(() => {
        httpClient.revalidateVersion
          .post(
            { title },
            { baseURL: `${config.clientUrl}/api/revalidate-version` },
          )
          .then(() => {
            httpClient.revalidateUpdate
              .post(
                { title },
                { baseURL: `${config.clientUrl}/api/revalidate-update` },
              )
              .then(() => {
                window.location.href = `/docs/${title}`;
              });
          });
      });
  };

  return { revalidate };
};

export default useRevalidate;
