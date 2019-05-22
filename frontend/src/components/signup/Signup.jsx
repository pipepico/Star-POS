import React, { Component } from 'react';
import SignupForm from './SignupForm';

class Signup extends Component {
	render() {
		return (
			<React.Fragment style={{ marginTop: '15px' }}>
				<SignupForm />
			</React.Fragment>
		);
	}
}

export default Signup;
