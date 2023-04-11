import React from 'react'
import { useMutation } from 'react-query'
import UpdateDocsType from '@/types/update.type.'
import { decodeContents, encodeContents } from '@/utils/document/requestContents'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import Docs from '@/types/docs.type'
import { GetStaticProps } from 'next'
import { Storage } from '@/lib/storage/'
import { NextSeo } from 'next-seo'
import { IFileTypes } from '@/components/DragDrop'
import httpClient from '@/lib/httpClient'
import FileListArray from '@/types/filelistArray.type'
import useUser from '@/hooks/useUser'
import UpdateLayout from '@/layout/UpdateLayout'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import useConfig from '@/hooks/useConfig'
import exception from '@/constants/exception.constants'

interface SinglDocsPropsType {
	defaultDocs: Docs
	title: string
}

const Update = ({ defaultDocs, title }: SinglDocsPropsType) => {
	const router = useRouter()
	const { user } = useUser()
	const { seoConfig } = useConfig(`부마위키 문서편집 - ${defaultDocs.title}`, `"${defaultDocs.title}" 문서편집 페이지입니다.`)
	const textareaRef = React.useRef<HTMLTextAreaElement>(null)

	const [parentFiles, setParentFiles] = React.useState<IFileTypes[]>([])
	const [docs, setDocs] = React.useState<UpdateDocsType>({
		title: defaultDocs.title,
		contents: decodeContents(defaultDocs.contents || ''),
		files: [],
	})
	const [isOnAutoComplete, setIsOnAutoComplete] = React.useState(JSON.parse(Storage.getItem('autoComplete') || 'true'))

	const setFiles = (file: FileListArray[]) => {
		setParentFiles(file)
	}

	const { mutate } = useMutation((data) => httpClient.update.putByTitle(docs.title, data), {
		onSuccess: () => {
			Swal.fire({
				icon: 'success',
				title: '문서 편집 완료!',
			})
			router.push(`/docs/${title}`)
		},
		onError: (err) => {
			if (err instanceof AxiosError) {
				const { status, message, error } = err.response?.data
				if (status === 403) {
					if (message === exception.code.DOCS_403_2) toast.error('자기 자신의 문서는 편집할 수 없습니다.')
					if (error === 'Forbidden') toast.error('읽기전용 사용자는 문서를 편집할 수 없습니다.')
				}
			}
		},
	})

	const onClickAutoComplete = () => {
		Storage.setItem('autoComplete', `${!isOnAutoComplete}`)
		setIsOnAutoComplete(!isOnAutoComplete)
		if (textareaRef.current) textareaRef.current.focus()
	}

	const mutateUpdateDocs = () => {
		const FormData = require('form-data')
		const data = new FormData()
		data.append(
			'request',
			new Blob([`{ "contents": "${encodeContents(docs.contents)}" }`], {
				type: 'application/json',
			}),
			{ contentType: 'application/json' }
		)
		parentFiles.forEach((file) => data.append('files', file.object, file.object.name))

		mutate(data)
	}

	const onClickUpdateDocs = async () => {
		if (!user.id) {
			toast.error('로그인 후 이용 가능한 서비스입니다.')
			return
		}
		if (!docs.contents) toast.error('문서가 비어있습니다!')

		mutateUpdateDocs()
	}

	return (
		<>
			<NextSeo {...seoConfig} />
			<UpdateLayout
				docs={docs}
				setDocs={setDocs}
				setFiles={setFiles}
				onClickAutoComplete={onClickAutoComplete}
				isOnAutoComplete={isOnAutoComplete}
				textareaRef={textareaRef}
				onClickUpdateDocs={onClickUpdateDocs}
			/>
		</>
	)
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

const getApiDocs = async (docsName: string) => {
	try {
		return (await httpClient.docs.getByTitle(docsName)).data
	} catch (err) {
		return false
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context

	const res = await getApiDocs(params?.title as string)

	return {
		props: {
			defaultDocs: res,
			title: params?.title,
		},
	}
}

export default Update
