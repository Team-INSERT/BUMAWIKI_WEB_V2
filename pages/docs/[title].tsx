import * as util from '@/utils'

import React from 'react'
import Docs from '@/types/docs.type'
import { GetServerSideProps, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import DocsLayout from '@/layout/DocsLayout'
import httpClient from '@/lib/httpClient'
import useConfig from '@/hooks/useConfig'
import useUser from '@/hooks/useUser'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface SingleDocsPropsType {
	docs: Docs
}

const Doc = ({ docs }: SingleDocsPropsType) => {
	const [like, setLike] = React.useState(false)
	const [count, setCount] = React.useState(docs.thumbsUpsCounts || 0)
	const router = useRouter()
	const { isLogined } = useUser()
	const { seoConfig } = useConfig({
		title: `부마위키 - ${docs.title} (${util.typeEditor(docs.docsType)})`,
		description: `${docs.contents.slice(0, 16)}...`,
	})

	const onChangeLike = () => {
		if (!isLogined) return toast.error('로그인 후 이용 가능한 서비스입니다!')
		setLike(!like)
		setCount(like ? count - 1 : count + 1)
	}

	React.useEffect(() => {
		return () => {
			setLike(false)
			setCount(docs.thumbsUpsCounts || 0)

			// if (like) httpClient.createLike.post({ docsId: docs.id })
			// else httpClient.deleteLike.post({ docsId: docs.id })
		}
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
		return (await httpClient.docs.getByTitle(docsName)).data
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
