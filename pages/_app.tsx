import { Aside, Footer, Header, ScrollBtn } from '@/components'
import '@/styles/globals.css'
import axios from 'axios'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

axios.defaults.baseURL = 'http://bumawiki.kro.kr/api'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
			suspense: false,
		},
	},
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<Header />
				<Component {...pageProps}>
					<ScrollBtn />
					<Aside />
				</Component>
				<Footer />
			</RecoilRoot>
		</QueryClientProvider>
	)
}
