import ContributeDocsType from './contributeDocs.type'

interface UserType {
	id: number
	nickName: string
	authority: string
	email: string
	isLogin: boolean
	contributeDocs: ContributeDocsType[]
}

export default UserType
