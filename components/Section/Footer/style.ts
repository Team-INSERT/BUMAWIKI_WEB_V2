import Image from 'next/image'
import styled from 'styled-components'

export const FooterWrap = styled.div`
	width: 100vw;
	height: 22vh;
	background-color: #fff;
	border: 1px solid #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const FooterLogoWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const FooterLink = styled.a``

export const FooterLogo = styled(Image)``

export const FooterLine = styled.div`
	margin: 0 20px 0 20px;
	width: 2px;
	height: 25px;
	background-color: black;
`

export const FooterInfoWrap = styled.div`
	margin-top: 12px;
`

export const FooterInfo = styled.span`
	font-size: 14px;
	font-family: 'Open Sans', sans-serif;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`
