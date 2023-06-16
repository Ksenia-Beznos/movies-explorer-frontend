import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/myPhoto.png';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
	return (
		<div className="student">
			<div className="student__container">
				<h2 className="student__header">Студент</h2>
				<h3 className="student__name">Ксения</h3>
				<p className="student__course">Фронтенд-разработчик, 30 лет</p>
				<img className="student__photo" src={myPhoto} alt="Фотография студента" />
				<p className="student__description">
					Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я
					люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
					компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, начал
					заниматься фриланс-заказами и ушёл с постоянной работы.
				</p>
				<a
					className="github-link"
					href="https://github.com/Ksenia-Beznos"
					rel="noreferrer"
					target="_blank"
				>
					Github
				</a>
				<Portfolio />
			</div>
		</div>
	);
}

export default AboutMe;
