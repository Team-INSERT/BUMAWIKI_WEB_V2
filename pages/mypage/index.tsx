import useUser from '@/hooks/useUser'
import React from 'react'
import { QueryClient } from 'react-query'
import { NextSeo } from 'next-seo'
import MyPageLayout from '@/layout/MyPageLayout'
import { initUserState } from '@/context/userState'
import useConfig from '@/hooks/useConfig'

const MyPage = () => {
	const { user, isLogined, logout } = useUser()
	const { seoConfig } = useConfig({
		title: '부마위키 - 마이페이지',
		description: '부마위키의 마이페이지입니다.',
	})
	const queryClient = new QueryClient()

	const onLogout = async () => {
		queryClient.invalidateQueries('getUser')
		logout()
	}

	return (
		<>
			<NextSeo {...seoConfig} />
			<MyPageLayout isLogined={isLogined} user={user || initUserState} mutate={onLogout} />
		</>
	)
}

export default MyPage
