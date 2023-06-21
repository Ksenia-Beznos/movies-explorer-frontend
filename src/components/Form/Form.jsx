import './Form.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Form({ title, text, children, buttonText, linkText, path, size }) {
	return (
		<div className="form">
			<div className="form__head">
				<Link to="/">
					<img className="form__logo" src={logo} alt="Логотип" />
				</Link>
				<h1 className="form__title">{title}</h1>
			</div>
			<form className="form__container">
				{children}
				<button className={`form__submit-button ${size}`} type="submit" aria-label={buttonText}>
					{buttonText}
				</button>
			</form>
			<div className="form__footer-block">
				<p className="form__footer-text">{text}</p>
				<Link to={path} className="form__footer-link">
					{linkText}
				</Link>
			</div>
		</div>
	);
}

export default Form;
