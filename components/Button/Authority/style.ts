import styled from 'styled-components'

export const AuthorityButtonWrap = styled.div`
	display: flex;
	margin-bottom: 20px;
`

export const AuthorityWrap = styled.div`
	text-decoration: none;
	cursor: pointer;
`

export const AuthorityLinkWrap = styled.div`
	text-decoration: none;
	cursor: pointer;

	&:last-child {
		div {
			border-right: 2px solid #ccc;
		}
	}
`

export const AuthorityButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 72px;
	height: 26px;
	border-left: 2px solid #ccc;
	border-top: 2px solid #ccc;
	border-bottom: 2px solid #ccc;
`

export const AuthorityText = styled.span`
	color: rgb(146, 146, 146);
	font-size: 14px;
	font-weight: 600;
`

export const AuthorityInput = styled.input`
	border: 2px solid #ccc;
	border-right: none;
	outline: none;
	padding-left: 10px;
	font-weight: 700;
	font-size: 12px;
`
