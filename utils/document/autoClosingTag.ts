const autoClosingTag = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
	const selection = e.target.selectionStart
	const { inputType } = e.nativeEvent as InputEvent
	const { target } = e
	const { value } = target

	if (value[selection - 1] === '>') {
		if (inputType === 'deleteContentBackward') return value
		let text = value.slice(0, selection)
		const tag = text.substring(text.lastIndexOf('<') + 1, text.length)
		const isWrongTag = text.substring(text.lastIndexOf('<'), text.length)

		if (!isWrongTag.includes('<') || tag.includes('/') || tag.includes('사진')) return value

		if (tag.includes('링크')) text += `</${tag.substring(0, tag.indexOf(' '))}>` + value.slice(selection, value.length)
		else text += `</${tag}` + value.slice(selection, value.length)

		const after_front_text = value.slice(0, selection)
		const insideTag = after_front_text.slice(after_front_text.lastIndexOf('<'), after_front_text.length)

		const after_back_text = value.slice(selection, value.length)
		const outsideTag = after_back_text.slice(after_back_text.indexOf('</'), after_back_text.indexOf('>') + 1).replace('/', '')

		if (insideTag === outsideTag || (insideTag.includes('링크') && outsideTag.includes('링크'))) return value
		if (insideTag.split('>').length === 3) return value

		setTimeout(() => {
			target.selectionStart = selection
			target.selectionEnd = selection
		})
		return text
	}
	return value
}

export default autoClosingTag
