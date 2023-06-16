const onKeyDownUseTab = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
	const target = e.target as HTMLTextAreaElement

	if (e.keyCode === 9) {
		e.preventDefault()
		const v = target.value,
			s = target.selectionStart,
			f = target.selectionEnd
		target.value = v.substring(0, s) + '\t' + v.substring(f)
		target.selectionStart = target.selectionEnd = s + 1
		return false
	}
}

export default onKeyDownUseTab
