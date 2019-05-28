import React, { Component } from 'react';

class Contact extends Component {
	state = {
		contacts: []
	};
	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => {
				this.setState({ contacts: data });
			})
			.catch((err) => ({ msg: 'Error' }));
	}
	render() {
		return (
			<div>
				<center>
					<h1>Contact List</h1>
				</center>
				{this.state.contacts.map((contact) => (
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">{contact.name}</h5>
							<h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
							<p class="card-text">{contact.company.catchPhrase}</p>
						</div>
					</div>
				))}
			</div>
		);
	}
}
export default Contact;
