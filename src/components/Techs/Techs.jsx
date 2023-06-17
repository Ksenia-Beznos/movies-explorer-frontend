import './Techs.css';

function Techs() {
	return (
		<div className="techs">
			<div className="techs__container">
				<h2 className="techs__header">Технологии</h2>
				<h3 className="techs__title">7 технологий</h3>
				<p className="techs__subtitle">
					На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
				</p>
				<ul className="techs__list">
					<li>
						<p className="techs__skill">HTML</p>
					</li>
					<li>
						<p className="techs__skill">CSS</p>
					</li>
					<li>
						<p className="techs__skill">JS</p>
					</li>
					<li>
						<p className="techs__skill">React</p>
					</li>
					<li>
						<p className="techs__skill">Git</p>
					</li>
					<li>
						<p className="techs__skill">Express.js</p>
					</li>
					<li>
						<p className="techs__skill">mongoDB</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Techs;
