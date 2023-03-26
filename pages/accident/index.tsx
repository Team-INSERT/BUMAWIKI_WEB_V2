import * as docs from '@/api/getDocs'
import * as S from '../../layout/accident/style'
import * as util from '@/utils'

import React from 'react'
import Docs from '@/types/docs.type'
import DocsPropsType from '@/types/static/docs.props.type'
import { NextSeo, NextSeoProps } from 'next-seo'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'

const Accident = ({ docs, years }: DocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: '부마위키 - 사건/사고',
		description: '교내에서 일어나는 모든 사건/사고를 담은 페이지입니다.',
		openGraph: {
			type: 'website',
			title: '부마위키 - 사건/사고',
			description: '교내에서 일어나는 모든 사건/사고를 담은 페이지입니다.',
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
			<S.AccidentWrap>
				<Board>
					<S.AccidentTitleWrap>
						<S.AccidentTitleText>부마위키:사건/사고</S.AccidentTitleText>
					</S.AccidentTitleWrap>
					<S.AccidentClassify>
						<Classify>사건/사고</Classify>
					</S.AccidentClassify>
					<S.AccidentLine />
					<S.AccidentListWrap>
						{years.map((year) => (
							<AccodianMenu name={`${year}년 사건/사고`} key={year} isOpen={true}>
								{docs.map((accident: Docs, index) => (
									<S.AccidentList key={index}>
										{accident.enroll === year && (
											<S.AccidentListItem>
												<S.AccidentLink href={`/docs/${accident.title}`}>{accident.title}</S.AccidentLink>
											</S.AccidentListItem>
										)}
									</S.AccidentList>
								))}
							</AccodianMenu>
						))}
					</S.AccidentListWrap>
					<SubFooter />
				</Board>
				<ScrollBtn />
				<Aside />
			</S.AccidentWrap>
		</>
	)
}

export async function getStaticProps() {
	const accident = await docs.getBaseDocs('accident')
	const years = util.getAllYear()

	return {
		props: {
			docs: accident,
			years,
		},
	}
}

export default Accident
