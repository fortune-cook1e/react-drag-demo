import { CSSProperties } from 'react'

// 获取编辑器dom
export const getEditorDom = () => document.getElementById('editor')

/**
 * @description 过滤css样式
 * @param {CSSProperties} style
 * @param {string[]} filter
 * @date 2022-01-18 20:05:25
 * @return {CSSProperties}
 */
export const getStyle = (
	style: CSSProperties,
	filter: string[] = []
): CSSProperties => {
	if (!filter.length) return style
	const _style: any = {}
	for (const key in style) {
		if (!filter.includes(key)) {
			_style[key] = style[key as keyof CSSProperties]
		}
	}
	return _style
}

/**
 * @description 将某个css样式提出来并去除单位
 * @date 2022-01-19 19:56:46
 * @return {number}
 */
export const removeUnitFromStyle = ({
	style,
	field,
	unit = 'px'
}: {
	style?: CSSProperties
	field: keyof CSSProperties
	unit?: string
}) => {
	let value = 0
	if (!style) return value
	for (const key in style) {
		if (key === field) {
			value = Number(
				(style[key as keyof CSSProperties] as string).replace(unit, '')
			)
			break
		}
	}
	return value
}

/**
 * @description 添加css单位
 * @param {string} value
 * @param {*} unit
 * @date 2022-01-19 20:10:00
 * @return {string}
 */
export const addUnit = (value: string | number, unit = 'px') => {
	return value + unit
}
