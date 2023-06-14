import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
// import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/saved-movies" element={<SavedMovies />} />
				{/* <Route path="/profile" element={<Profile />} /> */}
				{/* <Route path="/signin" element={<Login />} /> */}
				{/* <Route path="/signup" element={<Register />} /> */}
				{/* <Route path="*" element={<PageNotFound />} /> */}
			</Routes>
		</div>
	);
}

export default App;
