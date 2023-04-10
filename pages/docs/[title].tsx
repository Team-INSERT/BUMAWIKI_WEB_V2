import * as util from '@/utils'
import * as api from '@/api/getDocs'

import React from 'react'
import Docs from '@/types/docs.type'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import docsInitState from '@/state/docsInitState'
import DocsLayout from '@/layout/DocsLayout'
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
			<DocsLayout docs={docs} />
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
