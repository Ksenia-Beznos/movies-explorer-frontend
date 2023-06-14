import React from 'react';
import "./Header.css"
import logo from '../../images/logo.svg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
	return (
		<header className="header">
			<Link to="/">
				<img className="header__logo" src={logo} alt="Логотип" />
			</Link>
			<div className="header__movies">
				<NavLink to="/movies" className="header__movies-all">
					Фильмы
				</NavLink>
				<NavLink to="/saved-movies" className="header__movies-saved">
					Сохраненные фильмы
				</NavLink>
			</div>
			<div className="profile">
				<Link to="/profile" className="profile__link">
					Аккаунт
				</Link>
				<div className="profile__icon" />
			</div>
		</header>
	);
}

export default Header;
