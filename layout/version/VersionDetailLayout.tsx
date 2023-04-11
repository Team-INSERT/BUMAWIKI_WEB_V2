import React from 'react'
import * as S from './VersionLayout.style'
import * as util from '@/utils'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'
import { decodeContents } from '@/utils/document/requestContents'
import { VersionDocsService } from '@/types/version.type'

interface VersionDetailLayoutPropsType {
	title: string
	docsType: string
	docs: VersionDocsService
}

const VersionDetailLayout = ({ title, docsType, docs }: VersionDetailLayoutPropsType) => {
	return (
		<S.VersionWrap>
			<Board>
				<S.VersionTitleWrap>
					<S.VersionTitleText>{title}</S.VersionTitleText>
				</S.VersionTitleWrap>
				<S.Classify>
					<Classify>{util.typeEditor(docsType)}</Classify>
				</S.Classify>
				<S.VersionLine />
				<S.VersionContentsWrap>
					{docs && (
						<S.VersionContentsLoadWrap>
							<S.LastUpdateDate>
								마지막 수정 : {util.dateParser(docs.thisVersionCreatedAt || '')} | 수정자 : {docs.nickName}
							</S.LastUpdateDate>
							<AccodianMenu name="코드 내용" isOpen={false}>
								<S.VersionContents>{docs?.contents.replace(/<br>/gi, '\n').replace(/&\$\^%/gi, '"')}</S.VersionContents>
							</AccodianMenu>
							<AccodianMenu name="개요">
								<S.VersionContents
									dangerouslySetInnerHTML={{
										__html: util.documentation(decodeContents(docs.contents)),
									}}></S.VersionContents>
							</AccodianMenu>
						</S.VersionContentsLoadWrap>
					)}
				</S.VersionContentsWrap>
				<SubFooter />
			</Board>
			<ScrollBtn />
			<Aside />
		</S.VersionWrap>
	)
}

export default VersionDetailLayout
