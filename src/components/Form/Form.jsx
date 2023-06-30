import './Form.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Form(props) {
	const onSubmit = (data) => {
		console.log({ data });
		props.reset();
	};

	return (
		<section className="form">
			<div className="form__head">
				<Link to="/">
					<img className="form__logo" src={logo} alt="Логотип" />
				</Link>
				<h1 className="form__title">{props.title}</h1>
			</div>
			<form className="form__container" onSubmit={props.handleSubmit(onSubmit)} noValidate>
				{props.children}
				<button
					className={`form__submit-button ${props.size}`}
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
