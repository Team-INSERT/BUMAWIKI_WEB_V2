import React from 'react'
import * as S from './VersionLayout.style'
import * as util from '@/utils'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'
import { VersionDetailPropsType } from '@/types/versionDetail.type'
import { decodeContents } from '@/utils/document/requestContents'
import theme from '@/styles/theme'
import versionFilter from '@/utils/etc/versionFilter'

const VersionDetailLayout = ({ info, versionId, different }: VersionDetailPropsType) => {
	console.log(info)
	return (
		<S.VersionWrap>
			<Board>
				<S.VersionTitleWrap>
					<S.VersionTitleText>{info.title}</S.VersionTitleText>
				</S.VersionTitleWrap>
				<S.Classify>
					<Classify>{util.typeEditor(info.docsType)}</Classify>
				</S.Classify>
				<S.VersionLine />
				<S.VersionContentsWrap>
					<S.VersionContentsLoadWrap>
						<S.LastUpdateDate>마지막 수정 : {util.dateParser(info.thisVersionCreatedAt || '')}</S.LastUpdateDate>
						<AccodianMenu name="개요">
							{different.map(({ operation, text }, index) => {
								const version = versionFilter(operation)
								return (
									<S.VersionContentsContainer color={version.color} key={index}>
										<S.VersionContentsIconBox color={version.color}>{version.text}</S.VersionContentsIconBox>
										<S.VersionContents
											color={version.color}
											dangerouslySetInnerHTML={{
												__html: decodeContents(text),
											}}
										/>
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
