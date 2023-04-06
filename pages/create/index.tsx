import * as util from '@/utils'
import * as S from '../../layout/create/style'

import React from 'react'
import { useMutation } from 'react-query'
import CreateDocsType from '@/types/create.type'
import Frame from '@/types/frame.type'
import sizeInitState from '@/state/sizeInitState'
import { useRouter } from 'next/router'
import createInitState from '@/state/createInitState'
import createDocsForm from '@/utils/document/createDocsForm'
import { NextSeo, NextSeoProps } from 'next-seo'
import useUser from '@/hooks/useUser'
import { Aside, Board, ScrollBtn, SubFooter } from '@/components'
import createFormInitState from '@/state/createFormInitState'
import DragDrop, { IFileTypes } from '@/components/DragDrop'
import httpClient from '@/lib/httpClient'
import { Storage } from '@/lib/storage'
import FileListArray from '@/types/filelistArray.type'

const Create = () => {
	const router = useRouter()
	const { query } = router
	const years = util.getAllYear()

	const [parentFiles, setParentFiles] = React.useState<IFileTypes[]>([])
	const [size, setSize] = React.useState<Frame>(sizeInitState)
	const [docs, setDocs] = React.useState<CreateDocsType>({
		title: (query.name as string) || '',
		...createInitState,
	})
	const { user: userInfo, isLogined } = useUser()

	const setFiles = (file: FileListArray[]) => {
		setParentFiles(file)
	}

	const { mutate } = useMutation(
		(data) =>
			httpClient.create.post(data, {
				headers: {
					Authorization: Storage.getItem('access_token'),
				},
			}),
		{
			onSuccess: (res) => {
				// alert -> modal or popup or toast 로 대체
				alert('문서가 생성되었습니다!')
				router.push(`/docs/${res.data.title}`)
			},
		}
	)

	const onClickCreateDocs = () => {
		if (['?', '/', '"', '\\'].includes(docs.title)) return alert('문서명에는 물음표나 쌍따옴표, 슬래시나 역슬래시를 넣을 수 없습니다.')
		if (!isLogined) return alert('로그인 후 이용 가능한 서비스입니다.')
		if (!docs.enroll) return alert('연도를 선택해주세요!')
		if (!docs.title) return alert('문서의 이름을 정해주세요!')
		if (!docs.docsType) return alert('문서의 분류를 선택해주세요!')

		const { title, enroll, contents, docsType } = docs

		mutate(
			createDocsForm({
				title,
				enroll,
				contents,
				docsType,
				files: parentFiles,
			})
		)
	}

	const makeFrame = () => {
		const frame = `<틀>
	<틀제목>제목삽입</틀제목>
	${`<행>
		${'<열>내용삽입</열>'.repeat(size.row)}
	</행>`.repeat(size.column)}
</틀>`

		setDocs({ ...docs, contents: frame })
	}

	const changeDocsType = (e: React.ChangeEvent<HTMLInputElement | HTMLOptionElement>) => {
		const type = e.target.id
		if (type === 'FRAME') return setDocs({ ...docs, docsType: type, title: `틀:${docs.title}` })
		return setDocs({ ...docs, docsType: type, title: docs.title.replace('틀:', ''), contents: '' })
	}

	const seoConfig: NextSeoProps = {
		title: '부마위키 - 문서생성',
		description: '부마위키 문서생성 페이지입니다.',
		openGraph: {
			type: 'website',
			title: '부마위키 - 문서생성',
			description: '부마위키 문서생성 페이지입니다.',
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
			<S.CreateWrap>
				<Board>
					<S.CreateTitleWrap>
						<S.CreateTitleText>문서 생성</S.CreateTitleText>
					</S.CreateTitleWrap>
					<S.CreateTable>
						<S.CreateTableTR>
							<S.CreateTableTRTitle>분류</S.CreateTableTRTitle>
							<S.CreateTableTRContents>
								{userInfo.authority === 'ADMIN' && (
									<div>
										<label htmlFor="STUDENT">학생</label>
										<S.CreateTableRadio type="radio" onChange={(e) => setDocs({ ...docs, docsType: e.target.id })} id="STUDENT" name="radio" />
										<label htmlFor="READONLY">관리자</label>
										<S.CreateTableRadio type="radio" onChange={(e) => setDocs({ ...docs, docsType: e.target.id })} id="READONLY" name="radio" />
									</div>
								)}
								{createFormInitState.map((info, index) => (
									<S.CreateTableRadioBox key={index}>
										<label htmlFor={info.id}>{info.title}</label>
										<S.CreateTableRadio type="radio" onChange={(e) => changeDocsType(e)} id={info.id} name="radio" />
									</S.CreateTableRadioBox>
								))}
								<S.CreateTableSelectBox>
									{createFormInitState.map((info, index) => (
										<S.CreateTableSelectOption key={index} onChange={(e) => changeDocsType(e as React.ChangeEvent<HTMLOptionElement>)} id={info.id}>
											{info.title}
										</S.CreateTableSelectOption>
									))}
								</S.CreateTableSelectBox>
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
							<DragDrop getFiles={setFiles} />
						</S.CreateTableTRFile>
						{docs.docsType === 'FRAME' && (
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
						)}
						<S.CreateTableTRTextContent>
							<S.CreateTableTRTitle>문서 내용</S.CreateTableTRTitle>
							<S.CreateTableTRTextarea
								onKeyDown={(e) => {
									util.onKeyDownUseTab(e)
								}}
								onChange={(e) => setDocs({ ...docs, contents: util.autoClosingTag(e) })}
								value={docs.contents}
							/>
						</S.CreateTableTRTextContent>
						<S.CreateTableTRTextContent>
							<S.CreateTableTRTitle>미리보기</S.CreateTableTRTitle>
							<S.CreateTableTRDiv
								dangerouslySetInnerHTML={{
									__html: util.documentation(docs.contents),
								}}></S.CreateTableTRDiv>
						</S.CreateTableTRTextContent>
					</S.CreateTable>
					<S.CreateSubmit>
						<S.CreateWarn>※ 필독! 문서 내 부적절한 내용을 서술하는 사용자는 부마위키 이용에 제한을 받을 수 있습니다 ※</S.CreateWarn>
						<S.CreateButton onClick={onClickCreateDocs}>문서 생성</S.CreateButton>
					</S.CreateSubmit>
					<SubFooter />
				</Board>
				<ScrollBtn />
				<Aside />
			</S.CreateWrap>
		</>
	)
}

export default Create
