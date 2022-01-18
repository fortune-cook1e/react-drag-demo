import React, { DragEvent } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { addComponent } from '@/store/slices/component'

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
		const id = uuidV4()
		const editorRect = editorDom.getBoundingClientRect()
		component.id = id
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
		const index = Number(ev.dataTransfer.getData('index'))
		const componentData = generateComponentData({ index, clientX, clientY })
		dispatch(addComponent(componentData))
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
