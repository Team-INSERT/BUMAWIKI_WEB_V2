import * as C from '@/components'
import * as S from './style'

import axios from 'axios'
import React from 'react'
import Docs from '@/types/docs.type'
import { Helmet } from 'react-helmet'
import { bumawikiAxios } from '@/lib/axios/customAxios'

const Teacher = () => {
	const [major, setMajor] = React.useState([])
	const [humanities, setHumanities] = React.useState([])
	const [mentor, setMentor] = React.useState([])

	const getTeacherDocs = async (router: string) => {
		const res = await bumawikiAxios.get(`/docs/${router}`)
		const data = res.data.sort((a: Docs, b: Docs) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1))

		if (router === 'teacher') {
			setHumanities(data)
			getTeacherDocs('major_teacher')
		}
		if (router === 'major_teacher') {
			setMajor(data)
			getTeacherDocs('mentor_teacher')
		}
		if (router === 'mentor_teacher') {
			setMentor(data)
		}
	}

	React.useEffect(() => {
		getTeacherDocs('teacher')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<Helmet>
				<meta property="og:title" content={`부마위키 - 선생님`} />
				<meta property="og:image" content="images/meta-img.png" />
				<meta property="og:description" content="여러분이 가꾸어 나가는 역사의 고서 - 선생님" />
				<link href="images/icon.ico" rel="shortcut icon" type="image/x-icon" />
				<title>부마위키 - 선생님</title>
			</Helmet>
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
								{humanities.map((teacher: Docs, index) => (
									<S.TeacherListItem key={index}>
										<S.TeacherLink href={`/docs/${teacher.title}`}>{teacher.title}</S.TeacherLink>
									</S.TeacherListItem>
								))}
							</S.TeacherDetailList>
						</C.AccodianMenu>
						<C.AccodianMenu name={`전공과목 선생님`}>
							<S.TeacherDetailList>
								{major.map((teacher: Docs, index) => (
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
								{mentor.map((teacher: Docs) => (
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

export default Teacher
