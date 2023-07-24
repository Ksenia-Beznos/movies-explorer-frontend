import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
	const setActive = ({ isActive }) =>
		isActive ? 'navigation__link-active' : 'navigation__movies-link';

	return (
		<section className="navigation">
			<div className="navigation__movies ">
				<NavLink to="/movies" className={setActive}>
					Фильмы
				</NavLink>
				<NavLink to="/saved-movies" className={setActive}>
					Сохранённые фильмы
				</NavLink>
			</div>
			<div className="navigation__profile">
				<NavLink to="/profile" className="navigation__profile-link">
					Аккаунт
				</NavLink>
				<div className="navigation__profile-icon" />
			</div>
		</section>
	);
}

export default Navigation;
