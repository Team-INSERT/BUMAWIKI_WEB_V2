import React from 'react'
import { useQuery } from 'react-query'
import UserType from '@/types/user.type'
import { useRouter } from 'next/router'
import { NextSeo, NextSeoProps } from 'next-seo'
import httpClient from '@/lib/httpClient'
import UserLayout from '@/layout/UserLayout'
import { initUserState } from '@/context/userState'

const User = () => {
	const [user, setUser] = React.useState<UserType>()
	const router = useRouter()

	const onGetUser = async () => {
		return (await httpClient.user.getByTitle(router.query.userId as string)).data
	}
	useQuery('otherUser', onGetUser, {
		onSuccess: (data) => setUser(data),
	})

	const seoConfig: NextSeoProps = {
		title: `부마위키 유저 - ${user?.nickName}`,
		description: `부마위키 유저 "${user?.nickName}" 페이지입니다.`,
		openGraph: {
			type: 'website',
			title: `부마위키 유저 - ${user?.nickName}`,
			description: `부마위키 유저 "${user?.nickName}" 페이지입니다.`,
			images: [
				{
					url: '/images/meta-img.png',
				},
			],
		},
	}

	return (
		<>
			<NextSeo {...seoConfig} />
			<UserLayout user={user || initUserState} />
		</>
	)
}

export default User
