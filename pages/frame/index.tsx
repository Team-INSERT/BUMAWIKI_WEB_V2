import React from 'react'
import DocsPropsType from '@/types/static/docs.props.type'
import { NextSeo } from 'next-seo'
import FrameLayout from '@/layout/FrameLayout'
import httpClient from '@/lib/httpClient'
import useConfig from '@/hooks/useConfig'

const Frame = (props: DocsPropsType) => {
	const { seoConfig } = useConfig({
		title: '부마위키 - 틀',
		description: '부마위키의 모든 틀을 담은 페이지입니다.',
	})

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
