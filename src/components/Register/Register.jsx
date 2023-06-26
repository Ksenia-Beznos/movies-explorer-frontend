import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';

function Register() {
	return (


		<>
			<Form
				title="Добро пожаловать!"
				buttonText="Зарегистрироваться"
				text="Уже зарегистрированы?"
				linkText="Войти"
				path="/signin"
				size="form__submit-button_style_min-size"
			>
				<Input type="text" name="name" label="Имя" />
				<Input type="email" name="email" label="E-mail" />
				<Input type="password" name="password" label="Пароль" />
			</Form>
		</>
	);
}

export default Register;
