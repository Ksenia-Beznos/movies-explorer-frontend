import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { useForm } from 'react-hook-form';

function Login(props) {
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
			size="form__error-max-space"
			handleSubmit={handleSubmit}
			reset={reset}
			isValid={isValid}
			handleSubmitForm={props.handleSubmitForm}
			isMessage={props.isMessage}
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