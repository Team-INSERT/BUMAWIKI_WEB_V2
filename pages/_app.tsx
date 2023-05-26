import { Aside, Footer, Header } from '@/components'
import React from 'react'
import { CustomToastContainer } from '@/layout/HomeLayout.style'
import '@/styles/globals.css'
import axios from 'axios'
import * as gtag from '@/utils/etc/gtag'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil'
import Script from 'next/script'

axios.defaults.baseURL = 'https://buma.wiki/api'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			suspense: false,
		},
	},
})

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	React.useEffect(() => {
		const handleRouteChange = (url: any) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		router.events.on('hashChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
			router.events.off('hashChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<QueryClientProvider client={queryClient}>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
				}}
			/>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
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
