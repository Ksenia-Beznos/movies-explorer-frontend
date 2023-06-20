import React from 'react';
import './SearchForm.css';
import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import line from "../../images/line.svg"

function SearchForm() {
	return (
		<>
			<form className="search-form">
				<input
					id="name-input"
					className="search-form__input"
					type="text"
					name="movieInput"
					placeholder="Фильм"
				/>
				<button className="search-form__button" type="submit">
					<img src={find} alt="Кнопка в виде синей стрелки" />
				</button>
				<img className="search-form__line" src={line} alt="вертикальная линия" />
				<FilterCheckbox />
			</form>
		</>
	);
}

export default SearchForm;
