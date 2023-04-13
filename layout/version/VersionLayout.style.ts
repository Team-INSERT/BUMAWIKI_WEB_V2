import Link from 'next/link'
import styled, { css } from 'styled-components'

export const VersionList = styled.li`
	display: flex;
	margin-bottom: 30px;
`

export const VersionBox = styled.div`
	display: block;
	width: 400px;
	font-weight: 600;
`

export const VersionLink = styled(Link)`
	font-weight: 600;
	text-decoration: none;
	color: blue;
`

export const VersionWrap = styled.div`
	display: flex;
`

export const VersionLine = styled.div`
	width: 68vw;
	height: 1.5px;
	background-color: #ccc;

	@media (max-width: 500px) {
		width: 90vw;
	}
`
export const VersionTitleWrap = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
`

export const VersionTitleText = styled.span`
	color: #274168;
	font-weight: 800;
	font-size: 34px;
	margin-left: 30px;

	@media (max-width: 500px) {
		font-size: 26px;
	}
`

export const VersionMenu = styled.div`
	margin-left: auto;
	margin-right: 2vw;
`

export const Classify = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 25px;
	margin-bottom: 30px;
`

export const VersionContentsWrap = styled.div`
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`

export const VersionContentsLoadWrap = styled.div`
	display: flex;
	flex-direction: column;
`

export const LastUpdateDate = styled.span`
	font-weight: 700;
	font-size: 12px;
	margin-left: auto;
`

export const VersionContents = styled.div<{ color: string }>`
	white-space: pre-wrap;
	width: 100%;
	padding: 6px;
	background-color: ${({ color }) => color}80;
	opacity: 1;

	img {
		margin-top: 10px;
		width: 80%;
	}
`

export const VersionContentsIconBox = styled.div<{ color: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	font-weight: 500;
	background-color: ${({ color }) => color};
`

export const VersionContentsContainer = styled.div`
	display: flex;
	height: fit-content;
`
