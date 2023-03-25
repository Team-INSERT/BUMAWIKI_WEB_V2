import * as C from '@/components'
import * as docs from '@/api/getDocs'
import * as S from './style'

import React from 'react'
import Docs from '@/types/docs.type'
import { Helmet } from 'react-helmet'
import DocsPropsType from '@/types/static/docs.props.type'
import { NextSeo, NextSeoProps } from 'next-seo'

const Frame = ({ docs }: DocsPropsType) => {
	const seoConfig: NextSeoProps = {
		title: `부마위키 - 틀`,
		description: `부마위키의 모든 틀을 담은 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 - 틀`,
			description: `부마위키의 모든 틀을 담은 페이지입니다.`,
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
			<S.FrameWrap>
				<C.Board>
					<S.FrameTitleWrap>
						<S.FrameTitleText>부마위키:틀</S.FrameTitleText>
					</S.FrameTitleWrap>
					<S.FrameClassify>
						<C.Classify>틀</C.Classify>
					</S.FrameClassify>
					<S.FrameLine />
					<S.FrameListWrap>
						<C.AccodianMenu name={`틀`}>
							<S.FrameList>
								{docs.map((frame: Docs) => (
									<S.FrameListItem key={frame.id}>
										<S.FrameLink href={`/docs/${frame.title}`}>{frame.title}</S.FrameLink>
									</S.FrameListItem>
								))}
							</S.FrameList>
						</C.AccodianMenu>
					</S.FrameListWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.FrameWrap>
			<C.Footer />
		</>
	)
}

export async function getStaticProps() {
	const frame = await docs.getBaseDocs('frame')

	return {
		props: {
			docs: frame,
		},
	}
}

export default Frame
