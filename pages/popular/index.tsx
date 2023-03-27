import * as getApi from '@/api/getDocs'
import * as S from '../../layout/popular/style'

import React from 'react'
import Docs from '@/types/docs.type'
import DocsPropsType from '@/types/static/docs.props.type'
import { NextSeo, NextSeoProps } from 'next-seo'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'

const Popular = ({ docs }: DocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 - 인기문서`,
		description: `부마위키 문서 중 인기있는 문서를 담은 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 - 인기문서`,
			description: `부마위키 문서 중 인기있는 문서를 담은 페이지입니다.`,
			images: [
				{
					url: '/images/meta-img.png',
				},
			],
		},
	}

	return (
		<>
			<NextSeo {...seoConfig} />
			<S.PopularWrap>
				<Board>
					<S.PopularTitleWrap>
						<S.PopularTitleText>부마위키:인기문서</S.PopularTitleText>
					</S.PopularTitleWrap>
					<S.PopularClassify>
						<Classify>인기문서</Classify>
					</S.PopularClassify>
					<S.PopularLine />
					<S.PopularListWrap>
						<AccodianMenu name={`인기 문서`}>
							<S.PopularList>
								{docs.map((popular: Docs, index) => (
									<S.PopularListItem key={popular.id}>
										<S.PopularLink href={`/docs/${popular.title}`}>
											{index + 1}위 {popular.title} (조회수 {popular.view})
										</S.PopularLink>
									</S.PopularListItem>
								))}
							</S.PopularList>
						</AccodianMenu>
					</S.PopularListWrap>
					<SubFooter />
				</Board>
				<ScrollBtn />
				<Aside />
			</S.PopularWrap>
		</>
	)
}

export async function getStaticProps() {
	const popular = await getApi.getBaseDocs('find/popular')

	return {
		props: {
			docs: popular.slice(0, 30),
		},
	}
}

export default Popular
