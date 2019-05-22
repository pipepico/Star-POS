import React from 'react';
import { Input, Button, Row, Col, Card, Icon, Form } from 'antd';
import { Mycontext } from '../../context';

// const LoginForm = () => (
// 	<Mycontext.Consumer>
// 		{({ handleInput, handleSubmit }) => {
// 			return (
// 				<Row type="flex" align="middle">
// 					<Col xs={{ span: 11, offset: 11 }} lg={{ span: 6, offset: 9 }}>
// 						<Card title={<Icon type="user" />}>
// 							<Form className="login-form">
// 								<Form.Item>
// 									<Input
// 										size="large"
// 										type="email"
// 										name="email"
// 										prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
// 										placeholder="Email"
// 										onChange={handleInput}
// 									/>
// 								</Form.Item>
// 								<Form.Item>
// 									<Input.Password
// 										size="large"
// 										placeholder="Password"
// 										type="password"
// 										name="password"
// 										onChange={handleInput}
// 										prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
// 									/>
// 								</Form.Item>

// 								<Form.Item>
// 									<Button
// 										type="primary"
// 										htmlType="submit"
// 										className="login-form-button"
// 										block
// 										onClick={handleSubmit}
// 									>
// 										Log in
// 									</Button>
// 									Or <a href="/signup">register now!</a>
// 								</Form.Item>
// 							</Form>
// 						</Card>
// 					</Col>
// 				</Row>
// 			);
// 		}}
// 	</Mycontext.Consumer>
// );

function LoginForm({ handleInput, handleSubmit }) {
	return (
		<Row type="flex" align="middle">
			<Col xs={{ span: 11, offset: 11 }} lg={{ span: 6, offset: 9 }}>
				<Card title={<Icon type="user" />}>
					<Form className="login-form">
						<Form.Item>
							<Input
								size="large"
								type="email"
								name="email"
								prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Email"
								onChange={handleInput}
							/>
						</Form.Item>
						<Form.Item>
							<Input.Password
								size="large"
								placeholder="Password"
								type="password"
								name="password"
								onChange={handleInput}
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							/>
						</Form.Item>

						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button"
								block
								onClick={handleSubmit}
							>
								Log in
							</Button>
							Or <a href="/signup">register now!</a>
						</Form.Item>
					</Form>
				</Card>
			</Col>
		</Row>
	);
}

export default LoginForm;
