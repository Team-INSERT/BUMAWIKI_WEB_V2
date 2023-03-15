interface VersionDocs {
	thisVersionCreatedAt: string
	userId: number
	nickName: string
}

interface VersionDocsInfo {
	title: string
	docsType: string
}

interface VersionDocsService {
	contents: string
	nickName: string
	thisVersionCreatedAt: string
	userId: string
}

export { VersionDocs, VersionDocsInfo, VersionDocsService }
