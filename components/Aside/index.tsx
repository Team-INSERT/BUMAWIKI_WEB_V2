import * as S from './style'
import * as FC from '@/utils'
import * as api from '@/api/getDocs'

import React from 'react'
import Docs from '@/types/docs.type'
import PrevLogo from 'assets/prev.svg'
import NextLogo from 'assets/next.svg'
import { useQuery } from 'react-query'

const Aside = () => {
	const [page, setPage] = React.useState(0)
	const { data, refetch } = useQuery('lastModifiedDocs', () => api.getLastModifiedDocs(page))

	React.useEffect(() => {
		refetch()
		// eslint-disable-next-line
	}, [page])

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
			<S.AsidePageWrap>
				<S.AsidePageButton onClick={() => setPage(page > 0 ? page - 1 : page)}>
					<S.AsideImage src={PrevLogo} alt="" />
					<S.AsidePageText>이전</S.AsidePageText>
				</S.AsidePageButton>
				<S.AsidePageButton onClick={() => setPage(data.length < 12 ? page : page + 1)}>
					<S.AsidePageText>다음</S.AsidePageText>
					<S.AsideImage src={NextLogo} alt="" />
				</S.AsidePageButton>
			</S.AsidePageWrap>
		</S.AsideWrap>
	)
}

export default React.memo(Aside)
