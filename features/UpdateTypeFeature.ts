import httpClient from '@/lib/httpClient'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import Swal from 'sweetalert2'

const useUpdateTypeMutation = (id: number, docsType: string) => {
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation(async () => (await httpClient.updateType.put({ id, docsType })).data, {
		onSuccess: (data) => {
			Swal.fire({
				icon: 'success',
				title: '문서 타입 변경 완료!',
			})
			queryClient.invalidateQueries('lastModifiedDocs')
			router.push(`/docs/${data.title}`)
		},
	})
}

export default useUpdateTypeMutation
