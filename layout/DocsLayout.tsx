import { AccodianMenu, Aside, Board, Classify, DetailBtn, ScrollBtn, SubFooter } from '@/components'
import React from 'react'
import * as S from './DocsLayout.style'
import * as util from '@/utils'
import Docs from '@/types/docs.type'
import Like from 'assets/like.svg'
import LikeClick from 'assets/like_click.svg'
import { decodeContents } from '@/utils/document/requestContents'
import { Id } from 'react-toastify'

interface DocsLayoutPropsType {
	docs: Docs
	onChangeLike: () => Id | undefined
	count: number
	like: boolean
}

const DocsLayout = ({ docs, onChangeLike, count, like }: DocsLayoutPropsType) => {
	return (
		<S.DocsWrap>
			<Board>
				<S.DocsTitleWrap>
					<S.DocsTitleText>{decodeContents(docs.title)}</S.DocsTitleText>
					<S.DocsMenu>
						<DetailBtn docsId={docs.id} />
					</S.DocsMenu>
				</S.DocsTitleWrap>
				<S.Classify>
					<Classify>{util.typeEditor(docs.docsType as string)}</Classify>
				</S.Classify>
				<S.DocsLine />
				<S.DocsContentsWrap>
					<S.DocsContentsLoadWrap>
						<S.DocsLikeWrap onClick={onChangeLike}>
							<S.DocsLikeCount>좋아요 {count}개</S.DocsLikeCount>
							<S.DocsLikeIcon src={like ? LikeClick : Like} alt="" />
						</S.DocsLikeWrap>
						<S.LastUpdateDate>마지막 수정 : {util.dateParser(!!docs && docs.lastModifiedAt)}</S.LastUpdateDate>
						<AccodianMenu name="내용">
							<S.DocsContents
								dangerouslySetInnerHTML={{
									__html: util.documentation(decodeContents(docs.contents || '')),
								}}></S.DocsContents>
						</AccodianMenu>
					</S.DocsContentsLoadWrap>
				</S.DocsContentsWrap>
				<SubFooter />
			</Board>
			<ScrollBtn />
			<Aside />
		</S.DocsWrap>
	)
}

export default DocsLayout
