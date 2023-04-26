import React from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import httpClient from '@/lib/httpClient'
import useConfig from '@/hooks/useConfig'
import VersionDetailLayout from '@/layout/version/VersionDetailLayout'
import { VersionDetailPropsType } from '@/types/versionDetail.type'

const VersionDetail = ({ versionId, different }: VersionDetailPropsType) => {
	const { seoConfig } = useConfig({
		title: `부마위키 문서 기록 - ${different.title}[${versionId}]`,
		description: `"${different.title}" 문서의 예전 기록 페이지입니다.`,
	})

	return (
		<>
			<NextSeo {...seoConfig} />
			<VersionDetailLayout different={different} versionId={versionId} />
		</>
	)
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context

	const different = (await httpClient.different.getByTitle(`${params?.docs}/different/${params?.versionId}`)).data

	return {
		props: {
			versionId: params?.versionId,
			different,
		},
	}
}

export default VersionDetail
