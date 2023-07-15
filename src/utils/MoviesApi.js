export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const getResponse = (res) => {
	// console.log(res.json().then((res) => console.log(res)))
	if (!res.ok) {
		return Promise.reject({ status: `Ошибка : ${res.status}` });
	}
	return res.json();
};

export function getMovies() {
	return fetch(BASE_URL, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then(getResponse);
}
