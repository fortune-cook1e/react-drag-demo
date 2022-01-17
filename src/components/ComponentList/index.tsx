import React from 'react'
import { CUSTOM_COMPONENT_DATA } from '@/constants'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const ComponentList = (): JSX.Element => {
	return (
		<div>
			{CUSTOM_COMPONENT_DATA.map(c => (
				<Button key={c.component} type='dashed' icon={<SearchOutlined />}>
					{c.component}
				</Button>
			))}
		</div>
	)
}

export default ComponentList
