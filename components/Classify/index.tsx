import * as FC from '@/utils'
import * as S from './style'

import React from 'react'

const Classify = ({ children }: React.PropsWithChildren) => {
	return (
		<S.ClassifyWrap>
			<S.ClassifyText>분류 :</S.ClassifyText>
			<S.ClassifyText color={'#EC9F19'}>{FC.typeEditor(children as string)}</S.ClassifyText>
		</S.ClassifyWrap>
	)
}

export default Classify
