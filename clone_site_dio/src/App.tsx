/* eslint-disable react/jsx-filename-extension */
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Feed } from "./pages/feed"
import { Registration } from "./pages/registration"


function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/feed' element={<Feed />} />
				<Route path='/registration' element={<Registration />} />
			</Routes>
		</Router>
	)
}

export default App
