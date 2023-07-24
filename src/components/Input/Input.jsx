import React from 'react';
import './Input.css';
import { errorEmail, errorName, errorPass } from '../Errors/Errors';

function Input(props) {
	function errors(error) {
		if (error === 'name') {
			return errorName;
		} else if (error === 'email') {
			return errorEmail;
		} else if (error === 'password') {
			return errorPass;
		}
	}

	return (
		<div className="form__input-block">
			<label className="form__input-label" htmlFor={props.name}>
				{props.label}
			</label>
			<input
				className="form__input"
				type={props.type}
				name={props.name}
				{...props.register(props.name, errors(props.name))}
				required
				autocomplete="off"

			/>
			<span className={`form__input-error ${props.errors ? 'form__input-error-show' : ''}`}>
				{props.errors?.message || 'Что-то пошло не так'}
			</span>
		</div>
	);
}

export default Input;
