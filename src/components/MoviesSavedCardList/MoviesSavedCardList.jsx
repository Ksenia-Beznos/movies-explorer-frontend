import React from 'react';
import './MoviesSavedCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesSavedCardList() {
	return (
		<>
			<ul className="movies-saved__list">
				<li>
					<MoviesCard icon="delete" />
				</li>
				<li>
					<MoviesCard icon="delete" />
				</li>
				<li>
					<MoviesCard icon="delete" />
				</li>
			</ul>
		</>
	);
}

export default MoviesSavedCardList;
