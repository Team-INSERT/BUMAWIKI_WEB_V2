import { Aside, Board, ScrollBtn, SubFooter } from '@/components'
import { VersionDocs } from '@/types/version.type'
import React from 'react'
import * as S from './VersionLayout.style'
import * as util from '@/utils'

interface VersionLayoutPropsType {
	version: VersionDocs[]
	docsName: string
}

const VersionLayout = ({ docsName, version }: VersionLayoutPropsType) => {
	return (
		<S.VersionWrap>
			<Board>
				<S.VersionTitleWrap>
					<S.VersionTitleText>문서 수정 기록 : {docsName}</S.VersionTitleText>
				</S.VersionTitleWrap>
				<S.VersionLine />
				<S.VersionContentsWrap>
					<ul>
						{version.map((ver: VersionDocs, index: number) => (
							<S.VersionList key={index}>
								<span>
									<S.VersionLink href={`/version/${docsName}/detail/${index}`}>{util.dateParser(ver.thisVersionCreatedAt)}</S.VersionLink>
								</span>
								<span>
									작성자 : <S.VersionLink href={`/user/${ver.userId}`}>{ver.nickName}</S.VersionLink>
								</span>
							</S.VersionList>
						))}
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
