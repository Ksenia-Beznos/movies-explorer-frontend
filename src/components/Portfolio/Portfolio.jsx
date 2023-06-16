import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
	return (
		<div className="portfolio">
			<div className="portfolio__container">
				<h3 className="portfolio__header">Портфолио</h3>
				<ul className="portfolio__sites">
					<li>
						<a className="portfolio__site" href="#" rel="noreferrer" target="_blank">
							Статичный сайт
							<img className="portfolio__arrow" src={arrow} alt="Иконка стрелки" />
						</a>
					</li>
					<li>
						<a className="portfolio__site" href="#" rel="noreferrer" target="_blank">
							Адаптивный сайт
							<img className="portfolio__arrow" src={arrow} alt="Иконка стрелки" />
						</a>
					</li>
					<li>
						<a className="portfolio__site" href="#" rel="noreferrer" target="_blank">
							Одностраничное приложение
							<img className="portfolio__arrow" src={arrow} alt="Иконка стрелки" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Portfolio;
