import styled from 'styled-components'

export const ClassifyWrap = styled.div`
	width: 68vw;
	height: 4vh;
	border: 1px solid #ccc;
	border-radius: 3px;
	display: flex;
	align-items: center;
	font-size: 13px;
	font-weight: 500;

	@media (max-width: 500px) {
		width: 90vw;
	}
`

export const ClassifyText = styled.div`
	margin-left: 8px;
	color: ${(props) => props.color || 'black'};
`
