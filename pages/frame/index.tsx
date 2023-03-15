import * as C from '@/components'
import * as api from '@/api/getDocs'
import * as S from './style'

import React from 'react'
import { useQuery } from 'react-query'
import Docs from '@/types/docs.type'
import { Helmet } from 'react-helmet'

const Frame = () => {
	const [frames, setFrames] = React.useState([])

	useQuery('getFrame', () => api.getBaseDocs('frame'), {
		onSuccess: (res) => {
			const data = res.sort((a: Docs, b: Docs) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1))
			setFrames(data)
		},
	})

	return (
		<>
			<Helmet>
				<meta property="og:title" content="부마위키 - 틀" />
				<meta property="og:image" content="images/meta-img.png" />
				<meta property="og:description" content="여러분이 가꾸어 나가는 역사의 고서 - 틀" />
				<link href="images/icon.ico" rel="shortcut icon" type="image/x-icon" />
				<title>부마위키 - 틀</title>
			</Helmet>
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
								{frames.map((frame: Docs) => (
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

export default Frame
