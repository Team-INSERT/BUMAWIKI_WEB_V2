type LocalStorageKey = 'access_token' | 'refresh_token' | 'autoComplete'

export class Storage {
	static getItem(key: LocalStorageKey) {
		if (typeof window !== 'undefined') return localStorage.getItem(key)
	}

	static setItem(key: LocalStorageKey, value: string) {
		if (typeof window === 'undefined') return
		localStorage.setItem(key, value)
	}

	static delItem(key: LocalStorageKey) {
		if (typeof window === 'undefined') return
		localStorage.removeItem(key)
	}
}
