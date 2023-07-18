import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import MoviesSavedCardList from '../MoviesSavedCardList/MoviesSavedCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import { searchMovies } from '../../utils/SearchMovies';
import { HandleResizeWindow } from '../../utils/Resize';

function SavedMovies(props) {
	const [query, setQuery] = useState('');
	const [quantity, setQuantity] = useState(0);
	const [short, setShort] = useState(() => {
		const savedShort = sessionStorage.getItem('savedmoviesshort');
		return savedShort ? JSON.parse(savedShort) : false;
	});

	const movies = searchMovies(props.savedMovies, query, short, quantity);
	const quantityMovies = HandleResizeWindow();

	useEffect(() => {
		setQuantity(quantityMovies.quantity);
	}, [quantityMovies]);

	useEffect(() => {
		sessionStorage.setItem('savedmoviesquery', query);
	}, [query]);

	useEffect(() => {
		sessionStorage.setItem('savedmoviesshort', JSON.stringify(short));
	}, [short]);

	const cardMovies = movies.map((element) => {
		return (
			<MoviesCard
				movie={element}
				icon={element.icon}
				removeMovie={props.handleRemoveMovie}
				key={element._id}
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
			<section className="movies-saved">
				<MoviesSavedCardList cardMovies={cardMovies} />
				<button className="movies__button movies__button-saved" type="button">
					Ещё
				</button>
			</section>
		</>
	);
}

export default SavedMovies;
