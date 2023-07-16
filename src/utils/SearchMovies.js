import { HandleResizeWindow } from './Resize';

export function searchMovies(movies, query, short, quantity) {
	const defaultQuantity = HandleResizeWindow();


	if (!movies) {
		return [];
	}

	let filterMovies = movies;

	if (query) {
		filterMovies = filterMovies.filter((movie) =>
			movie.nameRU.toLowerCase().includes(query.toLowerCase())
		);
	}

	if (short) {
		filterMovies = filterMovies.filter((movie) => movie.duration <= 40);
	}

	filterMovies = filterMovies.slice(0, quantity ? quantity : defaultQuantity.quantity);

	return filterMovies;
}
