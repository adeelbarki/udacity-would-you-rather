import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from '../survey.png'


class Navbar extends Component {
    render() {

        const { user, authedUser } = this.props
        const userLink = (

            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <NavLink to='/home' className="nav-link text-white text-uppercase ml-5" exact activeClassName="active">
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
                <li className="nav-item m-right"><p className="nav-link text-white text-uppercase ml-5">
                    {user ? user.name : null} <i className="fas fa-user"></i>

                </p></li>
                <li>
                    <NavLink className="nav-link text-white text-uppercase ml-5" to="/login">Log out <i className="fas fa-sign-out-alt"></i></NavLink>
                </li>
            </ul>
        )

        const guestLink = (
            <div className="navbar-nav m-auto text-white">
                <h2 className="justify-content-guest">Who are you?</h2>
            </div>
        )

        return (
            <nav className="nav navbar-expand-lg navbar-light bg-dark">
                <h2 className="nav-link text-white m-left">Polls</h2>
                <img className="ml-2 text-white" src={logo} alt="logo" style={{ width: '40px', height: '40px' }} />
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