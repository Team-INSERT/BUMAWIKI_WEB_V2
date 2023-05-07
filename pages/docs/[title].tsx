import * as util from '@/utils'

import React from 'react'
import Docs from '@/types/docs.type'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import DocsLayout from '@/layout/DocsLayout'
import httpClient from '@/lib/httpClient'
import useConfig from '@/hooks/useConfig'
import useUser from '@/hooks/useUser'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { Storage } from '@/lib/storage'
import useLikeCountById from '@/hooks/useLikeCountById'
import seoContentParser from '@/utils/document/seoContentParser'

interface SingleDocsPropsType {
	docs: Docs
}

const Doc = ({ docs }: SingleDocsPropsType) => {
	const [like, setLike] = React.useState(docs.youLikeThis || false)
	const [count, setCount] = React.useState(docs.thumbsUpsCounts || 0)
	const router = useRouter()

	const { isLogined } = useUser()
	const { seoConfig } = useConfig({
		title: `부마위키 - ${docs.title} (${util.typeEditor(docs.docsType)})`,
		description: seoContentParser(docs.contents),
	})
	const { getIsLike, createLike, deleteLike } = useLikeCountById(docs.id)

	const onChangeLike = () => {
		if (!isLogined) return toast.error('로그인 후 이용 가능한 서비스입니다!')

		if (!like) createLike()
		else deleteLike()

		setLike(!like)
		setCount(like ? count - 1 : count + 1)
	}

	React.useEffect(() => {
		;(async () => {
			setLike(await getIsLike())
			setCount(docs.thumbsUpsCounts)
		})()
	}, [router])

	return (
		<>
			<NextSeo {...seoConfig} />
			<DocsLayout docs={docs} onChangeLike={onChangeLike} count={count} like={like} />
		</>
	)
}

const getApiDocs = async (docsName: string) => {
	try {
		return (await httpClient.docs.getByTitle(docsName, { headers: { Authorization: Storage.getItem('access_token') } })).data
	} catch (err) {
		return false
	}
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context

	const res = await getApiDocs(params?.title as string)

	if (!res) return { notFound: true }

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
