import * as C from '@/components'
import * as S from './style'
import * as docs from '@/api/getDocs'

import React from 'react'
import Docs from '@/types/docs.type'

interface TeacherDocsPropsType {
	docs: {
		common_teacher: Docs[]
		major_teacher: Docs[]
		mentor_teacher: Docs[]
	}
}

const Teacher = ({ docs }: TeacherDocsPropsType) => {
	return (
		<>
			<C.Header />
			<S.TeacherWrap>
				<C.Board>
					<S.TeacherTitleWrap>
						<S.TeacherTitleText>부마위키:선생님</S.TeacherTitleText>
					</S.TeacherTitleWrap>
					<S.Classify>
						<C.Classify>선생님</C.Classify>
					</S.Classify>
					<S.TeacherLine />
					<S.TeacherWarnText>※ 필독! 문서 내 대상을 비하하는 내용을 서술하는 사용자는 부마위키 이용에 제한을 받을 수 있습니다 ※</S.TeacherWarnText>
					<S.TeacherList>
						<C.AccodianMenu name={`인문과목 선생님`}>
							<S.TeacherDetailList>
								{docs.common_teacher.map((teacher: Docs, index) => (
									<S.TeacherListItem key={index}>
										<S.TeacherLink href={`/docs/${teacher.title}`}>{teacher.title}</S.TeacherLink>
									</S.TeacherListItem>
								))}
							</S.TeacherDetailList>
						</C.AccodianMenu>
						<C.AccodianMenu name={`전공과목 선생님`}>
							<S.TeacherDetailList>
								{docs.major_teacher.map((teacher: Docs, index) => (
									<S.TeacherListItem key={index}>
										<S.TeacherLink href={`/docs/${teacher.title}`} className="link">
											{teacher.title}
										</S.TeacherLink>
									</S.TeacherListItem>
								))}
							</S.TeacherDetailList>
						</C.AccodianMenu>
						<C.AccodianMenu name={`멘토 선생님`}>
							<S.TeacherDetailList>
								{docs.mentor_teacher.map((teacher: Docs) => (
									<S.TeacherListItem key={teacher.id}>
										<S.TeacherLink href={`/docs/${teacher.title}`} className="link">
											{teacher.title}
										</S.TeacherLink>
									</S.TeacherListItem>
								))}
							</S.TeacherDetailList>
						</C.AccodianMenu>
					</S.TeacherList>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.TeacherWrap>
			<C.Footer />
		</>
	)
}

export async function getStaticProps() {
	const common_teacher = await docs.getBaseDocs('teacher')
	const major_teacher = await docs.getBaseDocs('major_teacher')
	const mentor_teacher = await docs.getBaseDocs('mentor_teacher')

	return {
		props: {
			docs: {
				common_teacher,
				major_teacher,
				mentor_teacher,
			},
		},
	}
}

export default Teacher
