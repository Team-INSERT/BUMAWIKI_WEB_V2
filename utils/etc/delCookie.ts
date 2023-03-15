const delCookie = (name: string) => {
	document.cookie = name + '=; Max-Age=-99999999;'
}

export default delCookie
