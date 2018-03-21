import React, { Component } from 'react';
import MainContent from './containers/main_content';
import Login from './containers/login/login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
