import * as docs from '@/api/getDocs'
import * as util from '@/utils'

import React from 'react'
import DocsPropsType from '@/types/static/docs.props.type'
import { NextSeo } from 'next-seo'
import AccidentLayout from '@/layout/AccidentLayout'
import httpClient from '@/lib/httpClient'
import useConfig from '@/hooks/useConfig'

const Accident = (props: DocsPropsType) => {
	const { seoConfig } = useConfig({
		title: '부마위키 - 사건/사고',
		description: '교내에서 일어나는 모든 사건/사고를 담은 페이지입니다.',
	})

	return (
		<>
			<NextSeo {...seoConfig} />
			<AccidentLayout {...props} />
		</>
	)
}

export async function getStaticProps() {
	const accident = await httpClient.static.getByTitle('accident')
	const years = util.getAllYear()

	return {
		props: {
			docs: accident.data,
			years,
		},
	}
}

export default Accident
