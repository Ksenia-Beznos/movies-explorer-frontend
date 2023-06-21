import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';

function Login() {
	return (
		<Form
			title="Рады видеть!"
			buttonText="Войти"
			text="Еще не зарегистрированы?"
			linkText="Регистрация"
			path="/signup"
			size='form__submit-button_style_max-size'
		>
			<Input type="email" name="email" label="E-mail" />
			<Input type="password" name="password" label="Пароль" />
		</Form>
	);
}

export default Login;
