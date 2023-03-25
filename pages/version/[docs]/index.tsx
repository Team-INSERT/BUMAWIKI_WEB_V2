import * as C from '@/components'
import * as api from '@/api/getDocs'
import * as FC from '@/utils'
import * as S from '../../docs/style'
import * as V from '../style'

import React from 'react'
import { VersionDocs } from '@/types/version.type'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'

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
			<C.Header />
			<S.DocsWrap>
				<C.Board>
					<S.DocsTitleWrap>
						<S.DocsTitleText>문서 수정 기록 : {docsName}</S.DocsTitleText>
					</S.DocsTitleWrap>
					<S.DocsLine />
					<S.DocsContentsWrap>
						<ul>
							{version?.map((ver: VersionDocs, index: number) => (
								<V.VersionList key={index}>
									<span>
										<V.VersionLink href={`/version/${docsName}/detail/${index}`}>{FC.dateParser(ver.thisVersionCreatedAt)}</V.VersionLink>
									</span>
									<span>
										작성자 : <V.VersionLink href={`/user/${ver.userId}`}>{ver.nickName}</V.VersionLink>
									</span>
								</V.VersionList>
							))}
						</ul>
					</S.DocsContentsWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.DocsWrap>
			<C.Footer />
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

	const res = await api.getVersionDocs(params?.docs as string)

	return {
		props: {
			version: res.versionDocsResponseDto,
			docsName: params?.docs,
		},
	}
}

export default Version
