import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Navbar extends Component {
    render() {

        const { user, authedUser } = this.props
        const userLink = (
            <ul>
                <li>
                    <NavLink to='/home' exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' exact activeClassName="active">
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leader' exact activeClassName="active">
                        LeaderBoard
                    </NavLink>
                </li>
                <li>{user ? user.name : null}</li>
                <li>
                    <a href="/login">Log out</a>
                </li>
            </ul>
        )

        const guestLink = (
                        <h2>Who are you?</h2>
        )

        return (
            <nav className="nav">
                {authedUser ? userLink : guestLink}
            </nav>
        )
    }

}

function mapStateToProps({ users, authedUser }) {
    const user = users[authedUser]
    console.log(authedUser)
    return {
        user,
        authedUser
    }

}

export default connect(mapStateToProps)(Navbar)