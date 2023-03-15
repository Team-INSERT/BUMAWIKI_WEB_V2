import styled from "styled-components"

const Board = styled.div`
	width: 72vw;
	height:fit-content;
	min-height: 100vh;
	background-color: #fff;
	border-left: 2px solid #ccc;
	border-right: 2px solid #ccc;
	margin: 0 1.6vw 0 6vw;
	display: flex;
	align-items: center;
	flex-direction: column;
	overflow:hidden;
	height:auto;
	
	@media (max-width: 500px) {
        width:100vw;
		margin: 0;
    }
`;

export default Board