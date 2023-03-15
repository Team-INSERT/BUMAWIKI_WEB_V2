import * as C from '@/components'
import * as api from '@/api/editDocs'
import * as FC from '@/utils'
import * as S from './style'

import userState from '@/context/userState'
import React from 'react'
import { useMutation } from 'react-query'
import { useRecoilValue } from 'recoil'
import CreateDocsType from '@/types/create.type'
import { encodeContents } from '@/utils/document/requestContents'
import Frame from '@/types/frame.type'
import sizeInitState from '@/state/sizeInitState'
import { useRouter } from 'next/router'

const Create = () => {
	const router = useRouter()
	const user = useRecoilValue(userState)
	const years = FC.getAllYear()

	const [size, setSize] = React.useState<Frame>(sizeInitState)
	const [docs, setDocs] = React.useState<CreateDocsType>({
		title: (router.query.name as string) || '',
		contents: '',
		docsType: '',
		enroll: -1,
		files: [],
	})

	const { mutate } = useMutation(api.createDocs, {
		onSuccess: (data) => {
			alert('문서가 생성되었습니다!')
			router.push(`/docs/${data.title}`)
		},
	})

	const createDocs = () => {
		const FormData = require('form-data')
		const data = new FormData()
		data.append(
			'request',
			new Blob(
				[`{ "title": "${docs.title}", "enroll":"${docs.enroll}", "contents":"${encodeContents(docs.contents)}", "docsType":"${docs.docsType}"}`],
				{
					type: 'application/json',
				}
			)
		)
		docs.files.reverse().forEach((file) => data.append('files', file, file.name))
		mutate(data)
	}

	const onClickCreateDocs = () => {
		if (docs.title.includes('?') || docs.title.includes('/') || docs.title.includes('"') || docs.title.includes('\\'))
			return alert('문서명에는 물음표나 쌍따옴표, 슬래시나 역슬래시를 넣을 수 없습니다.')
		if (!user.isLogin) return alert('로그인 후 이용 가능한 서비스입니다.')
		if (!docs.enroll) return alert('연도를 선택해주세요!')
		if (!docs.title.length) return alert('문서의 이름을 정해주세요!')
		if (!docs.docsType) return alert('문서의 분류를 선택해주세요!')

		createDocs()
	}

	const makeFrame = () => {
		const frame = `<틀>\n<틀제목>제목삽입</틀제목>\n` + `<행>${'<열>내용삽입</열>'.repeat(size.row)}</행>\n`.repeat(size.column) + `</틀>`
		setDocs({ ...docs, contents: frame })
	}

	const changeDocsType = (e: React.ChangeEvent<HTMLInputElement>) => {
		const type = e.target.id
		if (type === 'FRAME') {
			setDocs({ ...docs, docsType: type, title: `틀:${docs.title}` })
		} else {
			setDocs({ ...docs, docsType: type, title: docs.title.replace('틀:', ''), contents: '' })
		}
	}

	return (
		<>
			<C.Header />
			<S.CreateWrap>
				<C.Board>
					<S.CreateTitleWrap>
						<S.CreateTitleText>문서 생성</S.CreateTitleText>
					</S.CreateTitleWrap>
					<S.CreateTable>
						<S.CreateTableTR>
							<S.CreateTableTRTitle>분류</S.CreateTableTRTitle>
							<S.CreateTableTRContents>
								{user.authority === 'ADMIN' ? (
									<>
										<label htmlFor="STUDENT">학생</label>
										<S.CreateTableRadio type="radio" onChange={(e) => setDocs({ ...docs, docsType: e.target.id })} id="STUDENT" name="radio" />
									</>
								) : (
									''
								)}
								<label htmlFor="TEACHER">인문 선생님</label>
								<S.CreateTableRadio type="radio" onChange={(e) => changeDocsType(e)} id="TEACHER" name="radio" />
								<label htmlFor="MAJOR_TEACHER">전공 선생님</label>
								<S.CreateTableRadio type="radio" onChange={(e) => changeDocsType(e)} id="MAJOR_TEACHER" name="radio" />
								<label htmlFor="MENTOR_TEACHER">멘토 선생님</label>
								<S.CreateTableRadio type="radio" onChange={(e) => changeDocsType(e)} id="MENTOR_TEACHER" name="radio" />
								<label htmlFor="ACCIDENT">사건/사고</label>
								<S.CreateTableRadio type="radio" onChange={(e) => changeDocsType(e)} id="ACCIDENT" name="radio" />
								<label htmlFor="CLUB">전공동아리</label>
								<S.CreateTableRadio type="radio" onChange={(e) => changeDocsType(e)} id="CLUB" name="radio" />
								<label htmlFor="FREE_CLUB">사설동아리</label>
								<S.CreateTableRadio type="radio" onChange={(e) => changeDocsType(e)} id="FREE_CLUB" name="radio" />
								<label htmlFor="FRAME">틀</label>
								<S.CreateTableRadio type="radio" onChange={(e) => changeDocsType(e)} id="FRAME" name="radio" />
							</S.CreateTableTRContents>
						</S.CreateTableTR>
						<S.CreateTableTR>
							<S.CreateTableTRTitle>문서 이름</S.CreateTableTRTitle>
							<S.CreateTableTRInputContents onChange={(e) => setDocs({ ...docs, title: e.target.value })} value={docs.title} />
						</S.CreateTableTR>
						<S.CreateTableTR>
							<S.CreateTableTRTitle>연도</S.CreateTableTRTitle>
							<S.CreateTableTRContents>
								{years.map((year, index) => (
									<div key={index}>
										<S.EnrollLabel htmlFor={`${year}`}>{year}년</S.EnrollLabel>
										<S.CreateTableRadio
											type="radio"
											onChange={(e) => setDocs({ ...docs, enroll: parseInt(e.target.id) })}
											id={`${year}`}
											name="radios"
										/>
									</div>
								))}
							</S.CreateTableTRContents>
						</S.CreateTableTR>
						<S.CreateTableTRExample>
							<S.CreateTableTRTitle>예시</S.CreateTableTRTitle>
							<S.CreateTableTRContents>
								<S.ExampleImage src="/images/references.png" alt="문서 양식" />
							</S.CreateTableTRContents>
						</S.CreateTableTRExample>
						<S.CreateTableTRFile>
							<S.CreateTableTRTitle>이미지</S.CreateTableTRTitle>
							<S.FileInputWrap>
								{[1, 2, 3].map((key) => (
									<input
										key={key}
										type="file"
										accept="image/*"
										onChange={(e) => {
											if (e.target.files) setDocs({ ...docs, files: [...docs.files, e.target.files[0]] })
										}}
									/>
								))}
							</S.FileInputWrap>
						</S.CreateTableTRFile>
						{docs.docsType === 'FRAME' ? (
							<S.CreateTableTRFrame>
								<S.CreateTableTRTitle>틀 규격</S.CreateTableTRTitle>
								<S.FrameInputDiv>
									<S.FrameInputBox>
										<S.FrameInputWrap>
											<S.FrameText>열</S.FrameText>
											<S.FrameInput
												type="number"
												min="2"
												max="5"
												value={size.column}
												onChange={(e) => setSize({ ...size, column: parseInt(e.target.value) })}
											/>
											<S.FrameText>행</S.FrameText>
											<S.FrameInput
												type="number"
												min="2"
												max="10"
												value={size.row}
												onChange={(e) => setSize({ ...size, row: parseInt(e.target.value) })}
											/>
										</S.FrameInputWrap>
									</S.FrameInputBox>
									<S.CreateFrameButton onClick={() => makeFrame()}>틀생성/초기화</S.CreateFrameButton>
								</S.FrameInputDiv>
							</S.CreateTableTRFrame>
						) : (
							''
						)}
						<S.CreateTableTRTextContent>
							<S.CreateTableTRTitle>문서 내용</S.CreateTableTRTitle>
							<S.CreateTableTRTextarea
								onKeyDown={(e) => FC.onKeyDownUseTab(e)}
								onChange={(e) => setDocs({ ...docs, contents: FC.autoClosingTag(e) })}
								value={docs.contents}
							/>
						</S.CreateTableTRTextContent>
						<S.CreateTableTRTextContent>
							<S.CreateTableTRTitle>미리보기</S.CreateTableTRTitle>
							<S.CreateTableTRDiv
								dangerouslySetInnerHTML={{
									__html: FC.documentation(docs.contents),
								}}></S.CreateTableTRDiv>
						</S.CreateTableTRTextContent>
					</S.CreateTable>
					<S.CreateSubmit>
						<S.CreateWarn>※ 필독! 문서 내 부적절한 내용을 서술하는 사용자는 부마위키 이용에 제한을 받을 수 있습니다 ※</S.CreateWarn>
						<S.CreateButton onClick={onClickCreateDocs}>문서 생성</S.CreateButton>
					</S.CreateSubmit>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.CreateWrap>
			<C.Footer />
		</>
	)
}

export default Create
