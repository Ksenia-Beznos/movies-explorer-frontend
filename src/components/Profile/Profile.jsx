import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
	const currentUser = useContext(CurrentUserContext);

	return (
		<section className="profile-page">
			<h3 className="profile-page__title">{`Привет, ${currentUser.name}`}</h3>
			<div className="profile-page__name">
				<p className="profile-page__placeholder profile-page__placeholder-font">Имя</p>
				<p className="profile-page__text profile-page__text-font">{currentUser.name}</p>
			</div>
			<div className="profile-page__email">
				<p className="profile-page__placeholder profile-page__placeholder-font">E-mail</p>
				<p className="profile-page__text profile-page__text-font">{currentUser.email}</p>
			</div>
			<p className='profile-page__message'>{props.isSuccessMessage}</p>
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
