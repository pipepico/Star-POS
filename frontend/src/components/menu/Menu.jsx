import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

class MenuF extends Component {
	state = {
		current: 'home',
		user: ''
	};
	handleClick = (e) => {
		this.state({
			current: e.key
		});
	};

	componentDidMount() {
		const userL = localStorage.getItem('user');
		this.setState({ user: userL });
	}
	render() {
		return (
			<Menu
				size="large"
				theme="dark"
				// onClick={this.handleClick}
				// selectedKeys={[ this.state.current ]}
				mode="horizontal"
			>
				<Menu.Item key="home">
					<Link to="/">
						<Icon type="home" />
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/pos">
						<Icon type="shopping-cart" /> POS
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/signup">
						<Icon type="user-add" /> Register
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/login">
						<Icon type="user" /> Login
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/profile">
						<Icon type="profile" /> Profile
					</Link>
					{this.state.user && <h1>Logged</h1>}
				</Menu.Item>
			</Menu>
		);
	}
}

export default MenuF;
