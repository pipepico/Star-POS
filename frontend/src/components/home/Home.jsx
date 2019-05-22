import React, { Component } from 'react';
import CardComponent from './CardComponent';
import { Row } from 'antd';
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
	render() {
		return (
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex" justify="space-around">
				{directions.map((e, i) => (
					<CardComponent key={i} title={e.title} description={e.description} url={e.url} />
				))}
			</Row>
		);
	}
}
