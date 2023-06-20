import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

// import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={[<Header />, <Main />, <Footer />]} />
				<Route path="/movies" element={[<Header />, <Movies />, <Footer />]} />
				<Route path="/saved-movies" element={[<Header />, <SavedMovies />, <Footer />]} />
				<Route path="/profile" element={[<Header />, <Profile />]} />
				{/* <Route path="/signin" element={<Login />} /> */}
				{/* <Route path="/signup" element={<Register />} /> */}
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
