import React from 'react';
import './PageNotFound.css';
import { NavLink } from 'react-router-dom';

function PageNotFound() {
	return (
		<section className="page-404">
			<div className="page-404__container">
				<h1 className="page-404__title">404</h1>
				<p className="page-404__subtitle">Страница не найдена</p>

				<NavLink to="/" className="page-404__link">
					Назад
				</NavLink>
			</div>
		</section>
	);
}

export default PageNotFound;
