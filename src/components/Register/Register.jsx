import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { useForm } from 'react-hook-form';

function Register(props) {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
		watch,
	} = useForm({
		mode: 'onChange',
	});
	const [isChangeForm, setIsChangeForm] = useState(false);

	const isValidEmail = (email) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
		return emailRegex.test(email);
	};

	const isValidName = (name) => {
		const nameRegex = /^\S*$/;
		return nameRegex.test(name);
	};

	useEffect(() => {
		const emailIsValid = isValidEmail(watch('email'));
		const nameIsValid = isValidName(watch('name'));

		setIsChangeForm(emailIsValid && nameIsValid);
	}, [watch('name'), watch('email')]);

	return (
		<Form
			title="Добро пожаловать!"
			buttonText="Зарегистрироваться"
			text="Уже зарегистрированы?"
			linkText="Войти"
			path="/signin"
			size="form__error-min-space"
			handleSubmit={handleSubmit}
			reset={reset}
			isValid={isValid && isChangeForm}
			handleSubmitForm={props.handleSubmitForm}
			isMessage={props.isMessage}
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
