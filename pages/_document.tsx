import Document from 'next/document'
import { RecoilRoot } from 'recoil'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) =>
						sheet.collectStyles(
							<RecoilRoot>
								<App {...props} />
							</RecoilRoot>
						),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<RecoilRoot>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</RecoilRoot>
				),
			}
		} finally {
			sheet.seal()
		}
	}
}
