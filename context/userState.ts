import { atom } from 'recoil'
import { v4 } from 'uuid'

export const initUserState = {
	id: 0,
	email: '',
	nickName: '',
	authority: '',
	contributeDocs: [],
	isLogin: false,
}

const userState = atom({
	key: `userState/${v4()}`,
	default: initUserState,
})

export default userState
