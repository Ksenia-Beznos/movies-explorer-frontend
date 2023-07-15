import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

// const moviesCards = Array.from({ length: 24 }, () => (
// 	<li className="movies__container">
// 		<MoviesCard icon="like" />
// 	</li>
// ));

function MoviesCardList(props) {
	const filterMoviesCards = props.cardMovies.slice(0, 12);

	return (
		<>
			<ul className="movies__list">{filterMoviesCards}</ul>
		</>
	);
}

export default MoviesCardList;
