import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
	return (
		<>
			<ul className="movies__list">
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
				<li>
					<MoviesCard icon="like" />
				</li>
			</ul>
		</>
	);
}

export default MoviesCardList;
