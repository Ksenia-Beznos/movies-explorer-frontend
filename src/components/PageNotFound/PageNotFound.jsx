import React from 'react';
import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
	const navigate = useNavigate();

	function goBack() {
		navigate(-1);
	}

	return (
		<section className="page-404">
			<div className="page-404__container">
				<h1 className="page-404__title">404</h1>
				<p className="page-404__subtitle">Страница не найдена</p>

				<button className="page-404__link" onClick={goBack}>
					Назад
				</button>
			</div>
		</section>
	);
}

export default PageNotFound;
