import React from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';

function Profile(props) {
	return (
		<section className="profile-page">
			<h3 className="profile-page__title">Привет, Ксения!</h3>
			<div className="profile-page__name">
				<p className="profile-page__placeholder profile-page__placeholder-font">Имя</p>
				<p className="profile-page__text profile-page__text-font">Ксения</p>
			</div>
			<div className="profile-page__email">
				<p className="profile-page__placeholder profile-page__placeholder-font">E-mail</p>
				<p className="profile-page__text profile-page__text-font">pochta@mail.ru</p>
			</div>
			<div className="profile-page__links">
				<NavLink to="/edit" className="profile-page__link profile-page__edit">
					Редактировать
				</NavLink>
				<button className="profile-page__link profile-page__exit" onClick={props.logout}>
					Выйти из аккаунта
				</button>
			</div>
		</section>
	);
}

export default Profile;
