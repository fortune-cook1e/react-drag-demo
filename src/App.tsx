import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import AppErrorBoundary from './components/ErrorBoundary'

const App = (): JSX.Element => {
	return (
		<AppErrorBoundary>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</HashRouter>
		</AppErrorBoundary>
	)
}

export default App
