import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className="footer">
			<div className="footer__container">
				<p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
				<div className="footer__end">
					<p className="footer__date">{new Date().getFullYear()}</p>
					<p className="footer__practicum">Яндекс.Практикум</p>
					<a
						className="github-link"
						href="https://github.com/Ksenia-Beznos"
						rel="noreferrer"
						target="_blank"
					>
						Github
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
