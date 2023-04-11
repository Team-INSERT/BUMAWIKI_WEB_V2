import * as util from '@/utils'

import React from 'react'
import { useMutation } from 'react-query'
import CreateDocsType from '@/types/create.type'
import FrameType from '@/types/frame.type'
import sizeInitState from '@/state/sizeInitState'
import { useRouter } from 'next/router'
import createInitState from '@/state/createInitState'
import createDocsForm from '@/utils/document/createDocsForm'
import { NextSeo } from 'next-seo'
import useUser from '@/hooks/useUser'
import createFormInitState from '@/state/createFormInitState'
import CreateLayout from '@/layout/CreateLayout'
import { IFileTypes } from '@/components/DragDrop'
import httpClient from '@/lib/httpClient'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import useConfig from '@/hooks/useConfig'
import CreateFormType from '@/types/createForm.type'

const Create = () => {
	const router = useRouter()
	const { query } = router
	const years = util.getAllYear()
	const { seoConfig } = useConfig({
		title: '부마위키 - 문서생성',
		description: '부마위키 문서생성 페이지입니다.',
	})

	const [parentFiles, setParentFiles] = React.useState<IFileTypes[]>([])
	const [size, setSize] = React.useState<FrameType>(sizeInitState)
	const [docs, setDocs] = React.useState<CreateDocsType>({
		title: (query.name as string) || '',
		...createInitState,
	})
	const { user: userInfo, isLogined } = useUser()

	const onCreatePost = async (data: CreateFormType) => {
		return (await httpClient.create.post(data)).data
	}

	const { mutate } = useMutation(onCreatePost, {
		onSuccess: (data) => {
			Swal.fire({
				icon: 'success',
				title: '문서 생성 완료!',
			})
			router.push(`/docs/${data.title}`)
		},
	})

	const onClickCreateDocs = () => {
		const { title, enroll, docsType } = docs
		const isInvalid = title.includes('?') || title.includes('\\') || title.includes('//') || title.includes('"')

		if (isInvalid) return toast.error('문서명에 특수문자를 넣을 수 없습니다.')
		if (!isLogined) return toast.error('로그인 후 이용 가능한 서비스입니다.')
		if (!enroll) return toast.error('연도를 선택해주세요!')
		if (!title) return toast.error('문서의 이름을 정해주세요!')
		if (!docsType) return toast.error('문서의 분류를 선택해주세요!')

		const data = createDocsForm({
			...docs,
			files: parentFiles,
		})
		mutate(data)
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

	return (
		<>
			<NextSeo {...seoConfig} />
			<CreateLayout
				userInfo={userInfo}
				setDocs={setDocs}
				docs={docs}
				createForm={createFormInitState}
				years={years}
				getFiles={(file: IFileTypes[]) => setParentFiles(file)}
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
