import React from 'react';
import './MoviesCardList.css';

function MoviesCardList(props) {

	return props.cardMovies.length > 0 ? (
		<ul className="movies__list">{props.cardMovies}</ul>
	) : (
		<p className="movies__message">Ничего не найдено</p>
	);
}

export default MoviesCardList;
