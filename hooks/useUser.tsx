import * as api from '@/api/user'

import React from 'react'
import userState, { initUserState } from '@/context/userState'
import { Storage } from '@/lib/storage/storage'
import UserType from '@/types/user.type'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'

interface UseUserOptions {
	authorizedPage?: boolean
}

const useUser = (options?: UseUserOptions) => {
	const [user, setUser] = useRecoilState(userState)
	const router = useRouter()

	const {
		data: userInfo,
		remove,
		isLoading,
	} = useQuery<UserType>(
		'getUser',
		async () => {
			api.getAccessToken()
			return api.getUser()
		},
		{ enabled: !!Storage.getItem('access_token') }
	)

	const logout = () => {
		api.onLogoutUser()
		setUser(initUserState)
		remove()
	}

	React.useEffect(() => {
		if (userInfo) setUser(userInfo)
	}, [router.query, setUser, userInfo])

	React.useEffect(() => {
		if (options?.authorizedPage && !isLoading && !userInfo) {
			alert('로그인이 필요한 페이지입니다.')
			router.push('/')
			// openModal()
		}
	}, [options, userInfo, isLoading, router])

	return { user, isLogined: !!userInfo, logout }
}

export default useUser
