import React, { Component } from 'react';
import Greeting from './Greeting';

function LoginButton(props) {
	return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
	return <button onClick={props.onClick}>Logout</button>;
}
function Mailbox(props) {
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Hello!</h1>
			{unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
		</div>
	);
}

const messages = [ 'React', 'Re: React', 'Re:Re: React' ];

function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}

	return <div className="warning">Warning!</div>;
}

class LoginControl extends Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.handleToggleClick = this.handleToggleClick.bind(this);
		this.state = {
			isLoggedIn: false,
			showWarning: true
		};
	}
	handleLoginClick() {
		this.setState({ isLoggedIn: true });
	}
	handleLogoutClick() {
		this.setState({ isLoggedIn: false });
	}
	handleToggleClick() {
		this.setState((state) => ({ showWarning: !state.showWarning }));
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}
		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
				<Mailbox unreadMessages={messages} />
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
			</div>
		);
	}
}

export default LoginControl;
