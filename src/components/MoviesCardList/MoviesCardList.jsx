import React from 'react';
import './MoviesCardList.css';

function MoviesCardList(props) {
	return <ul className="movies__list">{props.cardMovies}</ul>;
}

export default MoviesCardList;
