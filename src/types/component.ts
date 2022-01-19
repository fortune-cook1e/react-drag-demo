import { CSSProperties } from 'react'

const CUSTOM_COMPONENT_TEXT = 'CustomText' // 文本组件
const CUSTOM_COMPONENT_IMAGE = 'CustomImage' // 图片组件

type CustomComponentType =
	| typeof CUSTOM_COMPONENT_TEXT
	| typeof CUSTOM_COMPONENT_IMAGE

export interface IComponentData {
	id: string
	component: CustomComponentType // 自定义组件
	label: string // 组件label
	icon: string
	style: CSSProperties
	value: string // 文本节点的文本；图片组件的url
}
