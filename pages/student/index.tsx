import * as util from '@/utils'

import React from 'react'
import DocsPropsType from '@/types/static/docs.props.type'
import { NextSeo, NextSeoProps } from 'next-seo'
import httpClient from '@/lib/httpClient'
import StudentLayout from '@/layout/StudentLayout'

const Student = (props: DocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 - 학생`,
		description: `교내의 모든 학생을 담은 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 - 학생`,
			description: `교내의 모든 학생을 담은 페이지입니다.`,
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
			<StudentLayout {...props} />
		</>
	)
}

export async function getStaticProps() {
	const student = (await httpClient.static.getByTitle('student')).data
	const years = util.getAllYear()

	return {
		props: {
			docs: student,
			years,
		},
	}
}

export default Student
