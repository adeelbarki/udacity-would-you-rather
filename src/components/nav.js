import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from '../survey.png'

import { logout } from '../actions/authedUser'


class Navbar extends Component {

    handleLogOut = (e) => {
        const { user, dispatch } = this.props
        dispatch(logout(user.id))
    }


    render() {

        const { user } = this.props


        const userLink = (

            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <NavLink to='/' className="nav-link text-white text-uppercase ml-5" exact activeClassName="active">
                        Home <i className="fas fa-home"></i>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/add' className="nav-link text-white text-uppercase ml-5" exact activeClassName="active">
                        New Question <i className="far fa-question-circle"></i>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/leaderboard' className="nav-link text-white text-uppercase ml-5" exact activeClassName="active">
                        LeaderBoard <i className="fas fa-ribbon"></i>
                    </NavLink>
                </li>
                <h2 className="nav-link text-white text-uppercase ml-5">
                    |</h2>
                <li className="nav-item m-right">
                    {user ? <p className="nav-link text-white text-uppercase ml-5">{user.name}<i className="fas fa-user"></i>

                    </p> : null} </li>
                <li>
                    <NavLink
                        className="nav-link text-white text-uppercase ml-5"
                        to="#"
                        onClick={this.handleLogOut}
                    >
                        {user ? <p>Logout
                        <i className="fas fa-sign-out-alt"></i></p> : <div className="navbar-nav m-auto text-white">
                                <h5>Who are you?</h5>
            </div>}

                    </NavLink>
                </li>
            </ul>
        )

        return (
            <nav className="nav navbar-expand-lg navbar-light bg-dark">
                <h2 className="nav-link text-white m-left">Polls</h2>
                <img className="poll-logo" src={logo} alt="logo" />
                {userLink}
            </nav>
        )
    }

}

function mapStateToProps({ users, authedUser }) {
    const user = users[authedUser]
    console.log(authedUser)
    return {
        user,
    }

}

export default connect(mapStateToProps)(Navbar)
