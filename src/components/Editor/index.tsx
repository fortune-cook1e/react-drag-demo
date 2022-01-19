import React, { CSSProperties, useEffect } from 'react'
import CustomText from '../CustomText'
import CustomImage from '../CustomImage'
import Shape from '../Shape'
import GridLine from '../GridLine'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { componentSelector } from '@/store/slices/component'
import { getStyle } from '@/utils/dom'
import styles from './index.module.less'

const CustomComponentMap = {
	CustomText,
	CustomImage
}

const Editor = (): JSX.Element => {
	const { componentData } = useAppSelector(componentSelector)

	// shape 组件获取 定位样式即可
	const getShapeStyle = (style: CSSProperties): CSSProperties => {
		const _style: any = {}
		const shapeStyle: string[] = ['top', 'right', 'bottom', 'left']
		for (const key in style) {
			if (shapeStyle.includes(key)) {
				_style[key] = style[key as keyof CSSProperties]
			}
		}
		return _style
	}

	// 组件样式不需要定位样式，因为定位是交给shape组件
	const getComponentStyle = (style: CSSProperties): CSSProperties => {
		const unless: string[] = ['top', 'right', 'bottom', 'left']
		return getStyle(style, unless)
	}

	return (
		<div id='editor' className={styles.editor}>
			<GridLine />
			{componentData.map(c => {
				const Component = CustomComponentMap[c.component]
				return (
					<Shape style={getShapeStyle(c.style)} key={c.id} element={c}>
						<Component style={getComponentStyle(c.style)} element={c} />
					</Shape>
				)
			})}
		</div>
	)
}

export default Editor
