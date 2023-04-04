import * as S from './style'

import React from 'react'
import userState from '@/context/userState'
import { useMutation, useQueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'
import { useRouter } from 'next/router'
import httpClient from '@/lib/httpClient'
import { Storage } from '@/lib/storage'

interface DetailBtnProps {
	docsId: number
}

const DetailBtn = ({ docsId }: DetailBtnProps) => {
	const router = useRouter()
	const user = useRecoilValue(userState)
	const [docsName, setDocsName] = React.useState('')
	const [docsType, setDocsType] = React.useState('')
	const queryClient = useQueryClient()

	const updateDocsTitleMutation = useMutation(() => httpClient.updateTitle.putByTitle(router.pathname, docsName), {
		onSuccess: (res) => {
			alert('문서 이름이 변경되었습니다!')
			queryClient.invalidateQueries('lastModifiedDocs')
			router.push(`/docs/${res.data.title}`)
		},
	})

	const onUpdateType = async () => {
		return (
			await httpClient.updateType.put(
				{ id: docsId, docsType },
				{
					headers: {
						Authorization: Storage.getItem('access_token'),
					},
				}
			)
		).data
	}

	const updateDocsTypeMutation = useMutation(onUpdateType, {
		onSuccess: (res) => {
			alert('문서 이름이 변경되었습니다!')
			queryClient.invalidateQueries('lastModifiedDocs')
			router.push(`/docs/${res.data.title}`)
		},
	})

	const onClickNavigatePage = (type: string) => {
		if (type === 'VERSION') return router.push(`/version/${router.pathname}`)
		if (type === 'UPDATE' && !user.id) return alert('로그인 후 편집하실 수 있습니다!')
		console.log(router)
		router.push(`/update/${router.query.title}`)
	}

	const deleteDocsTitleMutation = useMutation(
		() =>
			httpClient.deleteDocs.deleteById(docsId, {
				headers: {
					Authorization: Storage.getItem('access_token'),
				},
			}),
		{
			onSuccess: () => {
				alert('문서가 삭제되었습니다!')
				router.push('/')
			},
		}
	)

	const onClickChangeDocsName = async () => {
		if (!docsName.length) {
			alert('내용이 없습니다.')
			return
		}
		updateDocsTitleMutation.mutate()
	}

	const onClickChangeDocsType = async () => {
		if (!docsType.length) {
			alert('내용이 없습니다.')
			return
		}
		updateDocsTypeMutation.mutate()
	}

	const onClickDeleteDocs = () => window.confirm('정말 삭제하시겠습니까?') && deleteDocsTitleMutation.mutate()

	return (
		<S.DetailButtonWrap>
			{user.authority === 'ADMIN' ? (
				<>
					<S.DetailInput value={docsType} onChange={(e) => setDocsType(e.target.value)} />
					<S.DetailWrap onClick={onClickChangeDocsType}>
						<S.DetailButton>
							<S.DetailText>타입변경</S.DetailText>
						</S.DetailButton>
					</S.DetailWrap>
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
			) : (
				''
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
