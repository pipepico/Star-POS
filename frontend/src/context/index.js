import React, { createContext, Component } from 'react';
import AuthService from '../services/auth';
import toastr from 'toastr';
import history from '../components/history';

export const Mycontext = createContext();

const service = new AuthService();

class MyProvider extends Component {
	state = {
		form: {
			name: '',
			email: '',
			password: ''
		},
		user: JSON.parse(window.localStorage.getItem('logged'))
	};
	componentDidMount() {}
	handleInput = (e) => {
		const { form } = this.state;
		form[e.target.name] = e.target.value;
		this.setState(form);
	};
	handleSignup = (e) => {
		service
			.signup(this.state.form)
			.then((response) => {
				if (response.err) return toastr.error('something went wrong');
				toastr.success('Registered Successfully');
				this.setState({
					form: {
						name: '',
						email: '',
						password: ''
					}
				});
			})
			.catch((err) => toastr.error('Try again, something went wrong'));
	};

	handleLogin = (e) => {
		service
			.login(this.state.form)
			.then((response) => {
				if (response.err) return toastr.error('Something went wrong');
				window.localStorage.setItem('logged', JSON.stringify)(response.data);
				this.setState({ user: response.data });
				toastr.success('Successfully login, Welcome');
			})
			.catch((err) => toastr.error('Try again, something went wrong'));
	};

	handleLogout = (e) => {
		service
			.logout()
			.then((response) => {
				window.localStorage.clear();
				this.setState({
					user: window.localStorage.getItem('logged')
				});
				toastr.info('Goodbye');
				history.push('/');
			})
			.catch((err) => toastr.error('Try again, something went wrong'));
	};
	render() {
		return (
			<Mycontext.Provider
				value={{
					user: this.state.user,
					form: this.state.form,
					handleInput: this.handleInput,
					handleSignup: this.handleSignup,
					handleLogin: this.handleLogin,
					handleLogout: this.handleLogout
				}}
			>
				{this.props.children}
			</Mycontext.Provider>
		);
	}
}

export default MyProvider;
