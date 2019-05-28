import axios from 'axios';
const baseURL = 'http://localhost:5000';

class ArticleService {
	constructor() {
		this.service = axios.create({
			baseURL,
			withCredentials: true
		});
	}

	all = (form) => {
		return this.service.get('/article', form).then(({ data }) => data).catch((err) => {
			return { err };
		});
	};
	oneArt = (form) => {
		return this.service.get('/article/:id', form).then(({ data }) => data).catch((err) => {
			return { err };
		});
	};
}
