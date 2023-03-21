type LocalStorageKey = 'access_token' | 'refresh_token'
export class Storage {
	static getItem(key: LocalStorageKey) {
		return typeof window !== 'undefined' ? localStorage.getItem(key) : null
	}

	static setItem(key: LocalStorageKey, value: string) {
		if (typeof window === 'undefined') return
		localStorage.setItem(key, value)
	}
}
