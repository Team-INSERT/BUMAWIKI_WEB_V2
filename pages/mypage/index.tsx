import useUser from '@/hooks/useUser'
import React from 'react'
import { NextSeo } from 'next-seo'
import MyPageLayout from '@/layout/MyPageLayout'
import { initUserState } from '@/context/userState'
import useConfig from '@/hooks/useConfig'
import MyPageLikeType from '@/types/like.type'
import useLikeCountById from '@/hooks/useLikeCountById'

const MyPage = () => {
	const [likes, setLikes] = React.useState<MyPageLikeType[]>([{ title: '', docsType: '' }])
	const { user, isLogined, logout } = useUser()
	const { seoConfig } = useConfig({
		title: '부마위키 - 마이페이지',
		description: '부마위키의 마이페이지입니다.',
	})
	const { getLikeList } = useLikeCountById()

	const onEffectGetLikeList = async () => {
		try {
			setLikes(await getLikeList())
		} catch (err) {
			console.log(err)
		}
	}

	React.useEffect(() => {
		;(async () => await onEffectGetLikeList())()
	}, [])

	return (
		<>
			<NextSeo {...seoConfig} />
			<MyPageLayout likes={likes} isLogined={isLogined} user={user || initUserState} mutate={logout} />
		</>
	)
}

export default MyPage
