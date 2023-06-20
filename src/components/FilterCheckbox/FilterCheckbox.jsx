import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
	return (
		<>
			<label className="checkbox" htmlFor="checkbox">
				<input className="checkbox__inp" type="checkbox" id="checkbox" />
				<span className="checkbox__inner">Короткометражки</span>
			</label>
		</>
	);
}

export default FilterCheckbox;
