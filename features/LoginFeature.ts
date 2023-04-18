import httpClient from '@/lib/httpClient'
import { Storage } from '@/lib/storage'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'

const onLogin = async (authCode: string | string[] | undefined) => {
	return (
		await httpClient.oauth.post(
			{},
			{
				headers: { authCode },
			}
		)
	).data
}

const useLoginMutation = () => {
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation(() => onLogin(router.query.code), {
		onSuccess: (data) => {
			Storage.setItem('access_token', data.accessToken)
			Storage.setItem('refresh_token', data.refreshToken)
			queryClient.invalidateQueries('getUser')
			router.back()
			router.back()
		},
		onError: () => window.history.go(-2),
	})
}

export default useLoginMutation
