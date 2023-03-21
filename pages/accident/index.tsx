import * as C from '@/components'
import * as docs from '@/api/getDocs'
import * as user from '@/api/user'
import * as S from './style'
import * as FC from '@/utils'

import React from 'react'
import Docs from '@/types/docs.type'
import DocsPropsType from '@/types/static/docs.props.type'

const Accident = ({ docs, years }: DocsPropsType) => {
	return (
		<>
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
								{docs.map((accident: Docs, index) => (
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

export async function getStaticProps() {
	const accident = await docs.getBaseDocs('accident')
	const years = FC.getAllYear()

	return {
		props: {
			docs: accident,
			years,
		},
	}
}

export default Accident
