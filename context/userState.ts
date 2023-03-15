import { atom } from 'recoil'

export const initUserState = {
	id: 0,
	email: '',
	nickName: '',
	authority: '',
	contributeDocs: [],
	isLogin: false,
}

const userState = atom({
	key: 'userState',
	default: initUserState,
})

export default userState
