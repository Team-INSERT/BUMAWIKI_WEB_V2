import { AccodianMenu, Aside, Board, Classify, DetailBtn, ScrollBtn, SubFooter } from '@/components'
import React from 'react'
import * as S from './DocsLayout.style'
import * as util from '@/utils'
import Docs from '@/types/docs.type'
import { decodeContents } from '@/utils/document/requestContents'
import bumawikiEditor from 'bumawiki-editor'

interface DocsLayoutPropsType {
	docs: Docs
}

const DocsLayout = ({ docs }: DocsLayoutPropsType) => {
	return (
		<S.DocsWrap>
			<Board>
				<S.DocsTitleWrap>
					<S.DocsTitleText>{docs?.title.replace(/&\$\^%/gi, '"')}</S.DocsTitleText>
					<S.DocsMenu>
						<DetailBtn docsId={docs?.id || -1} />
					</S.DocsMenu>
				</S.DocsTitleWrap>
				<S.Classify>
					<Classify>{util.typeEditor(docs?.docsType as string)}</Classify>
				</S.Classify>
				<S.DocsLine />
				<S.DocsContentsWrap>
					<S.DocsContentsLoadWrap>
						<S.LastUpdateDate>마지막 수정 : {util.dateParser(docs !== undefined ? docs.lastModifiedAt : '')}</S.LastUpdateDate>
						<AccodianMenu name="내용">
							<S.DocsContents
								dangerouslySetInnerHTML={{
									__html: bumawikiEditor(decodeContents(docs?.contents || '')),
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
