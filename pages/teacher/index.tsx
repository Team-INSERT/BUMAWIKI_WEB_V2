import React from 'react'
import Docs from '@/types/docs.type'
import { NextSeo } from 'next-seo'
import httpClient from '@/lib/httpClient'
import TeacherLayout from '@/layout/static/TeacherLayout'
import useConfig from '@/hooks/useConfig'

interface TeacherDocsPropsType {
	common_teacher: Docs[]
	major_teacher: Docs[]
	mentor_teacher: Docs[]
}

const Teacher = (props: TeacherDocsPropsType) => {
	const { seoConfig } = useConfig({
		title: '부마위키 - 선생님',
		description: '교내의 모든 선생님에 대한 정보를 담은 페이지입니다.',
	})

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
