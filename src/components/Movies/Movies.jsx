import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { searchMovies } from '../../utils/SearchMovies';
import { HandleResizeWindow } from '../../utils/Resize';
import { savedMovie } from '../../utils/MainApi';

function Movies(props) {
	const navigate = useNavigate();

	const [query, setQuery] = useState('');
	const [short, setShort] = useState(false);
	const [quantity, setQuantity] = useState(0);

	const [isSavedMovie, setIsSavedMovie] = useState({});

	const movies = searchMovies(props.movies, query, short, quantity);

	const quantityMovies = HandleResizeWindow();

	useEffect(() => {
		setQuantity(quantityMovies.quantity);
	}, [quantityMovies]);

	const cardMovies = movies.map((element) => {
		return <MoviesCard movie={element} icon={'like'} savedMovies={savedMovies} />;
	});

	function handleSearch(query) {
		setQuery(query);
	}

	function toggleShortMovies(checked) {
		setShort(checked);
	}

	function addQuantityMovies() {
		setQuantity(quantity + quantityMovies.quantityElse);
	}

	function savedMovies(element) {
		console.log(element);
		savedMovie(element)
			.then((res) => {
				if (res) {
					setIsSavedMovie(res);
					navigate('/movies', { replace: true });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	// useEffect(() => {
	// 	if (isSavedMovie) {
	// 		Promise.all([savedMovie()])
	// 			.then((res) => {
	// 				if (res) {
	// 					isSavedMovie(res[0]);
	// 				}
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	}
	// }, [isSavedMovie]);

	return (
		<>
			<SearchForm handleSearch={handleSearch} toggleShortMovies={toggleShortMovies} short={short} />
			<section className="movies">
				<MoviesCardList cardMovies={cardMovies} />

				<button className="movies__button" type="button" onClick={addQuantityMovies}>
					Ещё
				</button>
			</section>
		</>
	);
}

export default Movies;
