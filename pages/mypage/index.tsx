import useUser from '@/hooks/useUser'
import React from 'react'
import { NextSeo } from 'next-seo'
import MyPageLayout from '@/layout/MyPageLayout'
import { initUserState } from '@/context/userState'
import useConfig from '@/hooks/useConfig'
import httpClient from '@/lib/httpClient'
import MyPageLikeType from '@/types/like.type'

const MyPage = () => {
	const [likes, setLikes] = React.useState<MyPageLikeType[]>([{ title: '', docsType: '' }])
	const { user, isLogined, logout } = useUser()
	const { seoConfig } = useConfig({
		title: '부마위키 - 마이페이지',
		description: '부마위키의 마이페이지입니다.',
	})

	const onEffectGetLikeList = async () => {
		try {
			const like = (await httpClient.getLike.get()).data
			setLikes(like)
		} catch (err) {
			console.log(err)
		}
	}

	React.useEffect(() => {
		onEffectGetLikeList()
	})

	return (
		<>
			<NextSeo {...seoConfig} />
			<MyPageLayout likes={likes} isLogined={isLogined} user={user || initUserState} mutate={logout} />
		</>
	)
}

export default MyPage
