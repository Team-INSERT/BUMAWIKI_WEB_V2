import * as S from './style'
import * as api from '@/api/user'

import Accident from 'assets/accident.svg'
import Club from 'assets/club.svg'
import Create from 'assets/create.svg'
import Search from 'assets/search.svg'
import Student from 'assets/student.svg'
import Teacher from 'assets/teacher.svg'
import userState from '@/context/userState'
import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import tokenExpired from '@/lib/token/tokenExpired'
import { AxiosError } from 'axios'

const Header = () => {
	const [search, setSearch] = React.useState('')
	const [isLoad, setIsLoad] = React.useState(false)
	const [isHover, setIsHover] = React.useState(false)

	const user = useRecoilValue(userState)
	const router = useRouter()

	const navigateSearchResult = () => {
		if (!search.length) alert('검색할 문서명을 입력해주세요!')
		else router.push(`/search/${search}`)
	}

	React.useEffect(() => {
		console.log(user)
		if (user.id) setIsLoad(true)
	}, [user])

	const setUser = useSetRecoilState(userState)

	const getUser = async () => {
		try {
			const data = await api.getUser()
			setUser({
				...data,
				contributeDocs: data.contributeDocs.reverse(),
				isLogin: true,
			})
		} catch (err) {
			console.log(err)
			await tokenExpired()
			console.error('로그인 후 서비스를 이용해주세요!')
		}
	}

	const refreshLogin = async () => {
		try {
			await getUser()
		} catch (err) {
			if (err instanceof AxiosError) {
				const { status, message } = err?.response?.data
				if (status === 403) {
					if (message === 'User Not Login') return console.error('로그인 후 서비스를 이용해주세요!')
					await tokenExpired()
				}
				getUser()
			}
		}
	}

	useEffect(() => {
		refreshLogin()
		// eslint-disable-next-line
	}, [])

	return (
		<S.HeaderContainer onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
			<S.HeaderWrap>
				<S.HeaderLink href={'/'}>
					<S.HeaderLogo src="/images/logo.png" alt="logo" width={1000} height={1000} />
				</S.HeaderLink>
				<S.HeaderSectionWrap>
					<S.HeaderSection href={''}>
						<S.HeaderSectionLogo src={Student} alt="" />
						<S.HeaderSectionText>공지</S.HeaderSectionText>
					</S.HeaderSection>
					&nbsp;&nbsp;&nbsp;
					<S.HeaderSection href={''}>
						<S.HeaderSectionLogo src={Teacher} alt="" />
						<S.HeaderSectionText>학교</S.HeaderSectionText>
					</S.HeaderSection>
					<S.HeaderSection href={''}>
						<S.HeaderSectionLogo src={Accident} alt="" />
						<S.HeaderSectionText>기타</S.HeaderSectionText>
					</S.HeaderSection>
					<S.HeaderSection href={''}>
						<S.HeaderSectionLogo src={Club} alt="" />
						<S.HeaderSectionText>외부 서비스</S.HeaderSectionText>
					</S.HeaderSection>
					{user.isLogin ? (
						<S.HeaderSection href={`/create`}>
							<S.HeaderSectionLogo src={Create} alt="" />
							<S.HeaderSectionText>문서 생성</S.HeaderSectionText>
						</S.HeaderSection>
					) : (
						''
					)}
				</S.HeaderSectionWrap>
				<S.HeaderSearchWrap>
					<S.HeaderSearchForm onSubmit={(e) => e.preventDefault()}>
						<S.HeaderSearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
						<S.HeaderSearchButton onClick={navigateSearchResult}>
							<S.HeaderSearchLogo src={Search} alt="" />
						</S.HeaderSearchButton>
					</S.HeaderSearchForm>
					<S.HeaderLoginWrap>
						{isLoad ? (
							<S.HeaderMypageText href="/mypage">마이페이지</S.HeaderMypageText>
						) : (
							<S.HeaderLoginText href="https://auth.bssm.kro.kr/oauth?clientId=a1a16261&redirectURI=http://bumawiki.kro.kr/oauth">
								로그인
							</S.HeaderLoginText>
						)}
					</S.HeaderLoginWrap>
				</S.HeaderSearchWrap>
			</S.HeaderWrap>
			<S.SubHeaderWrap isHover={isHover}>
				<S.SubHeaderPlace>
					<S.HeaderLogo src="/images/logo.png" alt="logo" width={0} height={0} />
				</S.SubHeaderPlace>
				<S.HeaderSectionWrap>
					<S.SubHeaderSectionWrap>
						<S.SubHeaderSection href="/docs/부마위키%20방명록">
							<S.HeaderSectionText display="true">방명록</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="/docs/부마위키%20업데이트%20내용">
							<S.HeaderSectionText display="true">공지사항</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="https://forms.gle/DzAP7XSYH4ubK43FA" target="_blank">
							<S.HeaderSectionText display="true">문의하기</S.HeaderSectionText>
						</S.SubHeaderSection>
					</S.SubHeaderSectionWrap>
					<S.SubHeaderSectionWrap>
						<S.SubHeaderSection href="/student">
							<S.HeaderSectionText display="true">학생</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="/teacher">
							<S.HeaderSectionText display="true">선생님</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="/club">
							<S.HeaderSectionText display="true">동아리</S.HeaderSectionText>
						</S.SubHeaderSection>
					</S.SubHeaderSectionWrap>
					<S.SubHeaderSectionWrap>
						<S.SubHeaderSection href="/frame">
							<S.HeaderSectionText display="true">틀</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="/accident">
							<S.HeaderSectionText display="true">사건</S.HeaderSectionText>
						</S.SubHeaderSection>
					</S.SubHeaderSectionWrap>
					<S.SubHeaderSectionWrap>
						<S.SubHeaderSection href="">
							<S.HeaderSectionText display="true">추가예정</S.HeaderSectionText>
						</S.SubHeaderSection>
					</S.SubHeaderSectionWrap>
				</S.HeaderSectionWrap>
			</S.SubHeaderWrap>
		</S.HeaderContainer>
	)
}

export default Header
