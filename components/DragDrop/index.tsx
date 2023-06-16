import FileListArray from '@/types/filelistArray.type'
import React from 'react'
import * as S from './style'

export interface IFileTypes {
	id: number
	object: File
}

interface DragDropFunctionPropsType {
	getFiles: (file: FileListArray[]) => void
}

const DragDrop = ({ getFiles }: DragDropFunctionPropsType) => {
	const [isDragging, setIsDragging] = React.useState<boolean>(false)
	const [files, setFiles] = React.useState<IFileTypes[]>([])

	const fileId = React.useRef<number>(0)
	const dragRef = React.useRef<HTMLLabelElement | null>(null)

	React.useEffect(() => {
		getFiles(files)

		// eslint-disable-next-line
	}, [files])

	const handleFilterFile = React.useCallback((id: number): void => setFiles(files.filter((file: IFileTypes) => file.id !== id)), [files])

	const onChangeFiles = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLInputElement>) => {
			let selectFiles: File[] = []
			let tempFiles: IFileTypes[] = [...files]

			if (e.type === 'drop') {
				const dragEvent = e as React.DragEvent<HTMLInputElement>
				const fileList = dragEvent.dataTransfer.files
				selectFiles = fileList ? Array.from(fileList) : [] // FileList가 null이면 빈 배열 할당
			} else {
				const changeEvent = e as React.ChangeEvent<HTMLInputElement>
				const fileList = changeEvent.target.files
				selectFiles = fileList ? Array.from(fileList) : [] // FileList가 null이면 빈 배열 할당
			}

			for (const file of selectFiles) {
				tempFiles = [
					...tempFiles,
					{
						id: fileId.current++,
						object: file,
					},
				]
			}

			setFiles(tempFiles)
		},
		[files]
	)

	const handleDragIn = React.useCallback((e: DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
	}, [])

	const handleDragOut = React.useCallback((e: DragEvent) => {
		e.preventDefault()
		e.stopPropagation()

		setIsDragging(false)
	}, [])

	const handleDragOver = React.useCallback((e: DragEvent) => {
		e.preventDefault()
		e.stopPropagation()

		if (e.dataTransfer!.files) setIsDragging(true)
	}, [])

	const handleDrop = React.useCallback(
		(e: DragEvent) => {
			e.preventDefault()
			e.stopPropagation()

			onChangeFiles(e as unknown as React.DragEvent<HTMLInputElement>)
			setIsDragging(false)
		},
		[onChangeFiles]
	)

	const initDragEvents = React.useCallback(() => {
		if (!!dragRef.current) {
			dragRef.current.addEventListener('dragenter', handleDragIn)
			dragRef.current.addEventListener('dragleave', handleDragOut)
			dragRef.current.addEventListener('dragover', handleDragOver)
			dragRef.current.addEventListener('drop', handleDrop)
		}
	}, [handleDragIn, handleDragOut, handleDragOver, handleDrop])

	const resetDragEvents = React.useCallback(() => {
		if (!!dragRef.current) {
			dragRef.current.removeEventListener('dragenter', handleDragIn)
			dragRef.current.removeEventListener('dragleave', handleDragOut)
			dragRef.current.removeEventListener('dragover', handleDragOver)
			dragRef.current.removeEventListener('drop', handleDrop)
		}
	}, [handleDragIn, handleDragOut, handleDragOver, handleDrop])

	React.useEffect(() => {
		initDragEvents()
		return () => resetDragEvents()
	}, [initDragEvents, resetDragEvents])

	return (
		<S.DragDropWrap>
			<S.NoneDisplayInput onChange={onChangeFiles} type="file" id="fileUpload" multiple={true} />
			<S.DragDropButton style={isDragging ? { backgroundColor: '#274168', color: 'white' } : {}} htmlFor="fileUpload" ref={dragRef}>
				<S.DragDropTitle>드래그하여 파일 업로드</S.DragDropTitle>
			</S.DragDropButton>
			<S.DragDropFiles>
				{files.length > 0 &&
					files.map((file: IFileTypes) => (
						<S.DragDropFile key={file.id}>
							<S.DragDropFileName>{file.object.name}</S.DragDropFileName>
							<S.DragDropFileDeleteButton onClick={() => handleFilterFile(file.id)}>X</S.DragDropFileDeleteButton>
						</S.DragDropFile>
					))}
			</S.DragDropFiles>
		</S.DragDropWrap>
	)
}

export default DragDrop
