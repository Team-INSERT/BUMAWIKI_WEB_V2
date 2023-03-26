import * as S from '../../layout/club/style'
import * as getApi from '@/api/getDocs'

import React, { PropsWithChildren } from 'react'
import Docs from '@/types/docs.type'
import { NextSeo, NextSeoProps } from 'next-seo'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'

interface ClubDocsPropsType {
	docs: {
		major_club: Docs[]
		custom_club: Docs[]
	}
}

const Club = ({ docs }: ClubDocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: '부마위키 - 동아리',
		description: '교내에서 활동하는 모든 동아리를 담은 페이지입니다.',
		openGraph: {
			type: 'website',
			title: '부마위키 - 동아리',
			description: '교내에서 일어나는 모든 동아리를 담은 페이지입니다.',
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
			<S.ClubWrap>
				<Board>
					<S.ClubTitleWrap>
						<S.ClubTitleText>부마위키:동아리</S.ClubTitleText>
					</S.ClubTitleWrap>
					<S.ClubClassify>
						<Classify>동아리</Classify>
					</S.ClubClassify>
					<S.ClubLine />
					<S.ClubListWrap>
						<AccodianMenu name={`전공동아리`}>
							<S.ClubList>
								{docs.major_club.map((club: Docs) => (
									<S.ClubListItem key={club.id}>
										<S.ClubLink href={`/docs/${club.title}`}>{club.title}</S.ClubLink>
									</S.ClubListItem>
								))}
							</S.ClubList>
						</AccodianMenu>
					</S.ClubListWrap>
					<S.ClubListWrap>
						<AccodianMenu name={`사설동아리`}>
							<S.ClubList>
								{docs.custom_club.map((club: Docs) => (
									<S.ClubListItem key={club.id}>
										<S.ClubLink href={`/docs/${club.title}`}>{club.title}</S.ClubLink>
									</S.ClubListItem>
								))}
							</S.ClubList>
						</AccodianMenu>
					</S.ClubListWrap>
					<SubFooter />
				</Board>
				<ScrollBtn />
				<Aside />
			</S.ClubWrap>
		</>
	)
}

export async function getStaticProps() {
	const major_club = await getApi.getBaseDocs('club')
	const custom_club = await getApi.getBaseDocs('free_club')

	return {
		props: {
			docs: {
				major_club,
				custom_club,
			},
		},
	}
}

export default Club
