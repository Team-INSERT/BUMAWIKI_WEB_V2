import { Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'
import Docs from '@/types/docs.type'
import React from 'react'
import * as S from './SearchLayout.style'
import * as util from '@/utils'

interface SearchLayoutPropsType {
	searchValue: string
	results: Docs[]
}

const SearchLayout = ({ searchValue, results }: SearchLayoutPropsType) => {
	return (
		<S.SearchWrap>
			<Board>
				<S.SearchTitleWrap>
					<span>&quot;{searchValue}&quot; 검색결과</span>
				</S.SearchTitleWrap>
				<S.Classify>
					<Classify>검색</Classify>
				</S.Classify>
				<S.SearchLine />
				<S.SearchResult>
					<S.SearchList>
						{results && (
							<>
								{results.map((result: Docs) => (
									<S.SearchListItem key={result.id}>
										<S.SearchLink href={`/docs/${result.title}`}>
											{result.title}&nbsp;
											{result.docsType === 'FRAME' ? null : (
												<span>
													({util.typeEditor(result.docsType)},{result.enroll})
												</span>
											)}
										</S.SearchLink>
									</S.SearchListItem>
								))}
							</>
						)}
						{!results && <S.SearchCreateLink href={`/create?name=${searchValue}`}>검색 결과가 없습니다. 지금 문서를 생성해보세요</S.SearchCreateLink>}
					</S.SearchList>
				</S.SearchResult>
				<SubFooter />
			</Board>
			<ScrollBtn />
			<Aside />
		</S.SearchWrap>
	)
}

export default SearchLayout
