import React from 'react';
import './MoviesSavedCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const moviesCards = Array.from({ length: 24 }, () => (
	<li className="movies__container">
		<MoviesCard icon="delete" />
	</li>
));

function MoviesSavedCardList(props) {
	const filterMoviesCards = moviesCards.slice(0, props.count);

	return (
		<>
			<ul className="movies-saved__list">{filterMoviesCards}</ul>
		</>
	);
}

// function MoviesSavedCardList() {
// 	return (
// 		<>
// 			<ul className="movies-saved__list">
// 				<li>
// 					<MoviesCard icon="delete" />
// 				</li>
// 				<li>
// 					<MoviesCard icon="delete" />
// 				</li>
// 				{/* <li>
// 					<MoviesCard icon="delete" />
// 				</li> */}
// 			</ul>
// 		</>
// 	);
// }

export default MoviesSavedCardList;
