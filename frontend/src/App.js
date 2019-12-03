import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Navbar from './components/Navbar';
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Maintainance from './pages/Maintainance'
import MaintainanceRegistration from './pages/Maintainance2'

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="Site-header">
            <Navbar history={this.props.history}/>
          </div>
          <div>
            {/* <Router> */}
              <div className="main">
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/about" component={About} />
                  <Route path="/Page1" component={Page1} />
                  <Route path="/Page2" component={Page2} />
                  <Route path="/MaintainancePortal" component={Maintainance} />
                  <Route path="/MaintainancePortalRegistration" component={MaintainanceRegistration} />
                </Switch>
              </div>
            {/* </Router> */}
          </div>
        </div>

      </div>

    );
  }
}

export default withRouter(App);
