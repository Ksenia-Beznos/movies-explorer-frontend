import React from 'react';
import './MoviesSavedCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesSavedCardList(props) {
	return <ul className="movies__list">{props.cardMovies}</ul>;
}

export default MoviesSavedCardList;
