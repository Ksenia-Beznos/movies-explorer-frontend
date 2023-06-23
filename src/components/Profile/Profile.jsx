import React from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';

function Profile() {
	return (
		<div className="profile-page">
			<h3 className="profile-page__title">Привет, Ксения!</h3>
			<div className="profile-page__name">
				<p className="profile-page__placeholder profile-page__placeholder_style_font">Имя</p>
				<p className="profile-page__text profile-page__text_style_font">Ксения</p>
			</div>
			<div className="profile-page__email">
				<p className="profile-page__placeholder profile-page__placeholder_style_font">E-mail</p>
				<p className="profile-page__text profile-page__text_style_font">pochta@mail.ru</p>
			</div>
			<div className="profile-page__links">
				<NavLink to="/edit" className="profile-page__link profile-page__edit">
					Редактировать
				</NavLink>
				<NavLink to="/" className="profile-page__link profile-page__exit">
					Выйти из аккаунта
				</NavLink>
			</div>
		</div>
	);
}

export default Profile;
