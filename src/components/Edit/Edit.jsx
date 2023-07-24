import React, { useContext, useEffect, useState } from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Edit(props) {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
		setValue,
		watch,
	} = useForm({
		mode: 'onChange',
	});

	const currentUser = useContext(CurrentUserContext);

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
		const nameChange = currentUser.name !== watch('name');
		const emailChange = currentUser.email !== watch('email');

		const emailIsValid = isValidEmail(watch('email'));
		const nameIsValid = isValidName(watch('name'));
		

		setIsChangeForm((nameChange || emailChange) && emailIsValid && nameIsValid);
	}, [watch('name'), watch('email')]);

	useEffect(() => {
		if (currentUser) {
			setValue('name', currentUser.name);
			setValue('email', currentUser.email);
		}
	}, [currentUser, setValue]);

	return (
		<Form
			title="Редактирование"
			buttonText="Сохранить"
			text="Передумали?"
			linkText="Вернуться на главную"
			path="/movies"
			size="form__error-max-space"
			handleSubmit={handleSubmit}
			reset={reset}
			isValid={isValid && isChangeForm}
			handleSubmitForm={props.handleSubmitForm}
			isMessage={props.isMessage}
		>
			<Input type="text" name="name" label="Имя" register={register} errors={errors?.name} />

			<Input type="email" name="email" label="E-mail" register={register} errors={errors?.email} />
		</Form>
	);
}

export default Edit;
