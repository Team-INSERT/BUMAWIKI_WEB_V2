import * as util from '@/utils'

import React from 'react'
import { useMutation } from 'react-query'
import CreateDocsType from '@/types/create.type'
import FrameType from '@/types/frame.type'
import sizeInitState from '@/state/sizeInitState'
import { useRouter } from 'next/router'
import createInitState from '@/state/createInitState'
import createDocsForm from '@/utils/document/createDocsForm'
import { NextSeo, NextSeoProps } from 'next-seo'
import useUser from '@/hooks/useUser'
import createFormInitState from '@/state/createFormInitState'
import CreateLayout from '@/layout/CreateLayout'
import { IFileTypes } from '@/components/DragDrop'
import httpClient from '@/lib/httpClient'
import { Storage } from '@/lib/storage'

const Create = () => {
	const router = useRouter()
	const { query } = router
	const years = util.getAllYear()

	const [parentFiles, setParentFiles] = React.useState<IFileTypes[]>([])
	const [size, setSize] = React.useState<FrameType>(sizeInitState)
	const [docs, setDocs] = React.useState<CreateDocsType>({
		title: (query.name as string) || '',
		...createInitState,
	})
	const { user: userInfo, isLogined } = useUser()

	const setFiles = (file: IFileTypes[]) => {
		setParentFiles(file)
	}

	const { mutate } = useMutation(
		(data) =>
			httpClient.create.post(data, {
				headers: {
					Authorization: Storage.getItem('access_token'),
				},
			}),
		{
			onSuccess: (res) => {
				// alert -> modal or popup or toast 로 대체
				alert('문서가 생성되었습니다!')
				router.push(`/docs/${res.data.title}`)
			},
		}
	)

	const onClickCreateDocs = () => {
		if (['?', '/', '"', '\\'].includes(docs.title)) return alert('문서명에는 물음표나 쌍따옴표, 슬래시나 역슬래시를 넣을 수 없습니다.')
		if (!isLogined) return alert('로그인 후 이용 가능한 서비스입니다.')
		if (!docs.enroll) return alert('연도를 선택해주세요!')
		if (!docs.title) return alert('문서의 이름을 정해주세요!')
		if (!docs.docsType) return alert('문서의 분류를 선택해주세요!')

		const { title, enroll, contents, docsType } = docs

		mutate(
			createDocsForm({
				title,
				enroll,
				contents,
				docsType,
				files: parentFiles,
			})
		)
	}

	const makeFrame = () => {
		const frame = `<틀>
	<틀제목>제목삽입</틀제목>
	${`<행>
		${'<열>내용삽입</열>'.repeat(size.row)}
	</행>`.repeat(size.column)}
</틀>`

		setDocs({ ...docs, contents: frame })
	}

	const changeDocsType = (e: React.ChangeEvent<HTMLInputElement | HTMLOptionElement>) => {
		const type = e.target.id
		if (type === 'FRAME') return setDocs({ ...docs, docsType: type, title: `틀:${docs.title}` })
		return setDocs({ ...docs, docsType: type, title: docs.title.replace('틀:', ''), contents: '' })
	}

	const seoConfig: NextSeoProps = {
		title: '부마위키 - 문서생성',
		description: '부마위키 문서생성 페이지입니다.',
		openGraph: {
			type: 'website',
			title: '부마위키 - 문서생성',
			description: '부마위키 문서생성 페이지입니다.',
			images: [
				{
					url: '/images/meta-img.png',
				},
			],
		},
	}

	return (
		<>
			<NextSeo {...seoConfig} />
			<CreateLayout
				userInfo={userInfo}
				setDocs={setDocs}
				docs={docs}
				createForm={createFormInitState}
				years={years}
				getFiles={setFiles}
				size={size}
				setSize={setSize}
				makeFrame={makeFrame}
				onClickCreateDocs={onClickCreateDocs}
				changeDocsType={changeDocsType}
			/>
		</>
	)
}

export default Create
