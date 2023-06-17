import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';


function Movies() {
	return (
		<div className="movies-page">
			<div className="movies-page__container">
				<Header />
				<SearchForm />

				<Footer />
			</div>
		</div>
	);
}

export default Movies;
