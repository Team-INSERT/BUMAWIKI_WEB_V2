import userState from '@/context/userState'
import tokenExpired from '@/lib/token/tokenExpired'
import '@/styles/globals.css'
import { AxiosError } from 'axios'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import * as api from '@/api/user'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot, useSetRecoilState } from 'recoil'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
			suspense: false,
		},
	},
	queryCache: new QueryCache({
		onError: (err) => {
			if (err instanceof AxiosError) {
				const { status } = err
				if (status === 403) return alert('로그인 후 이용 가능한 서비스입니다.')
				if (status === 404) return alert('잘못된 접근입니다.')
				if (status === 500) return alert('서버에 오류가 발생했습니다.')
				return alert('오류가 발생하여 문서를 불러올 수 없습니다.')
			}
		},
	}),
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</QueryClientProvider>
	)
}
