import * as S from './style'
import * as FC from '@/utils'

import React from 'react'
import PrevLogo from 'assets/prev.svg'
import NextLogo from 'assets/next.svg'
import httpClient from '@/lib/httpClient'
import Docs from '@/types/docs.type'
import { useQuery } from 'react-query'
import { getAccessToken } from '@/lib/httpClient/getAccessToken'

const Aside = () => {
	const [page, setPage] = React.useState(0)
	const [lastModifiedDocs, setLastModifiedDocs] = React.useState<Docs[]>([])

	const onGetLastModifiedDocs = async () => {
		return (await httpClient.lastModified.getInQuery('page', page)).data
	}

	const { refetch } = useQuery('getLastModifiedDocs', onGetLastModifiedDocs, {
		onSuccess: (data) => {
			setLastModifiedDocs(data)
		},
		onError: () => getAccessToken(),
	})

	React.useEffect(() => {
		refetch()
	}, [page, refetch])

	return (
		<S.AsideWrap>
			<S.AsideTitleWrap>
				<S.AsideTitle>최근 수정된 문서</S.AsideTitle>
			</S.AsideTitleWrap>
			{lastModifiedDocs.map((docs: Docs) => (
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
				<S.AsidePageButton onClick={() => setPage(lastModifiedDocs.length < 12 ? page : page + 1)}>
					<S.AsidePageText>다음</S.AsidePageText>
					<S.AsideImage src={NextLogo} alt="" />
				</S.AsidePageButton>
			</S.AsidePageWrap>
		</S.AsideWrap>
	)
}

export default Aside
