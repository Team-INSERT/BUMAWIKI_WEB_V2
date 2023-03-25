import * as C from '@/components'
import * as api from '@/api/getDocs'
import * as FC from '@/utils'
import * as S from '../../layout/search/style'

import React, { useEffect, useLayoutEffect } from 'react'
import Docs from '@/types/docs.type'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'

interface SingleDocsPropsType {
	results: Docs[]
	redirect: boolean
	searchValue: string
}

const Search = ({ results, redirect, searchValue }: SingleDocsPropsType) => {
	const router = useRouter()

	const seoConfig: NextSeoProps = {
		title: `부마위키 검색 - ${searchValue}`,
		description: `부마위키의 "${searchValue}" 검색 결과에 관한 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 검색 - ${searchValue}`,
			description: `부마위키의 "${searchValue}" 검색 결과에 관한 페이지입니다.`,
			images: [
				{
					url: '/images/meta-img.png',
				},
			],
		},
	}

	useLayoutEffect(() => {
		if (redirect) router.push(`docs/${results[0].title}`)
	}, [redirect, results, router])

	return (
		<>
			<NextSeo {...seoConfig} />
			<C.Header />
			<S.SearchWrap>
				<C.Board>
					<S.SearchTitleWrap>
						<span>&quot;{searchValue}&quot; 검색결과</span>
					</S.SearchTitleWrap>
					<S.Classify>
						<C.Classify>검색</C.Classify>
					</S.Classify>
					<S.SearchLine />
					<S.SearchResult>
						<S.SearchList>
							{results ? (
								<>
									{results.map((result: Docs, index) => (
										<S.SearchListItem key={index}>
											<S.SearchLink href={`/docs/${result.title}`}>
												{result.title}&nbsp;
												{result.docsType === 'FRAME' ? null : (
													<span>
														({FC.typeEditor(result.docsType)},{result.enroll})
													</span>
												)}
											</S.SearchLink>
										</S.SearchListItem>
									))}
								</>
							) : (
								<S.SearchCreateLink href={`/create?name=${searchValue}`}>검색 결과가 없습니다. 지금 문서를 생성해보세요</S.SearchCreateLink>
							)}
						</S.SearchList>
					</S.SearchResult>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.SearchWrap>
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
	const search = context?.params?.search
	let redirect = false

	const res = await api.getFindDocs(search as string)
	if (res.length === 1) redirect = true

	return {
		props: {
			results: res,
			redirect,
			searchValue: search,
		},
	}
}

export default Search
