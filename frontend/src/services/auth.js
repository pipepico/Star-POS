import axios from 'axios';
const baseURL = 'http://localhost:5000';

class AuthService {
	constructor() {
		this.service = axios.create({
			baseURL,
			withCredentials: true
		});
	}
	signup = (form) => {
		return this.service.post('/signup', form).then(({ data }) => data).catch((err) => {
			return { err };
		});
	};
	login = (form) => {
		return this.service
			.post('/login', form)
			.then((response) => {
				console.log(response, 'call your mama');
				return response;
			})
			.catch((err) => {
				return { err: 'Password incorrect' };
			});
	};
	logout = (form) => {
		return this.service.get('/logout').then((response) => response).catch((err) => ({ msg: Error, err }));
	};
	loggedin = () => {
		return this.service.get('/loggedin').then((response) => response).catch((err) => err);
	};
}

export default AuthService;
