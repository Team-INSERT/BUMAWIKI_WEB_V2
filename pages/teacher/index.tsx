import * as S from '../../layout/teacher/style'
import * as getApi from '@/api/getDocs'

import React, { PropsWithChildren } from 'react'
import Docs from '@/types/docs.type'
import { NextSeo, NextSeoProps } from 'next-seo'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'

interface TeacherDocsPropsType {
	docs: {
		common_teacher: Docs[]
		major_teacher: Docs[]
		mentor_teacher: Docs[]
	}
}

const Teacher = ({ docs }: TeacherDocsPropsType) => {
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
			<S.TeacherWrap>
				<Board>
					<S.TeacherTitleWrap>
						<S.TeacherTitleText>부마위키:선생님</S.TeacherTitleText>
					</S.TeacherTitleWrap>
					<Classify>선생님</Classify>
					<S.TeacherWarnText>※ 필독! 문서 내 대상을 비하하는 내용을 서술하는 사용자는 부마위키 이용에 제한을 받을 수 있습니다 ※</S.TeacherWarnText>
					<S.TeacherList>
						<AccodianMenu name={`인문과목 선생님`}>
							<S.TeacherDetailList>
								{docs.common_teacher.map((teacher: Docs, index) => (
									<S.TeacherListItem key={index}>
										<S.TeacherLink href={`/docs/${teacher.title}`}>{teacher.title}</S.TeacherLink>
									</S.TeacherListItem>
								))}
							</S.TeacherDetailList>
						</AccodianMenu>
						<AccodianMenu name={`전공과목 선생님`}>
							<S.TeacherDetailList>
								{docs.major_teacher.map((teacher: Docs, index) => (
									<S.TeacherListItem key={index}>
										<S.TeacherLink href={`/docs/${teacher.title}`} className="link">
											{teacher.title}
										</S.TeacherLink>
									</S.TeacherListItem>
								))}
							</S.TeacherDetailList>
						</AccodianMenu>
						<AccodianMenu name={`멘토 선생님`}>
							<S.TeacherDetailList>
								{docs.mentor_teacher.map((teacher: Docs) => (
									<S.TeacherListItem key={teacher.id}>
										<S.TeacherLink href={`/docs/${teacher.title}`} className="link">
											{teacher.title}
										</S.TeacherLink>
									</S.TeacherListItem>
								))}
							</S.TeacherDetailList>
						</AccodianMenu>
					</S.TeacherList>
					<SubFooter />
				</Board>
				<ScrollBtn />
				<Aside />
			</S.TeacherWrap>
		</>
	)
}

export async function getStaticProps() {
	const common_teacher = await getApi.getBaseDocs('teacher')
	const major_teacher = await getApi.getBaseDocs('major_teacher')
	const mentor_teacher = await getApi.getBaseDocs('mentor_teacher')

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
