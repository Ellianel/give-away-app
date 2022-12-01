import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home-component'
import RegisterComponent from "./pages/register-page/Register-component";
import LoginComponent from "./pages/login-page/Login-component";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='register' element={<RegisterComponent />}></Route>
				<Route path='login' element={<LoginComponent />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
