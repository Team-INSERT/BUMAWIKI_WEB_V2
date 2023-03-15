import { bumawikiAxios } from 'lib/axios/customAxios'
import * as FC from 'utils'

export const logoutUser = async () => {
	return await bumawikiAxios.delete('/auth/bsm/logout', {
		data: {
			refresh_token: FC.getCookie('refresh_token'),
		},
	})
}

export const loginUser = async (authCode: string) => {
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

export const getOtherUser = async (id: number) => {
	return (await bumawikiAxios.get(`/user/id/${id}`)).data
}

export const getUser = async () => {
	return (
		await bumawikiAxios.get(`/user`, {
			headers: {
				Authorization: FC.getCookie('authorization'),
			},
		})
	).data
}

export const getRefreshToken = async () => {
	return await bumawikiAxios.put(
		'/auth/refresh/access',
		{
			refresh_token: FC.getCookie('refresh_token'),
		},
		{}
	)
}
