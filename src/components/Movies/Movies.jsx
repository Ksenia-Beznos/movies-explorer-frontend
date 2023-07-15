import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies(props) {
	console.warn(props.movies)
	const cardMovies = props.movies.map((element) => {
		
		return <MoviesCard movie={element} icon={'like'}/>;
	});

console.log(cardMovies);

	return (
		<>
			<SearchForm />
			<section className="movies">
				<MoviesCardList cardMovies={cardMovies} />

				<button className="movies__button" type="button">
					Ещё
				</button>
			</section>
		</>
	);
}

export default Movies;
