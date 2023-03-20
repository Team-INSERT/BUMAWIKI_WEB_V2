import * as C from '@/components'
import * as FC from '@/utils'
import * as S from '../../docs/style'
import * as api from '@/api/getDocs'

import React from 'react'
import { useQuery } from 'react-query'
import { VersionDocsInfo, VersionDocsService } from '@/types/version.type'
import { decodeContents } from '@/utils/document/requestContents'
import { useRouter } from 'next/router'

const VersionDetail = () => {
	const router = useRouter()
	const [docs, setDocs] = React.useState<VersionDocsInfo>()
	const [versionDocs, setVersionDocs] = React.useState<VersionDocsService>()
	const [isLoad, setIsLoad] = React.useState(false)

	useQuery('versionDocs', () => api.getVersionDocs(router.query.docs as string), {
		onSuccess: (data) => {
			const array = data.versionDocsResponseDto.reverse()

			setDocs({
				title: data.docsResponseDto.title,
				docsType: data.docsResponseDto.docsType,
			})
			setVersionDocs(array[(router.query.docs as string) || 0])
			setIsLoad(true)
		},
	})

	return (
		<div>
			<C.Header />
			<S.DocsWrap>
				<C.Board>
					<S.DocsTitleWrap>
						<S.DocsTitleText>{docs?.title}</S.DocsTitleText>
					</S.DocsTitleWrap>
					<S.Classify>
						<C.Classify>{FC.typeEditor(docs?.docsType as string)}</C.Classify>
					</S.Classify>
					<S.DocsLine />
					<S.DocsContentsWrap>
						{isLoad ? (
							<S.DocsContentsLoadWrap>
								<S.LastUpdateDate>
									마지막 수정 : {FC.dateParser(versionDocs?.thisVersionCreatedAt || '')} | 수정자 : {versionDocs?.nickName}
								</S.LastUpdateDate>
								<C.AccodianMenu name="코드 내용" isOpen={false}>
									<S.DocsContents>{versionDocs?.contents.replace(/<br>/gi, '\n').replace(/&\$\^%/gi, '"')}</S.DocsContents>
								</C.AccodianMenu>
								<C.AccodianMenu name="개요">
									<S.DocsContents
										dangerouslySetInnerHTML={{
											__html: FC.documentation(decodeContents(versionDocs?.contents || '')),
										}}></S.DocsContents>
								</C.AccodianMenu>
							</S.DocsContentsLoadWrap>
						) : (
							''
						)}
					</S.DocsContentsWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.DocsWrap>
			<C.Footer />
		</div>
	)
}

export default VersionDetail
