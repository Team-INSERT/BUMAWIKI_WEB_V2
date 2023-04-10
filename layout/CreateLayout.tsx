import React from 'react'
import { Aside, Board, ScrollBtn, SubFooter } from '@/components'
import * as S from './CreateLayout.style'
import * as util from '@/utils'
import DragDrop, { IFileTypes } from '@/components/DragDrop'
import UserType from '@/types/user.type'
import CreateDocsType from '@/types/create.type'
import FrameType from '@/types/frame.type'
import CreateFormType from '@/types/createForm.type'

interface CreateLayoutPropsType {
	userInfo: UserType
	setDocs: React.Dispatch<React.SetStateAction<CreateDocsType>>
	docs: CreateDocsType
	createForm: CreateFormType[]
	years: number[]
	getFiles: (file: IFileTypes[]) => void
	size: FrameType
	setSize: React.Dispatch<React.SetStateAction<FrameType>>
	makeFrame: () => void
	onClickCreateDocs: () => void
	changeDocsType: (e: React.ChangeEvent<HTMLInputElement | HTMLOptionElement>) => void
}

const CreateLayout = ({
	userInfo,
	setDocs,
	docs,
	createForm,
	years,
	getFiles,
	size,
	setSize,
	makeFrame,
	onClickCreateDocs,
	changeDocsType,
}: CreateLayoutPropsType) => {
	return (
		<S.CreateWrap>
			<Board>
				<S.CreateTitleWrap>
					<S.CreateTitleText>문서 생성</S.CreateTitleText>
				</S.CreateTitleWrap>
				<S.CreateTB>
					<tbody>
						<S.CreateTR>
							<S.CreateTDTitle>분류</S.CreateTDTitle>
							<S.CreateTDDisplay>
								{userInfo.authority === 'ADMIN' && (
									<>
										<label htmlFor="STUDENT">학생</label>
										<S.CreateTableRadio type="radio" onChange={(e) => setDocs({ ...docs, docsType: e.target.id })} id="STUDENT" name="radio" />
										<label htmlFor="READONLY">관리자</label>
										<S.CreateTableRadio type="radio" onChange={(e) => setDocs({ ...docs, docsType: e.target.id })} id="READONLY" name="radio" />
									</>
								)}
								{createForm.map((info) => (
									<S.CreateTableRadioBox key={info.id}>
										<label htmlFor={info.id}>{info.title}</label>
										<S.CreateTableRadio type="radio" onChange={(e) => changeDocsType(e)} id={info.id} name="radio" />
									</S.CreateTableRadioBox>
								))}
								<S.CreateTableSelectBox>
									{createForm.map((info) => (
										<S.CreateTableSelectOption key={info.id} onChange={(e) => changeDocsType(e as React.ChangeEvent<HTMLOptionElement>)} id={info.id}>
											{info.title}
										</S.CreateTableSelectOption>
									))}
								</S.CreateTableSelectBox>
							</S.CreateTDDisplay>
						</S.CreateTR>
						<S.CreateTR>
							<S.CreateTDTitle>문서 이름</S.CreateTDTitle>
							<S.CreateTD>
								<S.CreateTableTRInputContents onChange={(e) => setDocs({ ...docs, title: e.target.value })} value={docs.title} />
							</S.CreateTD>
						</S.CreateTR>
						<S.CreateTR>
							<S.CreateTDTitle>연도</S.CreateTDTitle>
							<S.CreateTDDisplay>
								{years.map((year) => (
									<div key={year}>
										<S.EnrollLabel htmlFor={`${year}`}>{year}년</S.EnrollLabel>
										<S.CreateTableRadio
											type="radio"
											onChange={(e) => setDocs({ ...docs, enroll: parseInt(e.target.id) })}
											id={`${year}`}
											name="radios"
										/>
									</div>
								))}
							</S.CreateTDDisplay>
						</S.CreateTR>
						<S.CreateTR>
							<S.CreateTDTitle>예시</S.CreateTDTitle>
							<S.CreateTD>
								<S.ExampleImage src="/images/references.png" alt="문서 양식" />
							</S.CreateTD>
						</S.CreateTR>
						<S.CreateTR>
							<S.CreateTDTitle>이미지</S.CreateTDTitle>
							<S.CreateTD>
								<DragDrop getFiles={getFiles} />
							</S.CreateTD>
						</S.CreateTR>
						{docs.docsType === 'FRAME' && (
							<S.CreateTR>
								<S.CreateTDTitle>틀 규격</S.CreateTDTitle>
								<S.CreateTD>
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
								</S.CreateTD>
							</S.CreateTR>
						)}
						<S.CreateTR>
							<S.CreateTDTitle>문서 내용</S.CreateTDTitle>
							<S.CreateTD>
								<S.CreateTableTRTextarea
									onKeyDown={(e) => {
										util.onKeyDownUseTab(e)
									}}
									onChange={(e) => setDocs({ ...docs, contents: util.autoClosingTag(e) })}
									value={docs.contents}
								/>
							</S.CreateTD>
						</S.CreateTR>
						<S.CreateTR>
							<S.CreateTDTitle>미리보기</S.CreateTDTitle>
							<S.CreateTDDiv
								dangerouslySetInnerHTML={{
									__html: util.documentation(docs.contents),
								}}></S.CreateTDDiv>
						</S.CreateTR>
					</tbody>
				</S.CreateTB>
				<S.CreateSubmit>
					<S.CreateWarn>※ 필독! 문서 내 부적절한 내용을 서술하는 사용자는 부마위키 이용에 제한을 받을 수 있습니다 ※</S.CreateWarn>
					<S.CreateButton onClick={onClickCreateDocs}>문서 생성</S.CreateButton>
				</S.CreateSubmit>
				<SubFooter />
			</Board>
			<ScrollBtn />
			<Aside />
		</S.CreateWrap>
	)
}

export default CreateLayout
