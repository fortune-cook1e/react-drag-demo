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
