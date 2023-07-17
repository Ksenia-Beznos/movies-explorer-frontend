import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
	return (
		<div className="element__item">
			<img
				className="element__image"
				src={`https://api.nomoreparties.co/${props.movie.image.url}`}
				alt={props.movie.nameRU}
			/>
			<div className="element__description-group">
				<h3 className="element__title">{props.movie.nameRU}</h3>
				<button
					className={`element__${props.icon}-button`}
					type="button"
					onClick={() => props.savedMovies(props.movie)}
				/>
			</div>
			<p className="element__duration">{props.movie.duration}</p>
		</div>
	);
}

export default MoviesCard;
