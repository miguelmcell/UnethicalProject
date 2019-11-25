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
			fetch('http://35.188.102.108:8080/getAccount/'+this.state.value)
			.then(response => response.json())
			.then(users => {
				console.log(users);
				if (users.length == 0){
					this.setState({welcome: 'Account ID not found'});
				}
				else{
					this.setState({welcome: 'Welcome ' + users[0]["name"] + '!'});
				}
			})
		}
    else {
			this.setState({welcome: 'Enter Account ID'});
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
					<h1 className="text-center">Maintainance Portal</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Account ID</Form.Label>
              <Form.Control type="text" placeholder="12 digit account number" onChange={this.handleChange}/>
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
