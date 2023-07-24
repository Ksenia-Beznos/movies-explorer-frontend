import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
	const [checked, setChecked] = useState(props.short);

	function toggleCheckbox() {
		const newStatus = !checked;
		setChecked(newStatus);
		props.toggleShortMovies(newStatus);
	}

	return (
		<label className="checkbox" htmlFor="checkbox">
			<input
				className="checkbox__inp"
				type="checkbox"
				id="checkbox"
				checked={checked}
				onChange={toggleCheckbox}
			/>
			<span className="checkbox__inner">Короткометражки</span>
		</label>
	);
}

export default FilterCheckbox;
