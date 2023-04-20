import { Aside, Footer, Header, ScrollBtn } from '@/components'
import { CustomToastContainer } from '@/layout/HomeLayout.style'
import '@/styles/globals.css'
import axios from 'axios'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil'

axios.defaults.baseURL = 'http://bumawiki.kro.kr/api'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
			suspense: false,
		},
	},
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<CustomToastContainer autoClose={1000} position={toast.POSITION.TOP_RIGHT} />
				<Header />
				<Component {...pageProps} />
				<Aside isMobile="true" />
				<Footer />
			</RecoilRoot>
		</QueryClientProvider>
	)
}
