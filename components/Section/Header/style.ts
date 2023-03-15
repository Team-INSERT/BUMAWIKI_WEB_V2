import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const HeaderWrap = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 6.5vh;
	background-color: #274168;
`

export const SubHeaderWrap = styled.div<{ isHover: boolean }>`
	width: 100vw;
	height: 17vh;
	display: flex;
	top: 6.5vh;
	position: fixed;
	z-index: 2;
	align-items: center;
	background-color: #526786;
	display: ${(props) => (props.isHover ? 'flex' : 'none')};
`

export const HeaderLink = styled(Link)`
	display: flex;
	align-items: center;

	@media (max-width: 500px) {
		display: none;
	}
`

export const SubHeaderPlace = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 500px) {
		display: none;
	}

	img {
		opacity: 0;
	}
`

export const HeaderLogo = styled(Image)`
	margin-left: 7vw;
	width: 8vw;
	height: auto;
`

export const HeaderSectionWrap = styled.div`
	display: flex;
`

export const HeaderSection = styled(Link)`
	display: flex;
	cursor: pointer;
	text-decoration: none;
	margin-left: 4vw;
	height: 6.5vh;
	justify-content: center;
	align-items: center;

	@media (max-width: 500px) {
		margin-left: 9vw;
	}
`

export const SubHeaderSection = styled(Link)`
	display: flex;
	cursor: pointer;
	text-decoration: none;
	margin: 1vh 0 1vh auto;
	justify-content: center;
	align-items: center;

	@media (max-width: 500px) {
		margin-right: auto;
	}
`

export const SubHeaderSectionWrap = styled.div`
	display: flex;
	cursor: pointer;
	text-decoration: none;
	margin: 0 2vw 0 3vw;
	flex-direction: column;
	align-items: center;

	@media (max-width: 500px) {
		margin-left: 4vw;
	}
`

export const HeaderSectionLogo = styled(Image)`
	width: 14px;
	height: 14px;
`

export const HeaderSectionText = styled.span<{ display?: boolean }>`
	margin-left: 8px;
	color: white;
	font-size: 15px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;

	@media (max-width: 500px) {
		font-size: 10px;
		display: ${(props) => (props.display ? 'block' : 'none')};
	}
`

export const HeaderSearchWrap = styled.div`
	display: flex;
	margin-left: auto;
	align-items: center;
`

export const HeaderSearchForm = styled.form`
	display: flex;
	justify-content: center;
`

export const HeaderSearchInput = styled.input`
	width: 160px;
	height: 24px;
	border: 1px solid #ccc;
	outline: none;
	padding-left: 8px;
	font-size: 12px;
	font-family: 'Open Sans', sans-serif;
	color: $main-color;
	font-weight: 800;

	@media (max-width: 500px) {
		width: 70px;
		height: 16px;
	}
`

export const HeaderSearchButton = styled.button`
	width: 28px;
	height: 26px;
	background-color: #fff;
	border: 1px solid #ccc;
	border-left: none;
	cursor: pointer;

	@media (max-width: 500px) {
		width: 18px;
		height: 18px;
	}
`

export const HeaderSearchLogo = styled(Image)``

export const HeaderLoginWrap = styled.div`
	margin: 0 7vw 0 1vw;

	@media (max-width: 500px) {
		margin-left: 3vw;
	}
`

export const HeaderMypageText = styled(Link)`
	cursor: pointer;
	color: white;
	font-family: 'Open Sans', 'sans-serif';
	font-weight: 800;
	text-decoration: none;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`

export const HeaderLoginText = styled.a`
	cursor: pointer;
	color: white;
	font-family: 'Open Sans', 'sans-serif';
	font-weight: 800;
	text-decoration: none;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`
