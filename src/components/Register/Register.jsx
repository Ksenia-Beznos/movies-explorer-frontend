import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { useForm } from 'react-hook-form';

function Register() {
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
			title="Добро пожаловать!"
			buttonText="Зарегистрироваться"
			text="Уже зарегистрированы?"
			linkText="Войти"
			path="/signin"
			size="form__submit-button-min-size"
			handleSubmit={handleSubmit}
			reset={reset}
			isValid={isValid}
		>
			<Input type="text" name="name" label="Имя" register={register} errors={errors?.name} />

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

export default Register;
