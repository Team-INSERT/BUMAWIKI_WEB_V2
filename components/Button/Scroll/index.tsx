import * as S from './style'

import ScrollDown from 'assets/scroll_down.svg'
import ScrollUp from 'assets/scroll_up.svg'
import React from 'react'

const ScrollBtn = () => {
	const scrollToTop = () => {
		window.scroll({ top: 0, behavior: 'smooth' })
	}
	const scrollToBottom = () => {
		window.scroll({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
	}

	return (
		<S.ScrollButtonWrap>
			<S.ScrollButton onClick={scrollToTop}>
				<S.ScrollArrow src={ScrollUp} alt="" />
			</S.ScrollButton>
			<S.ScrollButton onClick={scrollToBottom}>
				<S.ScrollArrow src={ScrollDown} alt="" />
			</S.ScrollButton>
		</S.ScrollButtonWrap>
	)
}

export default ScrollBtn
