import * as C from '@/components'
import * as docs from '@/api/getDocs'
import * as S from '../../layout/student/style'
import * as FC from '@/utils'

import React from 'react'
import Docs from '@/types/docs.type'
import DocsPropsType from '@/types/static/docs.props.type'
import { NextSeo, NextSeoProps } from 'next-seo'

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
			<C.Header />
			<S.StudentWrap>
				<C.Board>
					<S.StudentTitleWrap>
						<S.StudentTitleText>부마위키:학생</S.StudentTitleText>
					</S.StudentTitleWrap>
					<S.StudentClassify>
						<C.Classify>학생</C.Classify>
					</S.StudentClassify>
					<S.StudentLine />
					<S.StudentListWrap>
						{years.map((year) => (
							<C.AccodianMenu name={`${year}년도 입학생`} key={year} isOpen={true}>
								{docs.map((student: Docs, index) => (
									<S.StudentList key={index}>
										{student.enroll === year ? (
											<S.StudentListItem>
												<S.StudentLink href={`/docs/${student.title}`}>{student.title}</S.StudentLink>
											</S.StudentListItem>
										) : (
											''
										)}
									</S.StudentList>
								))}
							</C.AccodianMenu>
						))}
					</S.StudentListWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.StudentWrap>
			<C.Footer />
		</>
	)
}

export async function getStaticProps() {
	const student = await docs.getBaseDocs('student')
	const years = FC.getAllYear()

	return {
		props: {
			docs: student,
			years,
		},
	}
}

export default Student
