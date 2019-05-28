import React, { Component } from 'react';
import CardComponent from './CardComponent';
import { Row, Col } from 'antd';
import Toggle from '../../Toggle';
import LoginControl from '../../LoginControl';
//import Clock from '../../Clock';
//import Greeting from '../../Greeting';

const directions = [
	{
		title: 'Register to POS',
		description: 'Register to use the POS online',
		url: '/signup'
	},
	{
		title: 'Login',
		description: 'Log in',
		url: '/login'
	},
	{
		title: 'Grow your bussiness',
		description: 'See more',
		url: '/starpos'
	}
];

export default class Home extends Component {
	state = {
		thick: () => {
			return new Date().toLocaleTimeString();
		}
	};
	render() {
		return (
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex" justify="space-around">
				<Col span={12} offset={6}>
					<Toggle />
					<LoginControl />
				</Col>
				<Col span={6} />
				{directions.map((e, i) => (
					<CardComponent key={i} title={e.title} description={e.description} url={e.url} />
				))}
			</Row>
		);
	}
}
