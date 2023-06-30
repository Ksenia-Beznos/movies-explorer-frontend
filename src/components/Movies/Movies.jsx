import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
	const [countCards, setCountCards] = React.useState(5);

	function addCards() {
		setCountCards(countCards + 4);
	}

	return (
		<>
			<SearchForm />
			<section className="movies">
				<MoviesCardList count={countCards} />

				<button className="movies__button" onClick={addCards} type="button">
					Ещё
				</button>
			</section>
		</>
	);
}

export default Movies;
