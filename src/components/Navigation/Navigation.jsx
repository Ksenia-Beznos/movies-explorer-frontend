import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<>
			<div className="header__movies">
				<NavLink to="/movies" className="header__movies-all">
					Фильмы
				</NavLink>
				<NavLink to="/saved-movies" className="header__movies-saved">
					Сохранённые фильмы
				</NavLink>
			</div>
			<div className="profile">
				<NavLink to="/profile" className="profile__link">
					Аккаунт
				</NavLink>
				<div className="profile__icon" />
			</div>
		</>
	);
}

export default Navigation;
