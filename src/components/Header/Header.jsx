import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ color }) {
	return (
		<div className={`header ${color}`}>
			<div className="header__container">
				<div className="header__container_style_bkg">
					<NavLink to="/">
						<img className="header__logo" src={logo} alt="Логотип" />
					</NavLink>

					<Routes>
						<Route
							path="/"
							element={[
								<div className="header__links">
									<NavLink to="/signup" className="header__link-register">
										Регистрация
									</NavLink>
									<NavLink to="/signin">
										<button className="header__link-button" type="button" aria-label="Войти">
											Войти
										</button>
									</NavLink>
								</div>,
							]}
						/>
						<Route path="/movies" element={<Navigation />} />
						<Route path="/saved-movies" element={<Navigation />} />
						<Route path="/profile" element={<Navigation />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default Header;
