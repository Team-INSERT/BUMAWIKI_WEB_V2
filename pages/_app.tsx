import { Aside, Footer, Header, Scripts } from "@/components";
import React from "react";
import { CustomToastContainer } from "@/layout/HomeLayout.style";
import "@/styles/globals.css";
import axios from "axios";
import * as gtag from "@/utils/etc/gtag";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import DocsCreateButton from "@/components/Button/Create";

axios.defaults.baseURL = "https://buma.wiki/api";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient}>
      <Scripts />
      <RecoilRoot>
        <CustomToastContainer
          autoClose={1000}
          position={toast.POSITION.TOP_RIGHT}
        />
        <Header />
        <Component {...pageProps} />
        <Aside display="block" />
        <Footer />
        <DocsCreateButton />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
