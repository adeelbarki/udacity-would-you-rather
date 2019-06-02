import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import { Route } from 'react-router-dom'
import Vote from './Vote'
import Nav from './nav'
import newQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import Login from './Login'
import PrivateRoute from './PrivateRoute'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props
    return (
      <Fragment>
        <LoadingBar />
        <div className="conatiner">
          <Nav />
          {loading === true
            ? null
            : <div>
              <Route path="/login" exact component={Login} />
              <PrivateRoute path='/home' exact component={Dashboard} />
              <PrivateRoute path="/question/:question_id" component={Vote} render={(props) => (
                <Vote {...props} />
              )} />
              <PrivateRoute path="/new" exact component={newQuestion} />
              <PrivateRoute path="/leader" exact component={Leaderboard} />
              <Route path="/" exact component={Login} />
            </div>
          }
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
