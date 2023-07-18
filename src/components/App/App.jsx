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
import { savedMovie, getSavedMovies, removeMovies } from '../../utils/MainApi';

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
	const [savedMovies, setSavedMovies] = useState([]);

	// загружаем все фильмы
	useEffect(() => {
		if (loggedIn) {
			Promise.all([getMovies(), getSavedMovies()])
				.then((res) => {
					if (res) {
						const movies = res[0];
						const savedMovies = res[1];
						const moviesUpdate = movies.map((element) => {
							const movieSaved = savedMovies.find((elementSave) => {
								return elementSave.movieId === element.id;
							});

							if (movieSaved) {
								return {
									...element,
									icon: 'like-active',
									key: element.id,
								};
							}

							return {
								...element,
								icon: 'like',
								key: element.id,
							};
						});

						const savedMoviesUpdate = savedMovies.map((element) => {
							return {
								...element,
								icon: 'delete',
								key: element._id,
							};
						});

						setMovies(moviesUpdate);
						setSavedMovies(savedMoviesUpdate);
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

	// сохранение фильмов
	function handleSavedMovies(element) {
		savedMovie(element)
			.then((res) => {
				if (res) {
					setMovies((state) => {
						return state.map((element) =>
							element.id === res.movieId
								? { ...element, icon: 'like-active', key: element.id }
								: element
						);
					});

					res.icon = 'delete';
					setSavedMovies((state) => [...state, res]);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleRemoveMovie(movie) {
		if (movie._id) {
			removeMovies(movie._id)
				.then(() => {
					setSavedMovies((state) => state.filter((element) => element._id !== movie._id));
					setMovies((state) =>
						state.map((element) =>
							element.id === movie.movieId ? { ...element, icon: 'like', key: element.id } : element
						)
					);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			const savedMovie = savedMovies.find((element) => element.movieId === movie.id);
			if (savedMovie) {
				removeMovies(savedMovie._id)
					.then(() => {
						setMovies((state) =>
							state.map((element) =>
								element.id === movie.id ? { ...element, icon: 'like', key: element.id } : element
							)
						);
						setSavedMovies((state) =>
							state.filter((element) => element.movieId !== savedMovie.movieId)
						);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
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
						element={
							<ProtectedRoute
								loggedIn={loggedIn}
								element={Movies}
								movies={movies}
								handleSavedMovies={handleSavedMovies}
								handleRemoveMovie={handleRemoveMovie}
							/>
						}
					/>
					<Route
						path="/saved-movies"
						element={
							<ProtectedRoute
								loggedIn={loggedIn}
								element={SavedMovies}
								savedMovies={savedMovies}
								handleRemoveMovie={handleRemoveMovie}
							/>
						}
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
