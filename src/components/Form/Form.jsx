import './Form.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Form(props) {
	const onSubmit = (data) => {
		// console.log({ data });
		props.handleSubmitForm(data);
		// props.reset();
	};

	return (
		<section className="form">
			<div className="form__head">
				<Link to="/">
					<img className="form__logo" src={logo} alt="Логотип" />
				</Link>
				<h1 className="form__title">{props.title}</h1>
			</div>
			<form
				className="form__container"
				onSubmit={props.handleSubmit(onSubmit)}
				noValidate
				autocomplete="off"
			>
				{props.children}

				<p className={`form__error ${props.size} ${props.isMessage ? 'form__error-show' : ''}`}>
					{props.isMessage}
				</p>
				<button
					className={`${props.isValid ? 'form__submit-button' : 'form__submit-button_disabled'}`}
					type="submit"
					aria-label={props.buttonText}
					disabled={!props.isValid}
				>
					{props.buttonText}
				</button>
			</form>

			<div className="form__footer-block">
				<p className="form__footer-text">{props.text}</p>
				<Link to={props.path} className="form__footer-link">
					{props.linkText}
				</Link>
			</div>
		</section>
	);
}

export default Form;
