import * as S from '../layout/index.style'

import React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import { Aside, Board, ScrollBtn } from '@/components'

const NotFound = () => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 - 404 Not Found`,
		description: `오류가 발생했습니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 - 404 Not Found`,
			description: `오류가 발생했습니다.`,
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
			<S.NotFoundWrap>
				<Board>
					<S.NotFound>404 Not Found</S.NotFound>
				</Board>
				<Aside />
				<ScrollBtn />
			</S.NotFoundWrap>
		</>
	)
}

export default NotFound
