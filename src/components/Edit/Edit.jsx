import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';

function Edit() {
	return (
		<>
			<Form
				title="Редактирование"
				buttonText="Сохранить"
				text="Передумали?"
				linkText="Вернуться на главную"
				path="/movies"
				size="form__submit-button_style_max-size"
			>
				<Input type="text" name="name" label="Имя" />
				<Input type="email" name="email" label="E-mail" />
			</Form>
		</>
	);
}

export default Edit;
