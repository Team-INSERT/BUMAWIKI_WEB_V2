import * as C from '@/components'
import * as FC from '@/utils'
import * as S from '../../../../layout/version/detail/style'
import * as api from '@/api/getDocs'

import React from 'react'
import { VersionDocsService } from '@/types/version.type'
import { decodeContents } from '@/utils/document/requestContents'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'

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
			<C.Header />
			<S.DocsWrap>
				<C.Board>
					<S.DocsTitleWrap>
						<S.DocsTitleText>{title}</S.DocsTitleText>
					</S.DocsTitleWrap>
					<S.Classify>
						<C.Classify>{FC.typeEditor(docsType)}</C.Classify>
					</S.Classify>
					<S.DocsLine />
					<S.DocsContentsWrap>
						{docs && (
							<S.DocsContentsLoadWrap>
								<S.LastUpdateDate>
									마지막 수정 : {FC.dateParser(docs.thisVersionCreatedAt || '')} | 수정자 : {docs.nickName}
								</S.LastUpdateDate>
								<C.AccodianMenu name="코드 내용" isOpen={false}>
									<S.DocsContents>{docs?.contents.replace(/<br>/gi, '\n').replace(/&\$\^%/gi, '"')}</S.DocsContents>
								</C.AccodianMenu>
								<C.AccodianMenu name="개요">
									<S.DocsContents
										dangerouslySetInnerHTML={{
											__html: FC.documentation(decodeContents(docs.contents)),
										}}></S.DocsContents>
								</C.AccodianMenu>
							</S.DocsContentsLoadWrap>
						)}
					</S.DocsContentsWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.DocsWrap>
			<C.Footer />
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

	const res = await api.getVersionDocs(docs as string)
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
