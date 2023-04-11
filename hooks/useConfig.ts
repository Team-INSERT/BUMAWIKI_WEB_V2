import { NextSeoProps } from 'next-seo'

interface UseConfigPropsType {
	title: string
	description: string
}

const useConfig = ({ title, description }: UseConfigPropsType) => {
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
