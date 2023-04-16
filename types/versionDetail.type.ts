import { VersionDocs } from './version.type'

export interface VersionInfoType {
	version: VersionDocs[]
	title: string
	docsType: string
	index: number
	thisVersionCreatedAt: string
}

interface VersionArrayType {
	title: string
	docsType: string
	versionDocs: VersionDocsType
	diff: VersionDetailArrayPropsType[]
}

export interface VersionDetailArrayPropsType {
	operation: 'EQUAL' | 'INSERT' | 'DELETE'
	text: string
}

interface VersionDocsType {
	id: number
	thisVersionCreatedAt: string
	userId: number
	nickName: string
}

export interface VersionDetailPropsType {
	versionId: number
	different: VersionArrayType
}
