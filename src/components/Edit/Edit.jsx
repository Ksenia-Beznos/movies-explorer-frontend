import React from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { useForm } from 'react-hook-form';

function Edit() {
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
			title="Редактирование"
			buttonText="Сохранить"
			text="Передумали?"
			linkText="Вернуться на главную"
			path="/movies"
			size="form__submit-button_style_max-size"
			handleSubmit={handleSubmit}
			reset={reset}
			isValid={isValid}
		>
			<Input type="text" name="name" label="Имя" register={register} errors={errors?.name} />

			<Input type="email" name="email" label="E-mail" register={register} errors={errors?.email} />
		</Form>
	);
}

export default Edit;
