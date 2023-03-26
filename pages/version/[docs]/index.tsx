import * as getApi from '@/api/getDocs'
import * as util from '@/utils'
import * as S from '@/layout/docs/style'
import * as V from '@/layout/version/style'

import React from 'react'
import { VersionDocs } from '@/types/version.type'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import { Aside, Board, ScrollBtn, SubFooter } from '@/components'

interface SingleDocsPropsType {
	version: VersionDocs[]
	docsName: string
}

const Version = ({ version, docsName }: SingleDocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 문서 수정 기록 - ${docsName}`,
		description: `"${docsName}" 문서의 수정 기록 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 문서 수정 기록 - ${docsName}`,
			description: `"${docsName}" 문서의 수정 기록 페이지입니다.`,
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
			<S.DocsWrap>
				<Board>
					<S.DocsTitleWrap>
						<S.DocsTitleText>문서 수정 기록 : {docsName}</S.DocsTitleText>
					</S.DocsTitleWrap>
					<S.DocsLine />
					<S.DocsContentsWrap>
						<ul>
							{version?.map((ver: VersionDocs, index: number) => (
								<V.VersionList key={index}>
									<span>
										<V.VersionLink href={`/version/${docsName}/detail/${index}`}>{util.dateParser(ver.thisVersionCreatedAt)}</V.VersionLink>
									</span>
									<span>
										작성자 : <V.VersionLink href={`/user/${ver.userId}`}>{ver.nickName}</V.VersionLink>
									</span>
								</V.VersionList>
							))}
						</ul>
					</S.DocsContentsWrap>
					<SubFooter />
				</Board>
				<ScrollBtn />
				<Aside />
			</S.DocsWrap>
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

	const res = await getApi.getVersionDocs(params?.docs as string)

	return {
		props: {
			version: res.versionDocsResponseDto,
			docsName: params?.docs,
		},
	}
}

export default Version
