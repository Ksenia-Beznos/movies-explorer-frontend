import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Edit from '../Edit/Edit';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {
	const location = useLocation();
	const headerIncluded = ['/movies', '/saved-movies', '/profile'];
	const footerIncluded = ['/', '/movies', '/saved-movies'];
	const headerVisible = headerIncluded.includes(location.pathname);
	const footerVisible = footerIncluded.includes(location.pathname);

	const headerHomePage = ['/'];
	const headerVisibleHomePage = headerHomePage.includes(location.pathname);

	return (
		<div className="app">
			{headerVisible && <Header />}
			{headerVisibleHomePage && <Header color={'header_style_color'} />}
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/movies" element={[<Movies />, <BurgerMenu />]} />
				<Route path="/saved-movies" element={[<SavedMovies />, <BurgerMenu />]} />
				<Route path="/profile" element={[<Profile />, <BurgerMenu />]} />
				<Route path="/signin" element={<Login />} />
				<Route path="/signup" element={<Register />} />
				<Route path="/edit" element={<Edit />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			{footerVisible && <Footer />}
		</div>
	);
}

export default App;
