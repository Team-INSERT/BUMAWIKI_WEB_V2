import React from 'react'
import * as S from './VersionLayout.style'
import * as util from '@/utils'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'
import { VersionDetailPropsType } from '@/types/versionDetail.type'
import { decodeContents } from '@/utils/document/requestContents'
import versionFilter from '@/utils/etc/versionFilter'

const VersionDetailLayout = ({ different }: VersionDetailPropsType) => {
	return (
		<S.VersionWrap>
			<Board>
				<S.VersionTitleWrap>
					<S.VersionTitleText>{different.title}</S.VersionTitleText>
				</S.VersionTitleWrap>
				<S.Classify>
					<Classify>{util.typeEditor(different.docsType)}</Classify>
				</S.Classify>
				<S.VersionLine />
				<S.VersionContentsWrap>
					<S.VersionContentsLoadWrap>
						<S.LastUpdateDate>작성자 : {different.versionDocs.nickName}</S.LastUpdateDate>
						<S.LastUpdateDate>마지막 수정 : {util.dateParser(different.versionDocs.thisVersionCreatedAt)}</S.LastUpdateDate>
						<AccodianMenu name="개요">
							{different.diff.map(({ operation, text }, index) => {
								const version = versionFilter(operation)
								return (
									<S.VersionContentsContainer color={version.color} key={index}>
										<S.VersionContentsIconBox color={version.color}>{version.text}</S.VersionContentsIconBox>
										<S.VersionContents color={version.color}>{decodeContents(text)}</S.VersionContents>
									</S.VersionContentsContainer>
								)
							})}
						</AccodianMenu>
					</S.VersionContentsLoadWrap>
				</S.VersionContentsWrap>
				<SubFooter />
			</Board>
			<ScrollBtn />
			<Aside />
		</S.VersionWrap>
	)
}

export default VersionDetailLayout
