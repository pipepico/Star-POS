import React, { Component } from 'react';
import SignupForm from './SignupForm';

class Signup extends Component {
	render() {
		const user = localStorage.getItem('loggedUser');
		console.log(user);
		console.log({ user });
		return (
			<div style={{ marginTop: '15px' }}>
				<SignupForm />
			</div>
		);
	}
}

export default Signup;
