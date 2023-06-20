import React from 'react';
import './Input.css';

function Input({ type, name, label }) {
	return (
		<div className="form__input-block">
			<label className="form__input-label" for={name}>
				{label}
			</label>
			<input className="form__input" type={type} name={name} required />
		</div>
	);
}

export default Input;
