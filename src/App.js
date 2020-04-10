import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

import MainPage from './components/MainPage/MainPage'
import PostList from './components/PostList/PostList'
import Detail from './components/Detail/Detail'


class App extends Component {

  render() {
    const { history } = this.props

    return (
      <div className="App">
        <Switch>
          <Route exact path='/home' history={history} component={MainPage} />
          <Route path='/sf/detail' history={history} component={Detail} />
          <Route path='/gh/detail' history={history} component={Detail} />
          <Route path='/sf' history={history} component={PostList} />
          <Route path='/gh' history={history} component={PostList} />
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)