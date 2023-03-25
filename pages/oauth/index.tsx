import * as api from '@/api/user'

import React from 'react'
import { useMutation } from 'react-query'

const OAuth = () => {
	const { mutate } = useMutation(() => api.onLoginUser(window.location.search.replace('?code=', '')), {
		onSuccess: (data) => {
			localStorage.setItem('access_token', data.accessToken)
			localStorage.setItem('refresh_token', data.refreshToken)
			localStorage.setItem('isLogin', 'true')
			window.history.go(-2)
		},
		onError: () => window.history.go(-2),
	})

	React.useEffect(() => {
		mutate()
		// eslint-disable-next-line
	}, [])

	return <></>
}

export default OAuth
