import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'antd';

export default function CardComponent({ title, description, url }) {
	return (
		<Col className="gutter-column">
			<Card title={title} style={{ marginTop: '50px' }} className="gutter-box">
				<Link to={url}>
					<Button>{description} </Button>
				</Link>
			</Card>
		</Col>
	);
}
