export const BASE_URL = 'https://api.portfolio-diploma.nomoredomains.rocks';

const getResponse = (res) => {
	if (!res.ok) {
		return res.json().then((data) => {
			return Promise.reject({ status: `Ошибка : ${res.status}`, message: data.message });
		});
	}
	return res.json();
};

export function register({ name, email, password }) {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email, password }),
	}).then(getResponse);
}

export function login({ email, password }) {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	}).then(getResponse);
}

export function loginWithToken() {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(getResponse);
}

export function logout() {
	return fetch(`${BASE_URL}/signout`, {
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then(getResponse);
}

export function edit({ name, email }) {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'PATCH',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email }),
	}).then(getResponse);
}

export function savedMovie(element) {
	return fetch(`${BASE_URL}/movies`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			country: element.country,
			director: element.director,
			duration: element.duration,
			thumbnail: 'https://api.nomoreparties.co/' + element.image.formats.thumbnail.url,
			year: element.year,
			description: element.description,
			image: 'https://api.nomoreparties.co/' + element.image.url,
			trailerLink: element.trailerLink,
			movieId: element.id,
			nameRU: element.nameRU,
			nameEN: element.nameEN,
		}),
	}).then(getResponse);
}

export function getSavedMovies() {
	return fetch(`${BASE_URL}/movies`, {
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then(getResponse);
}

export function removeMovies(movieId) {
	return fetch(`${BASE_URL}/movies/${movieId}`, {
		method: 'DELETE',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then(getResponse);
}
