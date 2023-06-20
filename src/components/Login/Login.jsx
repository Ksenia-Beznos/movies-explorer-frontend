import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';

function Login() {
	return (
		<Form
			title="Рады видеть!"
			buttonText="Войти"
			linkText="Регистрация"
			text="Еще не зарегистрированы?"
		>
			<Input type="email" name="email" label="E-mail" />
			<Input type="password" name="password" label="Пароль" />
		</Form>
	);
}

export default Login;
