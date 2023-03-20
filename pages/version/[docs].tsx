import * as C from '@/components'
import * as api from '@/api/getDocs'
import * as FC from '@/utils'
import * as S from '../docs/style'
import * as V from './style'

import React from 'react'
import { useQuery } from 'react-query'
import { VersionDocs } from '@/types/version.type'
import { useRouter } from 'next/router'

const Version = () => {
	const router = useRouter()
	const { docs } = router.query
	const [version, setVersion] = React.useState([])
	const [isLoad, setIsLoad] = React.useState(false)
	const [docsName, setDocsName] = React.useState()

	useQuery('versionDocs', () => api.getVersionDocs(docs as string), {
		onSuccess: (data) => {
			setVersion(data.versionDocsResponseDto.reverse())
			setDocsName(data.docsResponseDto.title)
			setIsLoad(true)
		},
	})

	return (
		<>
			<C.Header />
			<S.DocsWrap>
				<C.Board>
					<S.DocsTitleWrap>
						<S.DocsTitleText>문서 수정 기록 : {docsName}</S.DocsTitleText>
					</S.DocsTitleWrap>
					<S.DocsLine />
					<S.DocsContentsWrap>
						<ul>
							{router.isReady && isLoad ? (
								<>
									{version.map((ver: VersionDocs, index: number) => (
										<V.VersionList key={index}>
											<span>
												<V.VersionLink href={`/version/${docs}/detail/${index}`}>{FC.dateParser(ver.thisVersionCreatedAt)}</V.VersionLink>
											</span>
											<span>
												작성자 : <V.VersionLink href={`/user/${ver.userId}`}>{ver.nickName}</V.VersionLink>
											</span>
										</V.VersionList>
									))}
								</>
							) : (
								''
							)}
						</ul>
					</S.DocsContentsWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.DocsWrap>
			<C.Footer />
		</>
	)
}

export default Version
