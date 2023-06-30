import './AboutProject.css';

function AboutProject() {
	return (
			<section className="project">
				<h2 className="project__header">О проекте</h2>
				<div className="project__chart">
					<div className="project__stages">
						<p className="project__description project__title">Дипломный проект включал 5 этапов</p>
						<p className="project__description project__subtitle">
							Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
							финальные доработки.
						</p>
					</div>
					<div className="project__timing">
						<p className="project__description project__title">
							На выполнение диплома ушло 5 недель
						</p>
						<p className="project__description project__subtitle">
							У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
							успешно защититься.
						</p>
					</div>
				</div>
				<div className="timing">
					<p className="timing__week timing__week_color_green">1 неделя</p>
					<p className="timing__week timing__week_color_grey">4 недели</p>
					<p className="timing__task">Back-end</p>
					<p className="timing__task">Front-end</p>
				</div>
			</section>
	);
}

export default AboutProject;
