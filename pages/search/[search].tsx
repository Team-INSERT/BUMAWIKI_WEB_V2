import * as C from '@/components'
import * as api from '@/api/getDocs'
import * as FC from '@/utils'
import * as S from './style'

import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import Docs from '@/types/docs.type'
import { useRouter } from 'next/router'

const Search = () => {
	const router = useRouter()
	const { search } = router.query
	const [result, setResult] = React.useState([])
	const [isLoad, setIsLoad] = React.useState(false)

	const { refetch } = useQuery('findDocs', () => api.findDocs(search as string), {
		onSuccess: (data) => {
			if (data.length === 1) router.push(`/docs/${data[0].title}`)
			setResult(data)
			setIsLoad(true)
		},
		onError: () => setIsLoad(false),
	})

	useEffect(() => {
		refetch()
		// eslint-disable-next-line
	}, [router])

	return (
		<>
			<C.Header />
			<S.SearchWrap>
				<C.Board>
					<S.SearchTitleWrap>
						<span>&quot;{search}&quot; 검색결과</span>
					</S.SearchTitleWrap>
					<S.Classify>
						<C.Classify>검색</C.Classify>
					</S.Classify>
					<S.SearchLine />
					<S.SearchResult>
						<S.SearchList>
							{isLoad ? (
								<>
									{result.map((result: Docs, index) => (
										<S.SearchListItem key={index}>
											{result.docsType === 'FRAME' ? (
												<S.SearchLink href={`/docs/${result.title}`}>{result.title}</S.SearchLink>
											) : (
												<S.SearchLink href={`/docs/${result.title}`}>
													{result.title} — ( {FC.typeEditor(result.docsType)},{result.enroll} )
												</S.SearchLink>
											)}
										</S.SearchListItem>
									))}
								</>
							) : (
								<>
									<span>아직 &quot;{search}&quot; 문서는 없습니다.</span>
									<br />
									<br />
									<S.SearchCreateLink href={`/create?name=${search}`}>지금 문서를 생성해보세요</S.SearchCreateLink>
								</>
							)}
						</S.SearchList>
					</S.SearchResult>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.SearchWrap>
			<C.Footer />
		</>
	)
}

export default Search
