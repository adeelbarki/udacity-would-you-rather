import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import { Route } from 'react-router-dom'
import Vote from './Vote'

class App extends Component {
  constructor(props){
    super(props)
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props
    return (
      <div className="App">
        <LoadingBar />
        <Route exact path="/" render={() => (
          loading === true
            ? null
            : <Dashboard />

        )} />

        <Route path="/question/:question_id" render={(props) => (
          <Vote {...props} />
        )} />
      </div>
    )
  }

}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
