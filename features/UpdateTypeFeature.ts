import useRevalidate from "@/hooks/useRevalidate";
import httpClient from "@/lib/httpClient";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";

const useUpdateTypeMutation = (id: number, docsType: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { revalidate } = useRevalidate("");

  return useMutation(
    async () => (await httpClient.updateType.put({ id, docsType })).data,
    {
      onSuccess: (data) => {
        const { title } = data;
        Swal.fire({
          icon: "success",
          title: "문서 타입 변경 완료!",
        });
        queryClient.invalidateQueries("lastModifiedDocs");
        revalidate(title);
        router.push(`/docs/${title}`);
      },
    },
  );
};

export default useUpdateTypeMutation;
