import React from 'react'
import Docs from '@/types/docs.type'
import { NextSeo, NextSeoProps } from 'next-seo'
import httpClient from '@/lib/httpClient'
import TeacherLayout from '@/layout/TeacherLayout'

interface TeacherDocsPropsType {
	common_teacher: Docs[]
	major_teacher: Docs[]
	mentor_teacher: Docs[]
}

const Teacher = (props: TeacherDocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 - 선생님`,
		description: `교내의 모든 선생님을 담은 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 - 선생님`,
			description: `교내의 모든 선생님을 담은 페이지입니다.`,
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
			<TeacherLayout {...props} />
		</>
	)
}

export async function getStaticProps() {
	const common_teacher = (await httpClient.static.getByTitle('teacher')).data
	const major_teacher = (await httpClient.static.getByTitle('major_teacher')).data
	const mentor_teacher = (await httpClient.static.getByTitle('mentor_teacher')).data

	return {
		props: {
			common_teacher,
			major_teacher,
			mentor_teacher,
		},
	}
}

export default Teacher
