import React, { DragEvent } from 'react'
import { CUSTOM_COMPONENT_DATA } from '@/constants'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const ComponentList = (): JSX.Element => {
	const handleDragStart = (ev: DragEvent) => {
		// 将当前选中的组件的索引 传递给 Home组件的 drop区域
		ev.dataTransfer.setData('index', (ev.target as any).dataset.index)
	}

	return (
		<div>
			{CUSTOM_COMPONENT_DATA.map((c, i) => (
				<div
					draggable
					key={c.component}
					onDragStart={handleDragStart}
					data-index={i}
				>
					<Button type='dashed' icon={<SearchOutlined />}>
						{c.component}
					</Button>
				</div>
			))}
		</div>
	)
}

export default ComponentList
