import httpClient from '@/lib/httpClient'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import Swal from 'sweetalert2'

const useUpdateTitleMutation = (docsName: string) => {
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation(async () => (await httpClient.updateTitle.putByTitle(router.pathname, docsName)).data, {
		onSuccess: (data) => {
			Swal.fire({
				icon: 'success',
				title: '문서 이름 변경 완료!',
			})
			queryClient.invalidateQueries('lastModifiedDocs')
			router.push(`/docs/${data.title}`)
		},
	})
}

export default useUpdateTitleMutation
