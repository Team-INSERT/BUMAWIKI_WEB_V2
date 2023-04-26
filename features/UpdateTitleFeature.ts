import config from '@/config'
import httpClient from '@/lib/httpClient'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import Swal from 'sweetalert2'

const useUpdateTitleMutation = (docsName: string) => {
	const router = useRouter()
	const queryClient = useQueryClient()

	const updateTitle = async () => {
		return (await httpClient.updateTitle.putByTitle(router.pathname, { title: docsName })).data
	}

	return useMutation(updateTitle, {
		onSuccess: (data) => {
			const { title } = data

			Swal.fire({
				icon: 'success',
				title: '문서 이름 변경 완료!',
			})

			queryClient.invalidateQueries('lastModifiedDocs')
			// httpClient.revalidateUpdate.post({ title }, { baseURL: `${config.clientUrl}/api/revalidate-update` })
			// httpClient.revalidateVersion.post({ title }, { baseURL: `${config.clientUrl}/api/revalidate-version` })
			// httpClient.revalidateDocs.post({ title }, { baseURL: `${config.clientUrl}/api/revalidate-docs` }).then(() => {
			// 	window.location.href = `/docs/${title}`
			// })
			router.push(`/docs/${title}`)
		},
	})
}

export default useUpdateTitleMutation
