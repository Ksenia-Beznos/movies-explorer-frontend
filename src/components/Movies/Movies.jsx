import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { searchMovies } from '../../utils/SearchMovies';
import { HandleResizeWindow } from '../../utils/Resize';

function Movies(props) {
	const [query, setQuery] = useState('');
	const [short, setShort] = useState(() => {
		const savedShort = sessionStorage.getItem('moviesshort');
		return savedShort ? JSON.parse(savedShort) : false;
	});
	const [quantity, setQuantity] = useState(0);

	const movies = searchMovies(props.movies, query, short, quantity);

	const quantityMovies = HandleResizeWindow();

	useEffect(() => {
		setQuantity(quantityMovies.quantity);
	}, [quantityMovies]);

	useEffect(() => {
		sessionStorage.setItem('moviesquery', query);
	}, [query]);

	useEffect(() => {
		sessionStorage.setItem('moviesshort', JSON.stringify(short));
	}, [short]);

	const cardMovies = movies.map((element) => {
		return (
			<MoviesCard
				movie={element}
				icon={element.icon}
				savedMovie={props.handleSavedMovies}
				removeMovie={props.handleRemoveMovie}
				key={element.id}
			/>
		);
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

	return (
		<>
			<SearchForm handleSearch={handleSearch} toggleShortMovies={toggleShortMovies} short={short} />
			<section className="movies">
				<MoviesCardList cardMovies={cardMovies} />

				{movies.length >= quantity ? (
					<button className="movies__button" type="button" onClick={addQuantityMovies}>
						Ещё
					</button>
				) : (
					''
				)}
			</section>
		</>
	);
}

export default Movies;
