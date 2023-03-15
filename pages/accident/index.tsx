import * as C from '@/components'
import * as api from '@/api/getDocs'
import * as S from './style'
import * as FC from '@/utils'

import React from 'react'
import { useQuery } from 'react-query'
import Docs from '@/types/docs.type'
import { Helmet } from 'react-helmet'

const Accident = () => {
	const [accidents, setAccidents] = React.useState([])
	const years = FC.getAllYear()

	useQuery('getAccident', () => api.getBaseDocs('accident'), {
		onSuccess: (res) => {
			const data = res.sort((a: Docs, b: Docs) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1))
			setAccidents(data)
		},
	})

	return (
		<>
			<Helmet>
				<meta property="og:title" content={`부마위키 - 사건/사고`} />
				<meta property="og:image" content="images/meta-img.png" />
				<meta property="og:description" content="여러분이 가꾸어 나가는 역사의 고서 - 사건/사고" />
				<link href="images/icon.ico" rel="shortcut icon" type="image/x-icon" />
				<title>부마위키 - 사건/사고</title>
			</Helmet>
			<C.Header />
			<S.AccidentWrap>
				<C.Board>
					<S.AccidentTitleWrap>
						<S.AccidentTitleText>부마위키:사건/사고</S.AccidentTitleText>
					</S.AccidentTitleWrap>
					<S.AccidentClassify>
						<C.Classify>사건/사고</C.Classify>
					</S.AccidentClassify>
					<S.AccidentLine />
					<S.AccidentListWrap>
						{years.map((year) => (
							<C.AccodianMenu name={`${year}년 사건/사고`} key={year}>
								{accidents.map((accident: Docs, index) => (
									<S.AccidentList key={index}>
										{accident.enroll === year ? (
											<S.AccidentListItem>
												<S.AccidentLink href={`/docs/${accident.title}`}>{accident.title}</S.AccidentLink>
											</S.AccidentListItem>
										) : (
											''
										)}
									</S.AccidentList>
								))}
							</C.AccodianMenu>
						))}
					</S.AccidentListWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.AccidentWrap>
			<C.Footer />
		</>
	)
}

export default Accident
