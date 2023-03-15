import * as S from './style'
import * as FC from '@/utils'
import * as api from '@/api/getDocs'

import React from 'react'
import Docs from '@/types/docs.type'
import { useQuery } from 'react-query'

const Aside = () => {
	const { data } = useQuery('lastModifiedDocs', api.getLastModifiedDocs)

	return (
		<S.AsideWrap>
			<S.AsideTitleWrap>
				<S.AsideTitle>최근 수정된 문서</S.AsideTitle>
			</S.AsideTitleWrap>
			{data?.map((docs: Docs) => (
				<S.AsideDocWrap key={docs.id}>
					<S.AsideList href={`/docs/${docs.title}`}>{FC.asideFormat(docs.title, docs.docsType)}</S.AsideList>
					<S.AsideLastModified>&nbsp; {FC.getLastDate(docs.lastModifiedAt)}</S.AsideLastModified>
				</S.AsideDocWrap>
			))}
		</S.AsideWrap>
	)
}

export default Aside
