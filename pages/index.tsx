import React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import HomeLayout from '@/layout/HomeLayout'

const Home = () => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 - 대문`,
		description: `역사의 고서, 부마위키`,
		openGraph: {
			type: 'website',
			title: `부마위키 - 대문`,
			description: `역사의 고서, 부마위키`,
			images: [
				{
					url: '/images/meta-img.png',
				},
			],
		},
	}

	return (
		<>
			<NextSeo {...seoConfig} />
			<HomeLayout />
		</>
	)
}

export default Home
