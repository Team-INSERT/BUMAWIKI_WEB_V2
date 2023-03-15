import FileListArray from './filelistArray.type'

interface CreateDocsType {
	title: string
	contents: string
	docsType: string
	enroll: number
	files: FileListArray[]
}

export default CreateDocsType
