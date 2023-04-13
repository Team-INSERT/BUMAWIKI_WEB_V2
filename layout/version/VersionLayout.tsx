import { Aside, Board, ScrollBtn, SubFooter } from '@/components'
import { VersionDocs } from '@/types/version.type'
import React from 'react'
import * as S from './VersionLayout.style'
import * as util from '@/utils'

interface VersionLayoutPropsType {
	version: VersionDocs[]
	docsName: string
	index: number
}

const VersionLayout = ({ docsName, version, index }: VersionLayoutPropsType) => {
	return (
		<S.VersionWrap>
			<Board>
				<S.VersionTitleWrap>
					<S.VersionTitleText>문서 수정 기록 : {docsName}</S.VersionTitleText>
				</S.VersionTitleWrap>
				<S.VersionLine />
				<S.VersionContentsWrap>
					<ul>
						{version.map((ver: VersionDocs) => {
							index -= 1
							return (
								<S.VersionList key={ver.thisVersionCreatedAt}>
									<S.VersionBox>
										<S.VersionLink href={`/version/${docsName}/detail/${index}`}>
											[{index}]{util.dateParser(ver.thisVersionCreatedAt)}
										</S.VersionLink>
									</S.VersionBox>
									<S.VersionBox>
										작성자 : <S.VersionLink href={`/user/${ver.userId}`}>{ver.nickName}</S.VersionLink>
									</S.VersionBox>
								</S.VersionList>
							)
						})}
					</ul>
				</S.VersionContentsWrap>
				<SubFooter />
			</Board>
			<ScrollBtn />
			<Aside />
		</S.VersionWrap>
	)
}

export default VersionLayout
