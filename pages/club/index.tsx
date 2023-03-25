import * as C from '@/components'
import * as S from '../../layout/club/style'
import * as docs from '@/api/getDocs'

import React from 'react'
import axios from 'axios'
import Docs from '@/types/docs.type'
import { NextSeo, NextSeoProps } from 'next-seo'

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
			<C.Header />
			<S.ClubWrap>
				<C.Board>
					<S.ClubTitleWrap>
						<S.ClubTitleText>부마위키:동아리</S.ClubTitleText>
					</S.ClubTitleWrap>
					<S.ClubClassify>
						<C.Classify>동아리</C.Classify>
					</S.ClubClassify>
					<S.ClubLine />
					<S.ClubListWrap>
						<C.AccodianMenu name={`전공동아리`}>
							<S.ClubList>
								{docs.major_club.map((club: Docs) => (
									<S.ClubListItem key={club.id}>
										<S.ClubLink href={`/docs/${club.title}`}>{club.title}</S.ClubLink>
									</S.ClubListItem>
								))}
							</S.ClubList>
						</C.AccodianMenu>
					</S.ClubListWrap>
					<S.ClubListWrap>
						<C.AccodianMenu name={`사설동아리`}>
							<S.ClubList>
								{docs.custom_club.map((club: Docs) => (
									<S.ClubListItem key={club.id}>
										<S.ClubLink href={`/docs/${club.title}`}>{club.title}</S.ClubLink>
									</S.ClubListItem>
								))}
							</S.ClubList>
						</C.AccodianMenu>
					</S.ClubListWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.ClubWrap>
			<C.Footer />
		</>
	)
}

export async function getStaticProps() {
	const major_club = await docs.getBaseDocs('club')
	const custom_club = await docs.getBaseDocs('free_club')

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
