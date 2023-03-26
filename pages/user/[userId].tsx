import * as util from '@/utils'
import * as S from '../../layout/user/style'
import * as api from '@/api/user'

import React, { PropsWithChildren } from 'react'
import Contributors from '@/types/contributors.type'
import { useQuery } from 'react-query'
import UserType from '@/types/user.type'
import { useRouter } from 'next/router'
import { NextSeo, NextSeoProps } from 'next-seo'
import { AccodianMenu, Aside, Board, Classify, ScrollBtn } from '@/components'

const User = () => {
	const [user, setUser] = React.useState<UserType>()
	const router = useRouter()
	useQuery('otherUser', () => api.getOtherUser(parseInt(router.query.userId as string)), {
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
		<div>
			<NextSeo {...seoConfig} />
			<S.UserWrap>
				<Board>
					<S.UserTitleWrap>
						<S.UserTitleText>유저 : {user?.nickName}</S.UserTitleText>
					</S.UserTitleWrap>
					<Classify>{user?.authority}</Classify>
					<S.UserLine />
					<S.UserInfoWrap>
						<AccodianMenu name="정보">
							<S.UserInfoLoadWrap>
								{/* {userInfo.authority === 'ADMIN' ? <C.Authority email={ || ''} /> : null} */}
								<span>
									이름은 {user?.nickName}이며, 부마위키의
									{user?.authority === 'ADMIN' ? ' 관리자' : user?.authority === 'BANNED' ? ' 읽기전용 사용자' : ' 사용자'} 중 한 명이다.
								</span>
							</S.UserInfoLoadWrap>
						</AccodianMenu>
						<AccodianMenu name="기여한 문서">
							<S.ContributeWrap>
								<span>이 유저가 기여한 문서의 정보들이다.</span>
								<S.ContributeList>
									{user?.contributeDocs.map((docs: Contributors, index) => (
										<span key={index}>
											문서명 :&nbsp;
											<S.ContributeLink href={`/docs/${docs.title}`}>{docs.title}</S.ContributeLink>
											<br />
											수정 날짜 : {util.dateParser(docs.createTime)}
										</span>
									))}
								</S.ContributeList>
							</S.ContributeWrap>
						</AccodianMenu>
						<S.UserLine />
					</S.UserInfoWrap>
				</Board>
				<ScrollBtn />
				<Aside />
			</S.UserWrap>
		</div>
	)
}

export default User
