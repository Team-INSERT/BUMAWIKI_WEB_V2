import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'
import Docs from '@/types/docs.type'
import React from 'react'
import * as S from './StaticLayout.style'

interface FrameLayoutPropsType {
	docs: Docs[]
}

const FrameLayout = ({ docs }: FrameLayoutPropsType) => {
	return (
		<S.StaticWrap>
			<Board>
				<S.StaticTitleWrap>
					<S.StaticTitleText>부마위키:틀</S.StaticTitleText>
				</S.StaticTitleWrap>
				<S.StaticClassify>
					<Classify>틀</Classify>
				</S.StaticClassify>
				<S.StaticLine />
				<S.StaticListWrap>
					<AccodianMenu name={`틀`}>
						<S.StaticList>
							{docs.map((docs: Docs) => (
								<S.StaticListItem key={docs.id}>
									<S.StaticLink href={`/docs/${docs.title}`}>{docs.title}</S.StaticLink>
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

export default FrameLayout
