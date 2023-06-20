import React from 'react';
import './PageNotFound.css';
import { NavLink } from 'react-router-dom';

function PageNotFound() {
	return (
		<div className="page">
			<div className="page__container">
				<h1 className="page__title">404</h1>
				<p className="page__subtitle">Страница не найдена</p>
			</div>
			<NavLink to="/" className="page__link">
				Назад
			</NavLink>
		</div>
	);
}

export default PageNotFound;
