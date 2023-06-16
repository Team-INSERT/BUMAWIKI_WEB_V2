import useRevalidate from '@/hooks/useRevalidate'
import httpClient from '@/lib/httpClient'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import Swal from 'sweetalert2'

const useUpdateTitleMutation = (title: string) => {
	const router = useRouter()
	const queryClient = useQueryClient()
	const { revalidate } = useRevalidate(title)

	return useMutation(async () => (await httpClient.updateTitle.putByTitle(router.query.title as string, { title })).data, {
		onSuccess: (data) => {
			const { title } = data

			Swal.fire({
				icon: 'success',
				title: '문서 이름 변경 완료!',
			})

			queryClient.invalidateQueries('lastModifiedDocs')
			revalidate()
			router.push(`/docs/${title}`)
		},
	})
}

export default useUpdateTitleMutation
