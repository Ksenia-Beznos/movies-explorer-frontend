import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
	function save() {
		props.savedMovie(props.movie);
	}

	function remove() {
		props.removeMovie(props.movie);
	}

	// console.log(props.movie)
	return (
		<div className="element__item">
			<img
				className="element__image"
				src={
					props.icon !== 'delete'
						? `https://api.nomoreparties.co/${props.movie.image.url}`
						: props.movie.image
				}
				alt={props.movie.nameRU}
			/>
			<div className="element__description-group">
				<h3 className="element__title">{props.movie.nameRU}</h3>
				<button
					className={`element__${props.icon}-button`}
					type="button"
					onClick={props.icon === 'like' ? save : remove}
				/>
			</div>
			<p className="element__duration">{props.movie.duration}</p>
		</div>
	);
}

export default MoviesCard;
