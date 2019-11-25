import React, {
	Component
} from 'react';

import {Container,Row,Col} from 'react-bootstrap';
// import requests from '../util/requests.js';
import {
	declareTypeAlias
} from '@babel/types';

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total_issues: 0,
			total_commits: 0,

		};
	}

	componentDidMount() {
		// this.getAllCommits(axios)
		// this.getAllIssues(axios);
		// this.getUserIssues(axios)
		// this.getUserCommits(axios);

	}

	render() {
		return (
			<div>
				<div className="container text-center">
					<h1 className="text-center">About Us</h1>
				</div>
			</div>
		);
	}
}
