import * as C from '@/components'
import * as FC from '@/utils'
import * as S from './style'
import * as docs from '@/api/getDocs'

import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Docs from '@/types/docs.type'
import { AxiosError } from 'axios'
import { decodeContents } from '@/utils/document/requestContents'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

interface SinglDocsPropsType {
	docs: Docs
}

const Doc = ({ docs }: SinglDocsPropsType) => {
	return (
		<>
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
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context
	
	const res = await docs.getDocs(params?.title as string)
	const { contents } = res

	if (contents.indexOf('include(') !== -1) {
		const includeTag = contents.substring(contents.indexOf('include('), contents.indexOf(');') + 2)
		const frame = await FC.includeFrame(contents.substring(contents.indexOf('include('), contents.indexOf(');')).replace('include(', ''))

		return {
			props: {
				docs: {
					...res,
					contents: contents.replace(includeTag, frame),
				},
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
