import React from 'react';
import './MoviesSavedCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesSavedCardList(props) {
	return props.cardMovies.length > 0 ? (
		<ul className="movies__list">{props.cardMovies}</ul>
	) : (
		<p className="movies__message">Ничего не найдено</p>
	);
}
export default MoviesSavedCardList;
