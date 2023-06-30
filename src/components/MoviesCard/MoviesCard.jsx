import React from 'react';
import './MoviesCard.css';
import example from '../../images/example.jpg';

function MoviesCard({ icon }) {
	return (
		<div className="element__item">
			<img className="element__image" src={example} alt="обложка фильма" />
			<div className="element__description-group">
				<h3 className="element__title">Здесь будет название очень длинного фильма</h3>
				<button className={`element__${icon}-button`} type="button" />
			</div>
			<p className="element__duration">1ч 37м</p>
		</div>
	);
}

export default MoviesCard;
