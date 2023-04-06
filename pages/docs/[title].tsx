import * as util from '@/utils'
import * as S from '../../layout/docs/style'
import * as api from '@/api/getDocs'

import React from 'react'
import Docs from '@/types/docs.type'
import { decodeContents } from '@/utils/document/requestContents'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import docsInitState from '@/state/docsInitState'
import { AccodianMenu, Aside, Board, Classify, DetailBtn, ScrollBtn, SubFooter } from '@/components'
import httpClient from '@/lib/httpClient'

interface SingleDocsPropsType {
	docs: Docs
}

const Doc = ({ docs }: SingleDocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 - ${docs?.title} (${util.typeEditor(docs?.docsType)})`,
		description: `${docs?.contents.slice(0, 16)}...`,
		openGraph: {
			type: 'website',
			title: `부마위키 - ${docs?.title} (${util.typeEditor(docs?.docsType)})`,
			description: `${docs?.contents.slice(0, 16)}...`,
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
						<S.DocsTitleText>{docs?.title.replace(/&\$\^%/gi, '"')}</S.DocsTitleText>
						<S.DocsMenu>
							<DetailBtn docsId={docs?.id || -1} />
						</S.DocsMenu>
					</S.DocsTitleWrap>
					<S.Classify>
						<Classify>{util.typeEditor(docs?.docsType as string)}</Classify>
					</S.Classify>
					<S.DocsLine />
					<S.DocsContentsWrap>
						<S.DocsContentsLoadWrap>
							<S.LastUpdateDate>마지막 수정 : {util.dateParser(docs !== undefined ? docs.lastModifiedAt : '')}</S.LastUpdateDate>
							<AccodianMenu name="내용">
								<S.DocsContents
									dangerouslySetInnerHTML={{
										__html: util.documentation(decodeContents(docs?.contents || '')),
									}}></S.DocsContents>
							</AccodianMenu>
						</S.DocsContentsLoadWrap>
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

const getApiDocs = async (docsName: string) => {
	try {
		return (await httpClient.docs.getByTitle(docsName)).data
	} catch (err) {
		return false
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context

	const res = await getApiDocs(params?.title as string)

	if (!res)
		return {
			props: {
				docs: docsInitState,
			},
		}

	const { contents } = res

	if (res.contents.indexOf('include(') !== -1) {
		const includeTag = contents.substring(contents.indexOf('include('), contents.indexOf(');') + 2)
		const frames: string[] = contents.substring(contents.indexOf('include('), contents.indexOf(');')).replace('include(', '').split(', ')

		let result = ''

		for (const frame of frames) result += `${await util.includeFrame(frame)}\n`
		res.contents = contents.replace(includeTag, result)
	}

	return {
		props: {
			docs: res,
		},
	}
}

export default Doc
