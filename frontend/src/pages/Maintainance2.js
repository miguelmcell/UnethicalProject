import React, {
	Component
} from 'react';
// mysql -h unhackable-db.cl4q3xwzvwo6.us-east-1.rds.amazonaws.com -uadmin -p12345678
// INSERT INTO users (account_id,plain_text_password,name) VALUES ('253153934829', 'football123', 'Mike');
// 105; INSERT INTO users (account_id,plain_text_password,name) VALUES ('111111111111', '123', 'Miguel m');
// " or ""="
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
// import requests from '../util/requests.js';
import {
	declareTypeAlias
} from '@babel/types';

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			welcome: ''
		};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
	}
  handleSubmit(evt) {
		evt.preventDefault()
		if (this.state.value != ''){
			let id = Math.floor(100000000000 + Math.random() * 900000000000)
			// INSERT INTO users(account_id,plain_text_password,name) VALUES ('448551934522', 'Money123', 'Jimmy');
			// 'INSERT INTO users(account_id,plain_text_password,name) VALUES (''+id+'', 'tempPassword123', ''+this.state.value+'');'
			let query = 'INSERT INTO users(account_id,plain_text_password,name) VALUES (\''+id+'\', \'tempPassword123\', \''+this.state.value+'\');';

			fetch('http://35.188.102.108:8080/createAccount',{
				method: 'post',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: new URLSearchParams({
					'query': query
				}),
			})
			.then(response => response)
			.then(users => {
				console.log(users);
				this.setState({welcome: "Success, Please check email for verification"});
			})
		}
    else {
			this.setState({welcome: 'Enter Name'});
		}
	}
  handleChange(evt) {
    this.setState({value: evt.target.value});
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
				<div className="container text-center" style={{width: '40%'}}>
					<h1 className="text-center">Maintainance Portal Account Registration</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Please enter name</Form.Label>
              <Form.Control type="text" placeholder="Please enter name" onChange={this.handleChange}/>
              <br/>
              <Button variant="primary" type="submit">
              Submit
              </Button>
            </Form.Group>
          </Form>
					<h1 className="text-center">{this.state.welcome}</h1>
				</div>
			</div>
		);
	}
}
