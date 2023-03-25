import * as C from '@/components'
import * as S from '../layout/index.style'

import React from 'react'
import { NextSeoProps } from 'next-seo'

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
			<C.Header />
			<S.NotFoundWrap>
				<C.Board>
					<S.NotFound>404 Not Found</S.NotFound>
				</C.Board>
				<C.Aside />
			</S.NotFoundWrap>
			<C.Footer />
		</>
	)
}

export default NotFound
