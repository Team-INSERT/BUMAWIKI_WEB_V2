import * as docs from '@/api/getDocs'
import React from 'react'
import DocsPropsType from '@/types/static/docs.props.type'
import { NextSeo, NextSeoProps } from 'next-seo'
import FrameLayout from '@/layout/FrameLayout'
import httpClient from '@/lib/httpClient'

const Frame = (props: DocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 - 틀`,
		description: `부마위키의 모든 틀을 담은 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 - 틀`,
			description: `부마위키의 모든 틀을 담은 페이지입니다.`,
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
			<FrameLayout {...props} />
		</>
	)
}

export async function getStaticProps() {
	const frame = (await httpClient.static.getByTitle('frame')).data

	return {
		props: {
			docs: frame,
		},
	}
}

export default Frame
