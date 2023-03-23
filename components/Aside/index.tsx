import * as S from './style'
import * as FC from '@/utils'
import * as api from '@/api/getDocs'

import React from 'react'
import Docs from '@/types/docs.type'
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
					<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.773 19.3793L0.347998 10.9793C0.247998 10.8793 0.177331 10.771 0.135998 10.6543C0.093998 10.5377 0.072998 10.4127 0.072998 10.2793C0.072998 10.146 0.093998 10.021 0.135998 9.90432C0.177331 9.78766 0.247998 9.67932 0.347998 9.57932L8.773 1.15432C9.00633 0.920988 9.298 0.804321 9.648 0.804321C9.998 0.804321 10.298 0.929321 10.548 1.17932C10.798 1.42932 10.923 1.72099 10.923 2.05432C10.923 2.38765 10.798 2.67932 10.548 2.92932L3.198 10.2793L10.548 17.6293C10.7813 17.8627 10.898 18.15 10.898 18.4913C10.898 18.8333 10.773 19.1293 10.523 19.3793C10.273 19.6293 9.98133 19.7543 9.648 19.7543C9.31466 19.7543 9.023 19.6293 8.773 19.3793Z"
							fill="#274168"
						/>
					</svg>
					<span>이전</span>
				</S.AsidePageButton>
				<S.AsidePageButton onClick={() => setPage(data.length < 12 ? page : page + 1)}>
					<span>다음</span>
					<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.22233 1.17949L10.6479 9.57893C10.7479 9.67892 10.8186 9.78725 10.8599 9.90391C10.9019 10.0206 10.9229 10.1456 10.9229 10.2789C10.923 10.4122 10.902 10.5372 10.86 10.6539C10.8186 10.7706 10.748 10.8789 10.648 10.9789L2.22356 19.4045C1.99024 19.6378 1.69858 19.7545 1.34858 19.7546C0.998584 19.7546 0.698576 19.6296 0.448559 19.3796C0.198542 19.1296 0.0735227 18.838 0.0735002 18.5046C0.0734777 18.1713 0.198458 17.8796 0.448441 17.6296L7.79794 10.2791L0.447449 2.92961C0.2141 2.69629 0.0974137 2.40897 0.0973907 2.06764C0.0973676 1.72564 0.222348 1.42963 0.472331 1.17961C0.722314 0.929594 1.01397 0.804574 1.34731 0.804552C1.68064 0.804529 1.97231 0.929509 2.22233 1.17949Z"
							fill="#274168"
						/>
					</svg>
				</S.AsidePageButton>
			</S.AsidePageWrap>
		</S.AsideWrap>
	)
}

export default React.memo(Aside)
