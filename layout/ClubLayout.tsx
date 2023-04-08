import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'
import Docs from '@/types/docs.type'
import React from 'react'
import * as S from './StaticLayout.style'

interface ClubLayoutPropsType {
	major_club: Docs[]
	custom_club: Docs[]
}

const ClubLayout = ({ major_club, custom_club }: ClubLayoutPropsType) => {
	return (
		<S.StaticWrap>
			<Board>
				<S.StaticTitleWrap>
					<S.StaticTitleText>부마위키:동아리</S.StaticTitleText>
				</S.StaticTitleWrap>
				<S.StaticClassify>
					<Classify>동아리</Classify>
				</S.StaticClassify>
				<S.StaticLine />
				<S.StaticListWrap>
					<AccodianMenu name={`전공동아리`}>
						<S.StaticList>
							{major_club.map((club: Docs) => (
								<S.StaticListItem key={club.id}>
									<S.StaticLink href={`/docs/${club.title}`}>{club.title}</S.StaticLink>
								</S.StaticListItem>
							))}
						</S.StaticList>
					</AccodianMenu>
				</S.StaticListWrap>
				<S.StaticListWrap>
					<AccodianMenu name={`사설동아리`}>
						<S.StaticList>
							{custom_club.map((club: Docs) => (
								<S.StaticListItem key={club.id}>
									<S.StaticLink href={`/docs/${club.title}`}>{club.title}</S.StaticLink>
								</S.StaticListItem>
							))}
						</S.StaticList>
					</AccodianMenu>
				</S.StaticListWrap>
				<SubFooter />
			</Board>
			<ScrollBtn />
			<Aside />
		</S.StaticWrap>
	)
}

export default ClubLayout
