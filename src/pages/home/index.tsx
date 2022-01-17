import React from 'react'
import Attributes from '@/components/Attributes'
import ComponentList from '@/components/ComponentList'
import Editor from '@/components/Editor'
import Tools from '@/components/Tools'
import styles from './index.module.less'

const Home = (): JSX.Element => {
	return (
		<div className={styles.home}>
			<div className={styles.tools}>
				<Tools />
			</div>

			<div className={styles.main}>
				<div className={styles.components}>
					<ComponentList />
				</div>
				<div className={styles.editor}>
					<Editor />
				</div>
				<div className={styles.attributes}>
					<Attributes />
				</div>
			</div>
		</div>
	)
}

export default Home
