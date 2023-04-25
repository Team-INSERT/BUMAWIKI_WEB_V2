export const GA_TRACKING_ID = 'G-8ZSKY8XTM9'

declare global {
	interface Window {
		gtag: (config: string, id: string, page_path: PagePathType | PageActionType) => void
	}
}

interface PagePathType {
	page_path: URL
}

interface PageActionType {
	event_category: string
	event_label: string
	value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	})
}

type GTagEvent = {
	action: string
	category: string
	label: string
	value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	})
}
