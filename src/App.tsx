import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import AppErrorBoundary from './components/ErrorBoundary'

const App = (): JSX.Element => {
	return (
		<AppErrorBoundary>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</AppErrorBoundary>
	)
}

export default App
