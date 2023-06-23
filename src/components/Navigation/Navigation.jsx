import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<div className="navigation">
			<div className="navigation__movies">
				<NavLink to="/movies" className="navigation__movies-all">
					Фильмы
				</NavLink>
				<NavLink to="/saved-movies" className="navigation__movies-saved">
					Сохранённые фильмы
				</NavLink>
			</div>
			<div className="navigation__profile">
				<NavLink to="/profile" className="navigation__profile-link">
					Аккаунт
				</NavLink>
				<div className="navigation__profile-icon" />
			</div>
		</div>
	);
}

export default Navigation;
