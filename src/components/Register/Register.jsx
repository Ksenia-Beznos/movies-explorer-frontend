import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';

function Register() {
	return (
		<Form
			title="Добро пожаловать!"
			buttonText="Зарегистрироваться"
			linkText="Войти"
			text="Уже зарегистрированы?"
		>
			<Input type="text" name="name" label="Имя" />
			<Input type="email" name="email" label="E-mail" />
			<Input type="password" name="password" label="Пароль" />
		</Form>
	);
}

export default Register;
