import React, { Component } from 'react';
import ProfileForm from './ProfileForm';
import { Row } from 'antd';

class Profile extends Component {
	render() {
		const user = localStorage.getItem('loggedUser');
		if (!user)
			return (
				<div>
					<h1>No register</h1>
				</div>
			);
		return (
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex" justify="space-around">
				<ProfileForm name={user} />
			</Row>
		);
	}
}

export default Profile;
