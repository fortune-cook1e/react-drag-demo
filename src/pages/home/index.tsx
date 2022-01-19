import React, { DragEvent } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { addComponent, setCurrentComponent } from '@/store/slices/component'

import Attributes from '@/components/Attributes'
import ComponentList from '@/components/ComponentList'
import Editor from '@/components/Editor'
import Tools from '@/components/Tools'

import styles from './index.module.less'

import { CUSTOM_COMPONENT_DATA } from '@/constants'
import { deepCopy, getEditorDom } from '@/utils'

const Home = (): JSX.Element => {
	const dispatch = useAppDispatch()

	const generateComponentData = ({
		index = 0,
		clientX = 0,
		clientY = 0
	}: {
		index: number
		clientX: number
		clientY: number
	}) => {
		const editorDom = getEditorDom() as HTMLElement
		// FIXBUG: 这里存在对象引用关系 所以需要用深拷贝
		const component = deepCopy(CUSTOM_COMPONENT_DATA[Number(index)])
		if (!component) return null
		const id = uuidV4()
		const editorRect = editorDom.getBoundingClientRect()
		component.id = id
		// TODO: 这里设置component的style时需要使用addUnit 增加像素
		component.style.left = clientX - editorRect.x
		component.style.top = clientY - editorRect.y

		return component
	}

	const handleDrapOver = (ev: DragEvent) => {
		ev.preventDefault()
		ev.dataTransfer.dropEffect = 'copy'
	}

	// drop 事件的index 来源于 ComponentList 组件
	const handleDrop = (ev: DragEvent) => {
		ev.preventDefault()
		const { clientX, clientY } = ev
		const componentIndex = ev.dataTransfer.getData('index')

		// FIXBUG: 这里处理拖拽图片组件时(index 为空字符串) 同样会出现drap drop操作
		if (!componentIndex) return

		const componentData = generateComponentData({
			index: Number(componentIndex),
			clientX,
			clientY
		})

		componentData && dispatch(addComponent(componentData))
	}

	// 点击中间区域则取消选择组件
	const handleDeselectComponent = () => {
		dispatch(setCurrentComponent(null))
	}

	return (
		<div className={styles.home}>
			<div className={styles.tools}>
				<Tools />
			</div>

			<div className={styles.main}>
				<section className={styles.components}>
					<ComponentList />
				</section>

				<section
					className={styles.editor}
					onDrop={handleDrop}
					onDragOver={handleDrapOver}
					onClick={handleDeselectComponent}
				>
					<Editor />
				</section>

				<section className={styles.attributes}>
					<Attributes />
				</section>
			</div>
		</div>
	)
}

export default Home
