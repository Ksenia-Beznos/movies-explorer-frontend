import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
	const [countCards, setCountCards] = React.useState(5);
	// const [windowSize, setWindowSize] = React.useState(320);

	// React.useEffect(() => {
	// 	setWindowSize(+windowWidth);
	// }, []);

	// React.useEffect(() => {
	// 	if (windowSize <= 320) {
	// 		setCountCards(5);
	// 	} else if (windowSize <= 768) {
	// 		setCountCards(8);
	// 	} else {
	// 		setCountCards(12);
	// 	}
	// }, [windowSize]);

	function addCards() {
		setCountCards(countCards + 4);
	}

	// function handleWindowResize() {
	// 	const windowWidth = window.innerWidth;
	// 	setWindowSize(+windowWidth);
	// 	console.log('Ширина окна браузера:', windowWidth);
	// }

	// window.addEventListener('resize', handleWindowResize);

	// handleWindowResize();


	return (
		<div className="movies">
			<SearchForm />
			<MoviesCardList count={countCards} />

			<button className="movies__button" onClick={addCards} type="button">
				Ещё
			</button>
		</div>
	);
}

export default Movies;
