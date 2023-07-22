import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ProtectedRoute, ProtectedLoginRoute } from '../ProtectedRoute/ProtectedRoute';
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
import Preloader from '../Preloader/Preloader';

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

	const [isPreloader, setIsPreloader] = useState(true);
	const [checkedToken, setCheckedToken] = useState(false);

	const [isSuccessMessage, setIsSuccessMessage] = useState('');

	useEffect(() => {
		if (location.pathname !== '/profile') {
			setIsSuccessMessage('');
		} else {
			setTimeout(() => {
				setIsSuccessMessage('');
			}, 10000);
		}
	}, [navigate]);

	// загружаем все фильмы
	useEffect(() => {
		setIsPreloader(true);
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
				})
				.finally(() => {
					setIsPreloader(false);
				});
		}
	}, [loggedIn]);

	// для сброса ошибки
	useEffect(() => {
		setIsMessage('');
	}, [navigate]);

	//регистрация
	function handleSubmitRegister({ name, email, password }) {
		setIsPreloader(true);
		register({ name, email, password })
			.then((res) => {
				if (res) {
					handleSubmitLogin({ email, password });
				}
			})
			.catch((err) => {
				console.log(err);
				setIsMessage(err.message);
			})
			.finally(() => {
				setIsPreloader(false);
			});
	}

	// логирование
	function handleSubmitLogin({ email, password }) {
		setIsPreloader(true);
		login({ email, password })
			.then((res) => {
				if (res) {
					setLoggedIn(true);
					setCurrentUser(res);
					navigate('/movies', { replace: true });
				}
			})
			.catch((err) => {
				console.log(err);
				setIsMessage(err.message);
			})
			.finally(() => {
				setIsPreloader(false);
			});
	}

	// разлогирование
	function handleSubmitLogout() {
		setIsPreloader(true);
		logout()
			.then((res) => {
				if (res) {
					sessionStorage.clear();
					setLoggedIn(false);
					navigate('/', { replace: true });
				}
			})
			.catch((err) => {
				console.log(err);
				setIsMessage(err.message);
			})
			.finally(() => {
				setIsPreloader(false);
			});
	}

	useEffect(() => {
		setIsPreloader(true);
		loginWithToken()
			.then((res) => {
				if (res) {
					setLoggedIn(true);
					setCurrentUser(res);
				}
			})
			.catch((e) => console.log(e))
			.finally(() => {
				setIsPreloader(false);
				setCheckedToken(true);
			});
	}, []);

	// редактирвание
	function handleSubmitEdit({ name, email }) {
		setIsPreloader(true);
		edit({ name, email })
			.then((res) => {
				if (res !== false) {
					navigate('/profile', { replace: true });
					setCurrentUser(res);
					setIsSuccessMessage('Пользователь успешно обновлен');
				}
			})
			.catch((err) => {
				console.log(err);
				setIsMessage(err.message);
			})
			.finally(() => {
				setIsPreloader(false);
			});
	}

	// сохранение фильмов
	function handleSavedMovies(element) {
		setIsPreloader(true);
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
			})
			.finally(() => {
				setIsPreloader(false);
			});
	}

	function handleRemoveMovie(movie) {
		setIsPreloader(true);
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
				})
				.finally(() => {
					setIsPreloader(false);
				});
		} else {
			setIsPreloader(true);
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
					})
					.finally(() => {
						setIsPreloader(false);
					});
			}
		}
	}

	return (
		<div className="app">
			{checkedToken ? (
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
								<ProtectedRoute
									loggedIn={loggedIn}
									element={Profile}
									logout={handleSubmitLogout}
									isSuccessMessage={isSuccessMessage}
								/>
							}
						/>
						<Route
							path="/signin"
							element={
								<ProtectedLoginRoute
									loggedIn={loggedIn}
									element={Login}
									handleSubmitForm={handleSubmitLogin}
									isMessage={isMessage}
								/>
							}
						/>
						<Route
							path="/signup"
							element={
								<ProtectedLoginRoute
									loggedIn={loggedIn}
									element={Register}
									handleSubmitForm={handleSubmitRegister}
									isMessage={isMessage}
								/>
							}
						/>
						<Route
							path="/edit"
							element={
								<ProtectedRoute
									loggedIn={loggedIn}
									element={Edit}
									handleSubmitForm={handleSubmitEdit}
									isMessage={isMessage}
								/>
							}
						/>
						<Route path="*" element={<PageNotFound />} />
					</Routes>
					{footerVisible && <Footer />}
				</CurrentUserContext.Provider>
			) : (
				<Preloader isPreloader={isPreloader} />
			)}
		</div>
	);
}

export default App;
