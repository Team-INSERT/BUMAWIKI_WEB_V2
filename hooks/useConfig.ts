import { NextSeoProps } from 'next-seo'

const useConfig = (title: string, description: string) => {
	const seoConfig: NextSeoProps = {
		title,
		description,
		openGraph: {
			type: 'website',
			title,
			description,
			images: [
				{
					url: '/images/meta-img.png',
				},
			],
		},
	}
	return { seoConfig }
}

export default useConfig
