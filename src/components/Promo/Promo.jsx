import React from 'react';
import webworld from '../../images/webworld.svg';
import './Promo.css';

function Promo() {
	return (
		<div className="promo">
			<div className="promo__container">
				<h1 className="promo__header">Учебный проект студента факультета Веб&#8209;разработки.</h1>
				<p className="promo__description">
					Листайте ниже, чтобы узнать больше про этот проект и его создателя.
				</p>
				<img className="promo__image" src={webworld} alt="Иллюстрация планеты" />

				<button className="promo__button" type="button" aria-label="Узнать больше">
					Узнать больше
				</button>
			</div>
		</div>
	);
}

export default Promo;
