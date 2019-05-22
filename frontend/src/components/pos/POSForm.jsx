import React, { Component } from 'react';
import { Layout, Input } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class POSForm extends Component {
	render() {
		return (
			<React.Fragment>
				<h1>Star POS</h1>
				<Layout>
					<Layout>
						<Header>
							<Input placeholder="Barcode" size="large" type="text" name="search" />
						</Header>
						<Content>
							
						</Content>
						<Footer>Footer</Footer>
					</Layout>
					<Sider>Sider</Sider>
				</Layout>
			</React.Fragment>
		);
	}
}

export default POSForm;
