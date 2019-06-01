import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    componentWillMount() {
        this.props.dispatch(setAuthedUser(false))
    }

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
        const { username, isLoggedIn } = this.state
        const { users } = this.props

        if (isLoggedIn) {
            return <Redirect to='/home' />
        }


        return (
            <div className="card w-25 mx-auto App">
                <form onSubmit={this.handleSubmit}>
                    <h2>Please sign in</h2>
                    <label htmlFor="username">User</label>

                    <select id="username" value={username} onChange={this.handleChange}>
                        <option value='' disabled>Select</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        )
                        )}
                    </select>
                    <button type="submit" id="submit" name="submit" className="btn btn-primary btn-question">Login</button>
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