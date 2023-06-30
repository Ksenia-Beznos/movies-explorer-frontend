import React from 'react';
import './SavedMovies.css';
import MoviesSavedCardList from '../MoviesSavedCardList/MoviesSavedCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
	const [countCards, setCountCards] = React.useState(2);

	function addCards() {
		setCountCards(countCards + 4);
	}

	return (
		<>
			<SearchForm />
			<section className="movies-saved">
				<MoviesSavedCardList count={countCards} />
				<button className="movies__button movies__button-saved" onClick={addCards} type="button">
					Ещё
				</button>
			</section>
		</>
	);
}

export default SavedMovies;
