import * as util from '@/utils'
import * as S from '../../../../layout/version/detail/style'
import * as getApi from '@/api/getDocs'

import React, { PropsWithChildren } from 'react'
import { VersionDocsService } from '@/types/version.type'
import { decodeContents } from '@/utils/document/requestContents'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'

interface VersionDetailPropsType {
	title: string
	docsType: string
	docs: VersionDocsService
	versionId: string
}

const VersionDetail = ({ title, docsType, docs, versionId }: VersionDetailPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 문서 기록 - ${title}:${versionId}`,
		description: `"${title}" 문서의 예전 기록 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 문서 기록 - ${title}:${versionId}`,
			description: `"${title}" 문서의 예전 기록 페이지입니다.`,
			images: [
				{
					url: '/images/meta-img.png',
				},
			],
		},
	}

	return (
		<div>
			<NextSeo {...seoConfig} />
			<S.DocsWrap>
				<Board>
					<S.DocsTitleWrap>
						<S.DocsTitleText>{title}</S.DocsTitleText>
					</S.DocsTitleWrap>
					<S.Classify>
						<Classify>{util.typeEditor(docsType)}</Classify>
					</S.Classify>
					<S.DocsLine />
					<S.DocsContentsWrap>
						{docs && (
							<S.DocsContentsLoadWrap>
								<S.LastUpdateDate>
									마지막 수정 : {util.dateParser(docs.thisVersionCreatedAt || '')} | 수정자 : {docs.nickName}
								</S.LastUpdateDate>
								<AccodianMenu name="코드 내용" isOpen={false}>
									<S.DocsContents>{docs?.contents.replace(/<br>/gi, '\n').replace(/&\$\^%/gi, '"')}</S.DocsContents>
								</AccodianMenu>
								<AccodianMenu name="개요">
									<S.DocsContents
										dangerouslySetInnerHTML={{
											__html: util.documentation(decodeContents(docs.contents)),
										}}></S.DocsContents>
								</AccodianMenu>
							</S.DocsContentsLoadWrap>
						)}
					</S.DocsContentsWrap>
					<SubFooter />
				</Board>
				<ScrollBtn />
				<Aside />
			</S.DocsWrap>
		</div>
	)
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const versionId = context?.params?.versionId
	const docs = context?.params?.docs

	const res = await getApi.getVersionDocs(docs as string)
	const versionDocsArray = res.versionDocsResponseDto.reverse()

	return {
		props: {
			title: res.docsResponseDto.title,
			docsType: res.docsResponseDto.docsType,
			docs: versionDocsArray[parseInt(versionId as string)],
			versionId,
		},
	}
}

export default VersionDetail
