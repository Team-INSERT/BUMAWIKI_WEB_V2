import React from 'react'
import { VersionDocsService } from '@/types/version.type'
import { decodeContents } from '@/utils/document/requestContents'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import httpClient from '@/lib/httpClient'
import VersionDetailLayout from '@/layout/VersionDetailLayout'

interface VersionDetailPropsType {
	title: string
	docsType: string
	docs: VersionDocsService
	versionId: string
}

const VersionDetail = (props: VersionDetailPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 문서 기록 - ${props.title}:${props.versionId}`,
		description: `"${props.title}" 문서의 예전 기록 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 문서 기록 - ${props.title}:${props.versionId}`,
			description: `"${props.title}" 문서의 예전 기록 페이지입니다.`,
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
			<VersionDetailLayout {...props} />
		</>
	)
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context

	const res = (await httpClient.version.getByTitle((params?.docs as string) || '')).data
	const versionDocsArray = res.versionDocsResponseDto.reverse()

	return {
		props: {
			title: res.docsResponseDto.title,
			docsType: res.docsResponseDto.docsType,
			docs: versionDocsArray[parseInt(params?.versionId as string)],
			versionId: params?.versionId,
		},
	}
}

export default VersionDetail
