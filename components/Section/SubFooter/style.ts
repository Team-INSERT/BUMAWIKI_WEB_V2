import styled from 'styled-components'

export const SubFooterWrap = styled.div`
	margin-top: auto;
`

export const SubFooterLine = styled.div`
	width: 68vw;
	height: 2px;
	background-color: #ccc;
`

export const SubFooterNoticeWrap = styled.div`
	width: 95%;
	height: 100px;
	display: flex;
	flex-direction: column;
	margin-top: auto;
	margin-bottom: 20px;
`

export const SubFooterNoticeLogo = styled.svg`
	margin-left: auto;
	margin-right: 5px;

	@media (max-width: 500px) {
		width: 100px;
		height: 50px;
	}
`

export const SubFooterDescription = styled.p`
	margin-left: auto;
	text-align: right;
	font-size: 14px;
	font-weight: 800;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`
