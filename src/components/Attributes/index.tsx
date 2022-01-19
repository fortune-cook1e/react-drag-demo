import React, { useState } from 'react'
import { Tabs } from 'antd'
import { useAppSelector } from '@/hooks'
import { componentSelector } from '@/store/slices/component'
import Base from './Base'
import Events from './Events'

const { TabPane } = Tabs

const TAB_BASE = 'base'
const TAB_EVENT = 'event'

type TabType = typeof TAB_BASE | typeof TAB_EVENT

const NoCurrentComponent = () => <p>请选择组件</p>

const Attributes = (): JSX.Element => {
	const { currentComponent } = useAppSelector(componentSelector)
	const [activeTab, setActiveTab] = useState<TabType>(TAB_BASE)

	const handleTabChange = (key: string) => {
		setActiveTab(key as TabType)
	}

	const currentComponentExit = () => !!currentComponent

	return (
		<Tabs activeKey={activeTab} onChange={handleTabChange}>
			<TabPane tab='属性' key={TAB_BASE}>
				{currentComponent ? <Base /> : <NoCurrentComponent />}
			</TabPane>
			<TabPane tab='事件' key={TAB_EVENT}>
				{currentComponent ? <Events /> : <NoCurrentComponent />}
			</TabPane>
		</Tabs>
	)
}

export default Attributes
