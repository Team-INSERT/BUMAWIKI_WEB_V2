import * as C from '@/components'
import * as docs from '@/api/getDocs'
import * as S from './style'
import * as FC from '@/utils'

import React from 'react'
import Docs from '@/types/docs.type'
import DocsPropsType from '@/types/static/docs.props.type'

const Student = ({ docs, years }: DocsPropsType) => {
	return (
		<>
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
