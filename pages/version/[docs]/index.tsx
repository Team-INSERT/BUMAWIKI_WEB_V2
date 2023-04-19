import React from 'react'
import { VersionDocs } from '@/types/version.type'
import { GetServerSideProps, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import httpClient from '@/lib/httpClient'
import VersionLayout from '@/layout/version/VersionLayout'
import useConfig from '@/hooks/useConfig'

interface SingleDocsPropsType {
	version: VersionDocs[]
	docsName: string
	index: number
}

const Version = (props: SingleDocsPropsType) => {
	const { seoConfig } = useConfig({
		title: `부마위키 문서 수정 기록 - ${props.docsName}`,
		description: `"${props.docsName}" 문서의 수정 기록 페이지입니다.`,
	})

	return (
		<>
			<NextSeo {...seoConfig} />
			<VersionLayout {...props} />
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { params } = context

	const res = (await httpClient.version.getByTitle(`${params?.docs as string}/version`)).data

	return {
		props: {
			version: res.versionDocsResponseDto,
			docsName: params?.docs,
			index: res.versionDocsResponseDto.length,
		},
	}
}

export default Version
