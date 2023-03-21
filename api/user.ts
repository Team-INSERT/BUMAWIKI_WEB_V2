import { bumawikiAxios } from '@/lib/axios/customAxios'
import { Storage } from '@/lib/storage/storage'

export const onLoginUser = async (authCode: string) => {
	return (
		await bumawikiAxios.post(
			'/auth/oauth/bsm',
			{},
			{
				headers: { authCode },
			}
		)
	).data
}

export const onLogoutUser = async () => {
	return await bumawikiAxios.delete('/auth/bsm/logout', {
		data: {
			refresh_token: Storage.getItem('refresh_token'),
		},
	})
}

export const getUser = async () => {
	return (
		await bumawikiAxios.get(`/user`, {
			headers: {
				Authorization: Storage.getItem('access_token'),
			},
		})
	).data
}

export const getOtherUser = async (id: number) => {
	return (await bumawikiAxios.get(`/user/id/${id}`)).data
}

export const getAccessToken = async () => {
	return (
		await bumawikiAxios.put(
			'/auth/refresh/access',
			{
				refresh_token: Storage.getItem('refresh_token'),
			},
			{}
		)
	).data
}

export const updateUserAuthority = async (email: string, authority: string) => {
	return await bumawikiAxios.put(
		'/set/authority',
		{
			email,
			authority,
		},
		{
			headers: {
				Authorization: Storage.getItem('access_token'),
			},
		}
	)
}
