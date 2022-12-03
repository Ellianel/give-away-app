import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home-component'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/' element={<Home />}></Route>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
