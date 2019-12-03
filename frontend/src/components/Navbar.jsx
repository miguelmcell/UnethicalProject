import React, {Component} from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // search values
			searchValues: '',
        }

        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }

    handleSearchChange(event) {
		this.setState({
			searchValues: event.target.value
		})
	}

    handleSearchSubmit() {
        console.log(this.props)
        this.props.history.push({pathname: '/search', state: {searchValues: this.state.searchValues}})
    }

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Most Secure Site Ever</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Page1">Page1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Page2">Page2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/MaintainancePortal">Maintainance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/MaintainancePortalRegistration">Maintainance Registration</a>
                            </li>
                        </ul>
                    </div>
                </nav>
			</div>
		);
	}
}
