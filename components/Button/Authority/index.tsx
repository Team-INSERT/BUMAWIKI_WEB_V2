import * as S from './style'

import React from 'react'
import { useMutation } from 'react-query'
import httpClient from '@/lib/httpClient'
import Swal from 'sweetalert2'
import authority from '@/constants/authority.constants'

interface AuthorityProps {
	email: string
}

interface AuthorityApiProps extends AuthorityProps {
	authority: string
}

const Authority = ({ email }: AuthorityProps) => {
	const { mutate } = useMutation(({ email, authority }: AuthorityApiProps) => httpClient.authority.put({ email, authority }), {
		onSuccess: () =>
			Swal.fire({
				icon: 'success',
				title: '유저 권한이 변경되었습니다!',
			}),
	})

	const onClickAuthorityUser = (authority: string) => {
		if (window.confirm(`유저 권한을 ${authority}(으)로 변경하시겠습니까?`)) return mutate({ email, authority })
	}

	return (
		<S.AuthorityButtonWrap>
			<S.AuthorityLinkWrap onClick={() => onClickAuthorityUser(authority.ADMIN)}>
				<S.AuthorityButton>
					<S.AuthorityText>{authority.ADMIN}</S.AuthorityText>
				</S.AuthorityButton>
			</S.AuthorityLinkWrap>
			<S.AuthorityLinkWrap onClick={() => onClickAuthorityUser(authority.USER)}>
				<S.AuthorityButton>
					<S.AuthorityText>{authority.USER}</S.AuthorityText>
				</S.AuthorityButton>
			</S.AuthorityLinkWrap>
			<S.AuthorityLinkWrap onClick={() => onClickAuthorityUser(authority.READONLY)}>
				<S.AuthorityButton>
					<S.AuthorityText>{authority.READONLY}</S.AuthorityText>
				</S.AuthorityButton>
			</S.AuthorityLinkWrap>
		</S.AuthorityButtonWrap>
	)
}

export default Authority
