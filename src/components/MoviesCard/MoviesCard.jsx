import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
	function save() {
		props.savedMovie(props.movie);
	}

	function remove() {
		props.removeMovie(props.movie);
	}

	function duration(time) {
		const num = parseInt(time);
		const hour = Math.floor(num / 60);
		const min = num % 60;
		return `${hour}ч ${min}м`;
	}

	return (
		<div className="element__item">
			<a className='element__preview' href={props.movie.trailerLink} target='_blank'>
				<img
					className="element__image"
					src={
						props.icon !== 'delete'
							? `https://api.nomoreparties.co/${props.movie.image.url}`
							: props.movie.image
					}
					alt={props.movie.nameRU}
				/>
			</a>
			<div className="element__description-group">
				<h3 className="element__title">{props.movie.nameRU}</h3>
				<button
					className={`element__${props.icon}-button`}
					type="button"
					onClick={props.icon === 'like' ? save : remove}
				/>
			</div>
			<p className="element__duration">{duration(props.movie.duration)}</p>
		</div>
	);
}

export default MoviesCard;
