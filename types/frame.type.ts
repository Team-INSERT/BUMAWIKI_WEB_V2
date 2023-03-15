import { ButtonHTMLAttributes } from 'react'

interface FrameType extends ButtonHTMLAttributes<HTMLButtonElement> {
	row: number
	column: number
}

export default FrameType
