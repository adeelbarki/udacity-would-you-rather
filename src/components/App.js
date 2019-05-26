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
        <h3>Polls</h3>
        <div className="conatiner">
          <Nav />
          {loading === true
            ? null
            : <div>
              <Route path='/' exact component={Dashboard} />
              <Route path="/question/:question_id" render={(props) => (
                <Vote {...props} />
              )} />
              <Route path="/new" component={newQuestion} />
              <Route path="/leader" component={Leaderboard} />
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
