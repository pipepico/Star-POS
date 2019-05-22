import React, { Component } from 'react';
import { Form, Icon, Input, Button, Col, Card, Row } from 'antd';
import AuthService from '../../services/auth';
import toastr from 'toastr';
import {} from '../../context'

const service = new AuthService();

class NormalLoginForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				service
					.signup(values)
					.then((response) => {
						console.log(response);
						toastr.success('User created');
					})
					.catch((err) => {
						console.log(err);
						toastr.error('Something went wrong');
					});
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Row type="flex" align="middle">
				<Col xs={{ span: 11, offset: 11 }} lg={{ span: 6, offset: 9 }}>
					<Card title={<Icon type="user-add" />}>
						<Form onSubmit={this.handleSubmit} className="login-form">
							<Form.Item label="Name">
								<Input size="large" placeholder="Name" name="name" prefix={<Icon type="smile" />} />
							</Form.Item>
							<Form.Item label="E-mail">
								{getFieldDecorator('email', {
									rules: [
										{
											type: 'email',
											message: 'The input is not valid E-mail'
										},
										{
											required: true,
											message: 'Please input your E-mail'
										}
									]
								})(
									<Input
										size="large"
										placeholder="Email"
										name="email"
										prefix={<Icon type="mail" />}
									/>
								)}
							</Form.Item>
							<Form.Item label="Password">
								{getFieldDecorator('password', {
									rules: [
										{
											required: true,
											message: 'Please input your password'
										}
									]
								})(
									<Input.Password
										size="large"
										type="password"
										name="password"
										placeholder="Password"
										prefix={<Icon type="lock" />}
									/>
								)}
							</Form.Item>
							<Form.Item>
								<Button type="primary" htmlType="submit" block className="login-form-button">
									Sign up
								</Button>
							</Form.Item>
						</Form>
					</Card>
				</Col>
			</Row>
		);
	}
}

const WrappedNormalSignupForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalSignupForm;
