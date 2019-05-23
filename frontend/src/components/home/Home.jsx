import React, { Component } from 'react';
import CardComponent from './CardComponent';
import { Row, Col } from 'antd';
import Clock from '../../Clock';
import Toggle from '../../Toggle';
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
				{/* <p>{setInterval(this.state.thick, 1000)}</p>
				<p>{this.state.updateDate(this.state.thick())}</p> */}
				<Col span={12} offset={8}>
					<Clock />
					<Toggle />
				</Col>
				{directions.map((e, i) => (
					<CardComponent key={i} title={e.title} description={e.description} url={e.url} />
				))}
			</Row>
		);
	}
}
