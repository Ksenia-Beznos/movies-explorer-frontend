import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ color, loggedIn }) {
	return (
		<header className={`header ${color}`}>
			<div className="header__container">
				<div className="header__container-bkg ">
					<NavLink to="/">
						<img className="header__logo" src={logo} alt="Логотип" />
					</NavLink>

					<Routes>
						<Route
							path="/"
							element={
								loggedIn ? (
									[<Navigation />, <BurgerMenu />]
								) : (
									<div className="header__links">
										<NavLink to="/signup" className="header__link-register">
											Регистрация
										</NavLink>
										<NavLink to="/signin">
											<button className="header__link-button" type="button" aria-label="Войти">
												Войти
											</button>
										</NavLink>
									</div>
								)
							}
						/>
						<Route path="/movies" element={[<Navigation />, <BurgerMenu />]} />
						<Route path="/saved-movies" element={[<Navigation />, <BurgerMenu />]} />
						<Route path="/profile" element={[<Navigation />, <BurgerMenu />]} />
					</Routes>
				</div>
			</div>
		</header>
	);
}

export default Header;
