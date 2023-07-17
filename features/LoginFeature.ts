import httpClient from "@/lib/httpClient";
import { Storage } from "@/lib/storage";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const onLogin = async (authCode: string) => {
  return (
    await httpClient.oauth.post(
      {},
      {
        headers: { authCode },
      },
    )
  ).data;
};

const useLoginMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(() => onLogin(router.asPath.replace("/oauth?code=", "")), {
    onSuccess: (data) => {
      Storage.setItem("access_token", data.accessToken);
      Storage.setItem("refresh_token", data.refreshToken);
      window.history.go(-2);
      window.location.reload();
      queryClient.invalidateQueries("getUser");
    },
    onError: () => {
      toast.error("LOGIN ERROR!");
      window.history.go(-2);
    },
  });
};

export default useLoginMutation;
