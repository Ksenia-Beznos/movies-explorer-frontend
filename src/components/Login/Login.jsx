import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { useForm } from 'react-hook-form';

function Login() {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onChange',
	});

	return (
		<Form
			title="Рады видеть!"
			buttonText="Войти"
			text="Еще не зарегистрированы?"
			linkText="Регистрация"
			path="/signup"
			size="form__submit-button_style_max-size"
			handleSubmit={handleSubmit}
			reset={reset}
			isValid={isValid}
		>
			<Input type="email" name="email" label="E-mail" register={register} errors={errors?.email} />

			<Input
				type="password"
				name="password"
				label="Пароль"
				register={register}
				errors={errors?.password}
			/>
		</Form>
	);
}

export default Login;
