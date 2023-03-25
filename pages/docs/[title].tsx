import * as C from '@/components'
import * as FC from '@/utils'
import * as S from '../../layout/docs/style'
import * as api from '@/api/getDocs'

import React from 'react'
import Docs from '@/types/docs.type'
import { decodeContents } from '@/utils/document/requestContents'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'

interface SingleDocsPropsType {
	docs: Docs
}

const Doc = ({ docs }: SingleDocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 - ${docs.title} (${FC.typeEditor(docs.docsType)})`,
		description: `${docs.contents.slice(0, 16)}...`,
		openGraph: {
			type: 'website',
			title: `부마위키 - ${docs.title} (${FC.typeEditor(docs.docsType)})`,
			description: `${docs.contents.slice(0, 16)}...`,
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
						<S.DocsTitleText>{docs?.title.replace(/&\$\^%/gi, '"')}</S.DocsTitleText>
						<S.DocsMenu>
							<C.DetailBtn docsId={docs?.id || -1} />
						</S.DocsMenu>
					</S.DocsTitleWrap>
					<S.Classify>
						<C.Classify>{FC.typeEditor(docs?.docsType as string)}</C.Classify>
					</S.Classify>
					<S.DocsLine />
					<S.DocsContentsWrap>
						<S.DocsContentsLoadWrap>
							<S.LastUpdateDate>마지막 수정 : {FC.dateParser(docs !== undefined ? docs.lastModifiedAt : '')}</S.LastUpdateDate>
							<C.AccodianMenu name="내용">
								<S.DocsContents
									dangerouslySetInnerHTML={{
										__html: FC.documentation(decodeContents(docs?.contents || '')),
									}}></S.DocsContents>
							</C.AccodianMenu>
						</S.DocsContentsLoadWrap>
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
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context

	const res = await api.getDocs(params?.title as string)

	return {
		props: {
			docs: res,
		},
	}
}

export default Doc
