import { IComponentData } from '@/types/index'

export const CUSTOM_COMPONENT_DATA: IComponentData[] = [
	{
		id: '',
		component: 'CustomText',
		label: '文本',
		icon: 'FontSizeOutlined',
		value: 'this is text',
		style: {}
	},
	{
		id: '',
		component: 'CustomImage',
		label: '图片',
		icon: 'FontSizeOutlined',
		value:
			'https://gitee.com/fortunecookie/image-hosting/raw/master/upic/2022/01/19-10-48-58-qwfZRb-271937199_1103869107094004_1803066639724710253_n.jpeg',
		style: {
			width: '150px',
			height: '150px'
		}
	}
]
