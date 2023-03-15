import ContibuteDocsType from './contributeDocs.type'

interface UserType {
	id: number
	nickName: string
	authority: string
	contributeDocs: ContibuteDocsType[]
}

export default UserType
