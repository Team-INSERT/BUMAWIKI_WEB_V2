import styled from 'styled-components'

export const DocsWrap = styled.div`
	display: flex;
`

export const DocsLine = styled.div`
	width: 68vw;
	height: 1.5px;
	background-color: #ccc;

	@media (max-width: 500px) {
		width: 90vw;
	}
`
export const DocsTitleWrap = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
`

export const DocsTitleText = styled.span`
	color: #274168;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	font-size: 34px;
	margin-left: 30px;

	@media (max-width: 500px) {
		font-size: 26px;
	}
`

export const DocsMenu = styled.div`
	margin-left: auto;
	margin-right: 2vw;
`

export const Classify = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 25px;
	margin-bottom: 30px;
`

export const DocsContentsWrap = styled.div`
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`

export const DocsContentsLoadWrap = styled.div`
	display: flex;
	flex-direction: column;
`

export const LastUpdateDate = styled.span`
	font-weight: 700;
	font-size: 12px;
	margin-left: auto;
`

export const DocsContents = styled.div`
	margin: 20px 0 20px 0;
	white-space: pre-wrap;

	img {
		margin-top: 10px;
		width: 80%;
	}
`
