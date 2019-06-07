import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import reactReduxLogo from '../react-redux.svg'

class Login extends Component {

    state = {
        username: '',
        isLoggedIn: false
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const { username } = this.state
        const { dispatch } = this.props

        if (username !== '') {
            dispatch(setAuthedUser(username))
            this.setState(() => (
                {
                    isLoggedIn: true
                }))
        }
    }

    handleChange = (e) => {
        const username = e.target.value
        this.setState(() => ({
            username
        }))
    }

    render() {
        const { from } = this.props.location.state || {from: {pathname: '/'}}
        const { username, isLoggedIn } = this.state
        const { users } = this.props
        const disableSubmit = username === '' ? true : false

        if (isLoggedIn) {
            return <Redirect to={from} />
        }

        return (
            <div className="card w-25 mx-auto App card-margin-spacing">
                <div className="card-header">
                    <h4>Welcome to the Would You Rather App</h4>
                    <p>Please sign in to continue</p>
                </div>
                <img src={reactReduxLogo} className="react-redux-logo" alt="reactReduxLogo" />
                <form onSubmit={this.handleSubmit}>
                    <h4>Sign in</h4>
                    <select className="select-input" 
                        id="username" value={username} onChange={this.handleChange}>
                        <option value='' disabled>Select User</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        )
                        )}
                    </select>
                    <button type="submit" id="submit" name="submit" 
                    className="btn btn-primary btn-question" disabled={disableSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        username: authedUser,
        users: Object.values(users).map((user) => {
            return ({
                id: user.id,
                name: user.name
            })
        })
    }
}

export default connect(mapStateToProps)(Login)