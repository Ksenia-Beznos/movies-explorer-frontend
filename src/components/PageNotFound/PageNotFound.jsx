import React from 'react';
import './PageNotFound.css';
import { NavLink } from 'react-router-dom';

function PageNotFound() {
	return (
		<div className="not-found">
			<div className="not-found__container">
				<h1 className="not-found__title">404</h1>
				<p className="not-found__subtitle">Страница не найдена</p>
			</div>
			<NavLink to="/" className="not-found__link">
				Назад
			</NavLink>
		</div>
	);
}

export default PageNotFound;
