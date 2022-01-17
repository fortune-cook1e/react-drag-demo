import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
