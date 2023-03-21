import * as C from '@/components'
import * as docs from '@/api/getDocs'
import * as S from './style'

import React from 'react'
import { useQuery } from 'react-query'
import Docs from '@/types/docs.type'
import DocsPropsType from '@/types/static/docs.props.type'

const Popular = ({ docs }: DocsPropsType) => {
	return (
		<>
			<C.Header />
			<S.PopularWrap>
				<C.Board>
					<S.PopularTitleWrap>
						<S.PopularTitleText>부마위키:인기문서</S.PopularTitleText>
					</S.PopularTitleWrap>
					<S.PopularClassify>
						<C.Classify>인기문서</C.Classify>
					</S.PopularClassify>
					<S.PopularLine />
					<S.PopularListWrap>
						<C.AccodianMenu name={`인기 문서`}>
							<S.PopularList>
								{docs.map((popular: Docs, index) => (
									<S.PopularListItem key={popular.id}>
										<S.PopularLink href={`/docs/${popular.title}`}>
											{index + 1}위 {popular.title} (조회수 {popular.view})
										</S.PopularLink>
									</S.PopularListItem>
								))}
							</S.PopularList>
						</C.AccodianMenu>
					</S.PopularListWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.PopularWrap>
			<C.Footer />
		</>
	)
}

export async function getStaticProps() {
	const popular = await docs.getBaseDocs('find/popular')

	return {
		props: {
			docs: popular,
		},
	}
}

export default Popular
