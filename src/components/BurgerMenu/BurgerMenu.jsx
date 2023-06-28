import './BurgerMenu.css';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

function BurgerMenu() {
	const MenuRef = useRef(null);
	const MenuBtnRef = useRef(null);
	const overlayRef = useRef(null);

	function toggleMenu() {
		MenuRef.current.classList.toggle('menu_active');
		MenuBtnRef.current.classList.toggle('menu__btn-open');
		overlayRef.current.classList.toggle('overlay_open');
	}

	const setActive = ({ isActive }) => (isActive ? 'menu__link-active' : 'menu__link');

	return (
		<>
			<div className="menu__btn" onClick={toggleMenu} ref={MenuBtnRef}>
				<div className="menu__btn-burger" />
			</div>

			<div className="menu" ref={MenuRef}>
				<div className="menu__place">
					<div className="menu__links">
						<NavLink to="/" className={setActive} onClick={toggleMenu}>
							Главная
						</NavLink>

						<NavLink to="/movies" className={setActive} onClick={toggleMenu}>
							Фильмы
						</NavLink>

						<NavLink to="/saved-movies" className={setActive} onClick={toggleMenu}>
							Сохранённые фильмы
						</NavLink>
					</div>

					<div className="menu__profile">
						<NavLink to="/profile" className="menu__link menu__link-profile" onClick={toggleMenu}>
							Аккаунт
						</NavLink>
						<div className="menu__link-profile-icon" />
					</div>
				</div>
			</div>
			<div className="overlay" ref={overlayRef} />
		</>
	);
}

export default BurgerMenu;
