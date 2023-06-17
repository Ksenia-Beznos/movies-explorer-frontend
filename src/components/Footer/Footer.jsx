import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<>
			<div className="footer">
				<p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
				<div className="footer__end">
					<p className="footer__date">&copy; {new Date().getFullYear()}</p>
					<div className="footer__services">
						<p className="footer__practicum">Яндекс.Практикум</p>
						<a
							className="footer__github"
							href="https://github.com/Ksenia-Beznos"
							rel="noreferrer"
							target="_blank"
						>
							Github
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
