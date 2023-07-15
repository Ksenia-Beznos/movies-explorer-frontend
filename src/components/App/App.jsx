import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
import { register, login, edit, loginWithToken, logout } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getMovies } from '../../utils/MoviesApi';

function App() {
	const location = useLocation();
	const navigate = useNavigate();

	const headerIncluded = ['/movies', '/saved-movies', '/profile'];
	const footerIncluded = ['/', '/movies', '/saved-movies'];
	const headerVisible = headerIncluded.includes(location.pathname);
	const footerVisible = footerIncluded.includes(location.pathname);

	const headerHomePage = ['/'];
	const headerVisibleHomePage = headerHomePage.includes(location.pathname);

	const [currentUser, setCurrentUser] = useState({});

	const [isMessage, setIsMessage] = useState('');

	const [loggedIn, setLoggedIn] = useState(false);

	const [movies, setMovies] = useState([]);

	// загружаем все фильмы
	useEffect(() => {
		if (loggedIn) {
			Promise.all([getMovies()])
				.then((res) => {
					if (res) {
						setMovies(res[0]);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [loggedIn]);

	// для сброса ошибки
	useEffect(() => {
		setIsMessage('');
	}, [navigate]);

	//регистрация
	function handleSubmitRegister({ name, email, password }) {
		register({ name, email, password })
			.then((res) => {
				if (res) {
					navigate('/movies', { replace: true });
				}
			})
			.catch((err) => {
				console.log(err);
				setIsMessage(err.message);
			});
	}

	// логирование
	function handleSubmitLogin({ email, password }) {
		login({ email, password })
			.then((res) => {
				if (res) {
					setLoggedIn(true);
					navigate('/movies', { replace: true });
				}
			})
			.catch((err) => {
				console.log(err);
				setIsMessage(err.message);
			});
	}

	// разлогирование
	function handleSubmitLogout() {
		logout()
			.then((res) => {
				if (res) {
					setLoggedIn(false);
					navigate('/', { replace: true });
				}
			})
			.catch((err) => {
				console.log(err);
				setIsMessage(err.message);
			});
	}

	useEffect(() => {
		loginWithToken()
			.then((res) => {
				if (res) {
					setLoggedIn(true);
					setCurrentUser(res);
					navigate('/movies', { replace: true });
				}
			})
			.catch((e) => console.log(e));
	}, []);

	// редактирвание
	function handleSubmitEdit({ name, email }) {
		edit({ name, email })
			.then((res) => {
				if (res !== false) {
					navigate('/profile', { replace: true });
				}
			})
			.catch((err) => {
				console.log(err);
				setIsMessage(err.message);
			});
	}

	return (
		<div className="app">
			<CurrentUserContext.Provider value={currentUser}>
				{headerVisible && <Header />}
				{headerVisibleHomePage && <Header color={'header__color'} loggedIn={loggedIn} />}
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/movies"
						element={<ProtectedRoute loggedIn={loggedIn} element={Movies} movies={movies} />}
					/>
					<Route
						path="/saved-movies"
						element={<ProtectedRoute loggedIn={loggedIn} element={SavedMovies} />}
					/>
					<Route
						path="/profile"
						element={
							<ProtectedRoute loggedIn={loggedIn} element={Profile} logout={handleSubmitLogout} />
						}
					/>
					<Route
						path="/signin"
						element={<Login handleSubmitForm={handleSubmitLogin} isMessage={isMessage} />}
					/>
					<Route
						path="/signup"
						element={<Register handleSubmitForm={handleSubmitRegister} isMessage={isMessage} />}
					/>
					<Route
						path="/edit"
						element={<Edit handleSubmitForm={handleSubmitEdit} isMessage={isMessage} />}
					/>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				{footerVisible && <Footer />}
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
