import { CSSProperties } from 'react'

const CUSTOM_COMPONENT_TEXT = 'CustomText' // 文本组件

type CustomComponentType = typeof CUSTOM_COMPONENT_TEXT

export interface IComponentData {
	component: CustomComponentType // 自定义组件
	label: string // 组件名称
	icon: string
	style: CSSProperties
}
