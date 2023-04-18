import httpClient from '@/lib/httpClient'
import { Storage } from '@/lib/storage'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

const onLogin = async (authCode: string) => {
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
	console.log(router)

	return useMutation(() => onLogin(router.asPath.replace('/oauth?code=', '')), {
		onSuccess: (data) => {
			Storage.setItem('access_token', data.accessToken)
			Storage.setItem('refresh_token', data.refreshToken)
			router.back()
			router.back()
			queryClient.invalidateQueries('getUser')
		},
		onError: () => {
			toast.error('LOGIN ERROR!')
			router.back()
			router.back()
		},
	})
}

export default useLoginMutation
