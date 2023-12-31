import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
	return (
		<section className="portfolio">
			<h3 className="portfolio__header">Портфолио</h3>
			<ul className="portfolio__sites">
				<li className="portfolio__list-item">
					<a
						className="portfolio__site"
						href="https://ksenia-beznos.github.io/how-to-learn/"
						rel="noreferrer"
						target="_blank"
					>
						Статичный сайт
						<img className="portfolio__arrow" src={arrow} alt="Иконка стрелки" />
					</a>
				</li>
				<li className="portfolio__list-item">
					<a
						className="portfolio__site"
						href="https://ksenia-beznos.github.io/russian-travel/"
						rel="noreferrer"
						target="_blank"
					>
						Адаптивный сайт
						<img className="portfolio__arrow" src={arrow} alt="Иконка стрелки" />
					</a>
				</li>
				<li className="portfolio__list-item">
					<a
						className="portfolio__site"
						href="https://github.com/Ksenia-Beznos/react-mesto-api-full-gha"
						rel="noreferrer"
						target="_blank"
					>
						Одностраничное приложение
						<img className="portfolio__arrow" src={arrow} alt="Иконка стрелки" />
					</a>
				</li>
			</ul>
		</section>
	);
}

export default Portfolio;
