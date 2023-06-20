import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';

function Edit() {
	return (
		<Form
			title="Редактирование профиля"
			buttonText="Сохранить"
			linkText="Вернуться на главную"
			text="Передумали?"
		>
			<Input type="text" name="name" label="Имя" />
			<Input type="email" name="email" label="E-mail" />
		</Form>
	);
}

export default Edit;
