import * as util from '@/utils'
import * as S from '../../layout/docs/style'
import * as api from '@/api/getDocs'

import React, { PropsWithChildren } from 'react'
import Docs from '@/types/docs.type'
import { decodeContents } from '@/utils/document/requestContents'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import { AccodianMenu, Board, Classify, DetailBtn, SubFooter } from '@/components'

interface SingleDocsPropsType {
	docs: Docs
}

const Doc = ({ docs }: SingleDocsPropsType, { children }: PropsWithChildren) => {
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
				{children}
			</S.DocsWrap>
		</>
	)
}

// 로직 전체 바꾸기, 옵셔널체이닝 지양하기
export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context

	const res = await api.getDocs(params?.title as string)
	const { contents } = res

	try {
		if (res.contents.indexOf('include(') !== -1) {
			const includeTag = res.contents.substring(res.contents.indexOf('include('), res.contents.indexOf(');') + 2)
			const frames = res.contents.substring(res.contents.indexOf('include('), res.contents.indexOf(');')).replace('include(', '').split(', ')

			let frameValue = ''

			for (const frame of frames) {
				const result = await util.includeFrame(frame)
				frameValue += `${result}\n`
			}

			return {
				props: {
					docs: {
						...res,
						contents: contents.replace(includeTag, frameValue),
						title: params?.title,
					},
				},
			}
		}
	} catch (err) {
		console.log(err)
		return {
			props: {
				docs: res,
			},
		}
	}

	return {
		props: {
			docs: res,
		},
	}
}

export default Doc
