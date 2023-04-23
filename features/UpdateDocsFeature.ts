import { IFileTypes } from '@/components/DragDrop'
import config from '@/config'
import exception from '@/constants/exception.constants'
import httpClient from '@/lib/httpClient'
import { encodeContents } from '@/utils/document/requestContents'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { QueryClient, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

interface UpdateDocsFormType {
	contents: string
	files: IFileTypes[]
}

interface UpdateMutateFunctionPropsType {
	title: string
	data: UpdateDocsFormType
}

const updateDocsForm = ({ contents, files }: UpdateDocsFormType) => {
	const data = new FormData()
	data.append(
		'request',
		new Blob([`{ "contents":"${encodeContents(contents)}" }`], {
			type: 'application/json',
		})
	)
	files.reverse().forEach((file) => data.append('files', file.object, file.object.name))

	return data
}

const onUpdateDocs = async ({ title, data }: UpdateMutateFunctionPropsType) => {
	return (await httpClient.update.putByTitle(title, updateDocsForm(data))).data
}

const useUpdateDocsMutation = (title: string) => {
	const queryClient = new QueryClient()
	const router = useRouter()

	return useMutation(onUpdateDocs, {
		onSuccess: () => {
			queryClient.invalidateQueries('lastModifiedDocs')
			httpClient.revalidateUpdate.post({ title }, { baseURL: `${config.clientUrl}/apis/revalidate-update` })
			httpClient.revalidateVersion.post({ title }, { baseURL: `${config.clientUrl}/apis/revalidate-version` })
			httpClient.revalidateDocs.post({ title }, { baseURL: `${config.clientUrl}/apis/revalidate-docs` }).then(() => {
				window.location.href = `/docs/${title}`
			})
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
}

export default useUpdateDocsMutation
