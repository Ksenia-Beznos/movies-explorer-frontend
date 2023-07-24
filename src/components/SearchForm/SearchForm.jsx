import React, { useEffect } from 'react';
import './SearchForm.css';
import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import line from '../../images/line.svg';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		setValue,
		watch,
	} = useForm({
		mode: 'onChange',
	});

	const onSubmit = (data) => {
		props.handleSearch(data.movieInput);
	};
	const location = useLocation();
	const query = watch('movieInput', '');

	useEffect(() => {
		const timer = setTimeout(() => {
			props.handleSearch(query);
		}, 500);
		return () => clearTimeout(timer);
	}, [query, props.handleSearch]);

	useEffect(() => {
		if (location.pathname === '/movies') {
			const querySaved = sessionStorage.getItem('moviesquery');

			if (querySaved) {
				setValue('movieInput', querySaved);
			}
		} else {
			const querySaved = sessionStorage.getItem('savedmoviesquery');

			if (querySaved) {
				setValue('movieInput', querySaved);
			}
		}
	}, []);

	return (
		<form className="search-form" onSubmit={handleSubmit(onSubmit)}>
			<input
				id="name-input"
				className="search-form__input"
				type="text"
				name="movieInput"
				placeholder="Фильм"
				autoComplete="off"
				{...register('movieInput', {
					required: 'Введите ключевое слово',
					pattern: {
						value: /^[^\s]/,
						message: 'Название фильма не может начинаться с пробела',
					},
				})}
			/>

			{errors?.movieInput && (
				<span className="search-form__input-error">
					{errors?.movieInput?.message || 'Что-то пошло не так'}
				</span>
			)}

			<button
				type="submit"
				className={isValid ? `search-form__button` : `search-form__button_disabled`}
			>
				<img src={find} alt="Кнопка в виде синей стрелки" />
			</button>
			<img className="search-form__line" src={line} alt="вертикальная линия" />
			<FilterCheckbox toggleShortMovies={props.toggleShortMovies} short={props.short} />
		</form>
	);
}

export default SearchForm;
