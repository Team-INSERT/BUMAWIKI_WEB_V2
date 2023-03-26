import * as S from './style'
import * as api from '@/api/editDocs'

import React from 'react'
import { MutationFunction, useMutation, useQueryClient } from 'react-query'
import { useRouter } from 'next/router'
import useUser from '@/hooks/useUser'

interface DetailBtnProps {
	docsId: number
}

const DetailBtn = ({ docsId }: DetailBtnProps) => {
	const router = useRouter()
	const { query } = router
	const [docsName, setDocsName] = React.useState('')
	const queryClient = useQueryClient()
	const { user: userInfo, isLogined } = useUser()

	const updateDocsTitleMutation = useMutation(api.updateDocsTitle, {
		onSuccess: (res) => {
			alert('문서 이름이 변경되었습니다!')
			queryClient.invalidateQueries('lastModifiedDocs')
			router.push(`/docs/${res.data.title}`)
		},
	})

	const onClickNavigatePage = (type: string) => {
		if (type === 'VERSION') router.push(`/version/${query.title}`)
		else if (type === 'UPDATE' && !isLogined) alert('로그인 후 편집하실 수 있습니다!')
		else router.push(`/update/${query.title}`)
	}

	const deleteDocsTitleMutation = useMutation(api.deleteDocs as MutationFunction, {
		onSuccess: () => {
			alert('문서가 삭제되었습니다!')
			router.push('/')
		},
	})

	const onClickChangeDocsName = async () => {
		if (!docsName.length) return alert('내용이 없습니다.')
		updateDocsTitleMutation.mutate({ title: router.pathname as string, docsName })
	}

	const onClickDeleteDocs = async () => {
		const result = window.confirm('정말 삭제하시겠습니까?')
		if (result) deleteDocsTitleMutation.mutate(docsId)
	}

	return (
		<S.DetailButtonWrap>
			{userInfo.authority === 'ADMIN' && (
				<>
					<S.DetailWrap onClick={onClickDeleteDocs}>
						<S.DetailButton>
							<S.DetailText>삭제</S.DetailText>
						</S.DetailButton>
					</S.DetailWrap>
					<S.DetailInput value={docsName} onChange={(e) => setDocsName(e.target.value)} />
					<S.DetailWrap onClick={onClickChangeDocsName}>
						<S.DetailButton>
							<S.DetailText>변경</S.DetailText>
						</S.DetailButton>
					</S.DetailWrap>
				</>
			)}
			<S.DetailLinkWrap onClick={() => onClickNavigatePage('UPDATE')}>
				<S.DetailButton>
					<S.DetailText>편집</S.DetailText>
				</S.DetailButton>
			</S.DetailLinkWrap>
			<S.DetailLinkWrap onClick={() => onClickNavigatePage('VERSION')}>
				<S.DetailButton>
					<S.DetailText>기록</S.DetailText>
				</S.DetailButton>
			</S.DetailLinkWrap>
		</S.DetailButtonWrap>
	)
}

export default DetailBtn
