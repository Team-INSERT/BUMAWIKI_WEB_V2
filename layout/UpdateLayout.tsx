import React from 'react'
import * as S from './UpdateLayout.style'
import * as util from '@/utils'

import { Aside, Board, ScrollBtn, SubFooter } from '@/components'
import DragDrop from '@/components/DragDrop'
import theme from '@/styles/theme'
import Image from 'next/image'
import Check from 'assets/check.svg'
import { decodeContents } from '@/utils/document/requestContents'
import UpdateDocsType from '@/types/update.type.'
import FileListArray from '@/types/filelistArray.type'

interface UpdateLayoutPropsType {
	docs: UpdateDocsType
	setDocs: React.Dispatch<React.SetStateAction<UpdateDocsType>>
	setFiles: (file: FileListArray[]) => void
	onClickAutoComplete: () => void
	isOnAutoComplete: any
	textareaRef: React.RefObject<HTMLTextAreaElement>
	onClickUpdateDocs: () => Promise<void>
}

const UpdateLayout = ({ docs, setDocs, setFiles, onClickAutoComplete, isOnAutoComplete, textareaRef, onClickUpdateDocs }: UpdateLayoutPropsType) => {
	return (
		<S.DocsWrap>
			<Board>
				<S.DocsTitleWrap>
					<S.DocsTitleText>문서 편집 : {docs.title}</S.DocsTitleText>
				</S.DocsTitleWrap>
				<S.DocsExampleImage src="/images/references.png" alt="문서작성법" />
				<S.DocsLine />
				<DragDrop getFiles={setFiles} />
				<S.DocsContentsWrap>
					<S.AutoCompleteToggleWrap onClick={onClickAutoComplete}>
						<S.AutoCompleteToggleText>자동완성</S.AutoCompleteToggleText>
						<S.AutoCompleteToggleButton color={isOnAutoComplete ? theme.primary : theme.white}>
							<Image src={Check} alt="" />
						</S.AutoCompleteToggleButton>
					</S.AutoCompleteToggleWrap>
					<S.UpdateTextarea
						ref={textareaRef}
						onKeyDown={(e) => util.onKeyDownUseTab(e)}
						onChange={(e) => setDocs(isOnAutoComplete ? { ...docs, contents: util.autoClosingTag(e) } : { ...docs, contents: e.target.value })}
						value={decodeContents(docs.contents || '')}
					/>
					<S.UpdatePreviewText>미리보기</S.UpdatePreviewText>
					<S.UpdatePreview
						dangerouslySetInnerHTML={{
							__html: util.documentation(docs.contents),
						}}
					/>
					<S.UpdateSubmit>
						<S.UpdateWarn>※ 타인에 대한 조롱 또는 비방, 비난으로 인해 발생하는 문제에 대한 책임은 본인에게 있습니다. 주의해주세요! ※</S.UpdateWarn>
						<S.UpdateButton onClick={onClickUpdateDocs}>문서 업데이트</S.UpdateButton>
					</S.UpdateSubmit>
				</S.DocsContentsWrap>
				<SubFooter />
			</Board>
			<ScrollBtn />
			<Aside />
		</S.DocsWrap>
	)
}

export default UpdateLayout
