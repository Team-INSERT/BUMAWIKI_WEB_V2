import * as getApi from '@/api/getDocs'
import * as S from '../../layout/student/style'
import * as util from '@/utils'

import React from 'react'
import Docs from '@/types/docs.type'
import DocsPropsType from '@/types/static/docs.props.type'
import { NextSeo, NextSeoProps } from 'next-seo'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'
import httpClient from '@/lib/httpClient'

const Student = ({ docs, years }: DocsPropsType) => {
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
			<S.StudentWrap>
				<Board>
					<S.StudentTitleWrap>
						<S.StudentTitleText>부마위키:학생</S.StudentTitleText>
					</S.StudentTitleWrap>
					<S.StudentClassify>
						<Classify>학생</Classify>
					</S.StudentClassify>
					<S.StudentLine />
					<S.StudentListWrap>
						{years.map((year) => (
							<AccodianMenu name={`${year}년도 입학생`} key={year} isOpen={true}>
								{docs.map((student: Docs, index) => (
									<S.StudentList key={index}>
										{student.enroll === year && (
											<S.StudentListItem>
												<S.StudentLink href={`/docs/${student.title}`}>{student.title}</S.StudentLink>
											</S.StudentListItem>
										)}
									</S.StudentList>
								))}
							</AccodianMenu>
						))}
					</S.StudentListWrap>
					<SubFooter />
				</Board>
				<ScrollBtn />
				<Aside />
			</S.StudentWrap>
		</>
	)
}

export async function getStaticProps() {
	const student = (
		await httpClient.static.getById({
			url: 'student',
		})
	).data
	const years = util.getAllYear()

	return {
		props: {
			docs: student,
			years,
		},
	}
}

export default Student
