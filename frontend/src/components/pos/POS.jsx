import React, { Component } from 'react';
import { Form, Input } from 'antd';
import Axios from 'axios';
// import toastr from 'toastr';
// import ArticleService from '../../services/article';

// const service = new ArticleService();
const baseURL = 'http://localhost:5000/article';

class Pos extends Component {
	constructor(props) {
		super(props);
		
	}
	state = {
		articles: []
	};

	handleInput = (e) => {
		// const { form } = this.state;
		// form[e.target.name] = e.target.value;
		// this.setState(form);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		Axios.get(baseURL, {})
			.then(({ data }) => {
				this.setState({ articles: data });
			})
			.catch((error) => console.log(error));
	};
	render() {
		const { articles } = this.state;
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<Input name="name" placeholder="Name" type="text" onChange={this.handleInput} />
					{articles.map((e) => (
						<ul>
							<li>
								<a key={e._id} href={`${baseURL}/${e._id}`}>
									{e.name}
								</a>
							</li>
						</ul>
					))}
				</Form>
			</div>
		);
	}
}

export default Pos;
