import React from 'react';
import './SavedMovies.css';
import MoviesSavedCardList from '../MoviesSavedCardList/MoviesSavedCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
	return (
		<div className="movies-saved">
			<SearchForm />
			<MoviesSavedCardList />
		</div>
	);
}

export default SavedMovies;
