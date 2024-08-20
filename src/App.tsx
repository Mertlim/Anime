import { observer } from 'mobx-react-lite'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { AnimeItem } from './pages/AnimeItem'
import { Home } from './pages/Home'

export const App = observer(() => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/AnimeItem' element={<AnimeItem />} />
			</Routes>
			<Footer />
		</div>
	)
})