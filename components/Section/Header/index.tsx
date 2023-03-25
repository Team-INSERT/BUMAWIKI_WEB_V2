import * as S from './style'
import * as api from '@/api/user'

import Accident from 'assets/accident.svg'
import Club from 'assets/club.svg'
import Create from 'assets/create.svg'
import Search from 'assets/search.svg'
import Student from 'assets/student.svg'
import Teacher from 'assets/teacher.svg'
import userState from '@/context/userState'
import React from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'

const Header = () => {
	const [search, setSearch] = React.useState('')
	const [isHover, setIsHover] = React.useState(false)
	const [user, setUser] = useRecoilState(userState)
	const router = useRouter()

	React.useEffect(() => {
		;(async () => {
			try {
				const res = await api.getUser()
				if (!user.id) setUser(res)
			} catch (err) {
				console.log(err)
			}
		})()
	}, [setUser, user])

	const navigateSearchResult = () => {
		if (search.length) return router.push(`/search/${search}`)
		alert('검색할 문서명을 입력해주세요!')
	}

	return (
		<S.HeaderContainer onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
			<S.HeaderWrap>
				<S.HeaderLink href={'/'}>
					<S.HeaderLogo src="/images/logo.png" width="1000" height="1000" alt="logo" />
				</S.HeaderLink>
				<S.HeaderSectionWrap>
					<S.HeaderSection href={''}>
						<S.HeaderSectionLogo src={Student} alt="" />
						<S.HeaderSectionText>공지</S.HeaderSectionText>
					</S.HeaderSection>
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
					{user.id && (
						<S.HeaderSection href={`/create`}>
							<S.HeaderSectionLogo src={Create} alt="" />
							<S.HeaderSectionText>문서 생성</S.HeaderSectionText>
						</S.HeaderSection>
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
						{user.id ? (
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
					<S.HeaderLogo src="/images/logo.png" width="1000" height="1000" alt="logo" />
				</S.SubHeaderPlace>
				<S.HeaderSectionWrap>
					<S.SubHeaderSectionWrap>
						<S.SubHeaderSection href="/docs/부마위키%20업데이트%20내용">
							<S.HeaderSectionText display="true">공지사항</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="/docs/부마위키%20방명록">
							<S.HeaderSectionText display="true">방명록</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="/docs/부마위키%20개인정보처리방침">
							<S.HeaderSectionText>처리방침</S.HeaderSectionText>
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
					<S.SubHeaderSectionWrap margin="1.2vw">
						<S.SubHeaderSection href="/frame">
							<S.HeaderSectionText display="true">틀</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="/accident">
							<S.HeaderSectionText display="true">사건</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="/popular">
							<S.HeaderSectionText display="true">인기문서</S.HeaderSectionText>
						</S.SubHeaderSection>
					</S.SubHeaderSectionWrap>
					<S.SubHeaderSectionWrap>
						<S.SubHeaderSection href="">
							<S.HeaderSectionText display="true">BSM</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="">
							<S.HeaderSectionText display="true">BGIT</S.HeaderSectionText>
						</S.SubHeaderSection>
						<S.SubHeaderSection href="">
							<S.HeaderSectionText display="true">심청이</S.HeaderSectionText>
						</S.SubHeaderSection>
					</S.SubHeaderSectionWrap>
				</S.HeaderSectionWrap>
			</S.SubHeaderWrap>
		</S.HeaderContainer>
	)
}

export default Header
