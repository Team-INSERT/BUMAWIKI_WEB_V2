import React from 'react'
import { VersionDocs } from '@/types/version.type'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import httpClient from '@/lib/httpClient'
import VersionLayout from '@/layout/VersionLayout'

interface SingleDocsPropsType {
	version: VersionDocs[]
	docsName: string
}

const Version = (props: SingleDocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 문서 수정 기록 - ${props.docsName}`,
		description: `"${props.docsName}" 문서의 수정 기록 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 문서 수정 기록 - ${props.docsName}`,
			description: `"${props.docsName}" 문서의 수정 기록 페이지입니다.`,
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
			<VersionLayout {...props} />
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

	return {
		props: {
			version: res.versionDocsResponseDto,
			docsName: params?.docs,
		},
	}
}

export default Version
