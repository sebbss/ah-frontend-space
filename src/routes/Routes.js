import React, { Component } from 'react';
import {
  Route, BrowserRouter, Switch, Link,
} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/login';
import notFound from '../components/notfound';
import Hello from '../containers/Hello';

export class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/login" className="login"> Login </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/hello" component={Hello} />
            <Route component={notFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;