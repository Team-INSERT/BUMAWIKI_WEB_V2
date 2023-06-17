import { IFileTypes } from '@/components/DragDrop'
import httpClient from '@/lib/httpClient'
import { encodeContents } from '@/utils/document/requestContents'
import { useRouter } from 'next/router'
import { QueryClient, useMutation } from 'react-query'
import Swal from 'sweetalert2'

interface CreateDocsFormType {
	title: string
	enroll: number
	contents: string
	docsType: string
	files: IFileTypes[]
}

const createDocsForm = ({ title, enroll, contents, docsType, files }: CreateDocsFormType) => {
	const data = new FormData()
	data.append(
		'request',
		new Blob([`{ "title": "${title}", "enroll":"${enroll}", "contents":"${encodeContents(contents)}", "docsType":"${docsType}"}`], {
			type: 'application/json',
		})
	)
	const fileList = files.reverse()
	fileList.forEach((file) => data.append('files', file.object, file.object.name))
	return data
}

const onCreateDocs = async (data: CreateDocsFormType) => {
	const formData = createDocsForm(data)
	return (await httpClient.create.post(formData)).data
}

const useCreateDocsMutation = () => {
	const router = useRouter()
	const queryClient = new QueryClient()

	return useMutation(onCreateDocs, {
		onSuccess: (data) => {
			Swal.fire({
				icon: 'success',
				title: '문서 생성 완료!',
			})
			queryClient.invalidateQueries('lastModifiedDocs')
			router.push(`/docs/${data.title}`)
		},
	})
}

export default useCreateDocsMutation
