import React from 'react';
import { Col, Card, Row } from 'antd';

const ProfileForm = (props) => {
	return (
		<Col span={12} offset={4}>
			<Card title={'Profile of ' + props.name}>
				<Row>
					<Col span={18} offset={3}>
						<h3>{props}</h3>
					</Col>
				</Row>
			</Card>
		</Col>
	);
};

export default ProfileForm;
