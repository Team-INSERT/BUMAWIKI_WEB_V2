import * as docs from '@/api/getDocs'
import * as S from '../../layout/frame/style'

import React, { PropsWithChildren } from 'react'
import Docs from '@/types/docs.type'
import DocsPropsType from '@/types/static/docs.props.type'
import { NextSeo, NextSeoProps } from 'next-seo'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn, SubFooter } from '@/components'

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
			<S.FrameWrap>
				<Board>
					<S.FrameTitleWrap>
						<S.FrameTitleText>부마위키:틀</S.FrameTitleText>
					</S.FrameTitleWrap>
					<S.FrameClassify>
						<Classify>틀</Classify>
					</S.FrameClassify>
					<S.FrameLine />
					<S.FrameListWrap>
						<AccodianMenu name={`틀`}>
							<S.FrameList>
								{docs.map((frame: Docs) => (
									<S.FrameListItem key={frame.id}>
										<S.FrameLink href={`/docs/${frame.title}`}>{frame.title}</S.FrameLink>
									</S.FrameListItem>
								))}
							</S.FrameList>
						</AccodianMenu>
					</S.FrameListWrap>
					<SubFooter />
				</Board>
				<ScrollBtn />
				<Aside />
			</S.FrameWrap>
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
