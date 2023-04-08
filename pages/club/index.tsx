import React from 'react'
import Docs from '@/types/docs.type'
import { NextSeo, NextSeoProps } from 'next-seo'
import ClubLayout from '@/layout/ClubLayout'
import httpClient from '@/lib/httpClient'

interface ClubDocsPropsType {
	major_club: Docs[]
	custom_club: Docs[]
}

const Club = (props: ClubDocsPropsType) => {
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
			<ClubLayout {...props} />
		</>
	)
}

export async function getStaticProps() {
	const major_club = (await httpClient.static.getByTitle('club')).data
	const custom_club = (await httpClient.static.getByTitle('free_club')).data

	return {
		props: {
			major_club,
			custom_club,
		},
	}
}

export default Club
