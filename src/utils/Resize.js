import { useEffect, useState } from 'react';

export function HandleResizeWindow() {
	const [quantityMovies, setQuantityMovies] = useState({ quantity: 12, quantityElse: 3 });

	useEffect(() => {
		function windowResize() {
			const windowWidth = window.innerWidth;
			let quantity = quantityMovies.quantity;
			let quantityElse = quantityMovies.quantityElse;

			if (windowWidth < 1000) {
				quantity = 8;
				quantityElse = 2;
			}

			if (windowWidth < 768) {
				quantity = 5;
				quantityElse = 1;
			}

			setQuantityMovies({ quantity, quantityElse });
		}

		windowResize();

		let timer;
		window.addEventListener('resize', () => {
			clearTimeout(timer);
			timer = setTimeout(windowResize, 1000);
		});
		return () => {
			window.removeEventListener('resize', windowResize);
			clearTimeout(timer);
		};
	}, []);
  return quantityMovies;
}
