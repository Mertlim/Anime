import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AnimeItem } from './pages/AnimeItem'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/AnimeItem' element={<AnimeItem />} />
			</Routes>
			<Footer/>
		</div>
	)
}

export default App

