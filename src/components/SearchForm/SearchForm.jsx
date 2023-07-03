import React from 'react';
import './SearchForm.css';
import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import line from '../../images/line.svg';
import { useForm } from 'react-hook-form';

function SearchForm() {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onChange',
	});

	const onSubmit = (data) => {
		console.log({ data });
		reset();
	};

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
					required: 'Введите название фильма',
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
			<FilterCheckbox />
		</form>
	);
}

export default SearchForm;
