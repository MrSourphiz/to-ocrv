import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

import MainPage from './components/MainPage/MainPage'
import Posts from './components/StackOverflow/Posts/Posts'
import BackButton from './components/Popups/BackButton'
import Detail from './components/Detail/Detail'

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div className="App">
        <Switch>
          <Route history={history} path='/home' component={MainPage} />
          <Route history={history} path='/home' component={BackButton} />
          <Route history={history} path='/detail' component={Detail} />
          <Route history={history} path='/sf' component={Posts} />
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)