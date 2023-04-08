import * as util from '@/utils'

import React from 'react'
import Docs from '@/types/docs.type'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import httpClient from '@/lib/httpClient'
import SearchLayout from '@/layout/SearchLayout'

interface SingleDocsPropsType {
	results: Docs[]
	redirect: boolean
	searchValue: string
}

const Search = (props: SingleDocsPropsType) => {
	const router = useRouter()

	const seoConfig: NextSeoProps = {
		title: `부마위키 검색 - ${props.searchValue}`,
		description: `부마위키의 "${props.searchValue}" 검색 결과에 관한 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 검색 - ${props.searchValue}`,
			description: `부마위키의 "${props.searchValue}" 검색 결과에 관한 페이지입니다.`,
			images: [
				{
					url: '/images/meta-img.png',
				},
			],
		},
	}

	React.useEffect(() => {
		if (props.redirect) router.push(`/docs/${props.results[0].title}`)
	}, [props.redirect, props.results, router])

	return (
		<>
			<NextSeo {...seoConfig} />
			<SearchLayout {...props} />
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

	const res = (await httpClient.search.getByTitle(search as string)).data
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
