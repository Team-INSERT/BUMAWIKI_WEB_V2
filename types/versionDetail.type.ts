import { VersionDocs } from './version.type'

export interface VersionInfoType {
	version: VersionDocs[]
	title: string
	docsType: string
	index: number
	thisVersionCreatedAt: string
}

export interface VersionDetailArrayPropsType {
	operation: 'EQUAL' | 'INSERT' | 'DELETE'
	text: string
}

export interface VersionDetailPropsType {
	info: VersionInfoType
	versionId: number
	different: VersionDetailArrayPropsType[]
}
