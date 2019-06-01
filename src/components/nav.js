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
                    <NavLink to='/home' className="nac-link text-white text-uppercase ml-5" exact activeClassName="active">
                        Home <i class="fas fa-home"></i>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/new' className="nac-link text-white text-uppercase ml-5" exact activeClassName="active">
                        New Question <i class="far fa-question-circle"></i>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/leader' className="nac-link text-white text-uppercase ml-5" exact activeClassName="active">
                        LeaderBoard <i class="fas fa-ribbon"></i>
                    </NavLink>
                </li>
                <NavLink className="nac-link text-white text-uppercase ml-5">
                    <h2>|</h2>
                </NavLink>
                <li className="nav-item m-right"><NavLink className="nac-link text-white text-uppercase ml-5">
                    {user ? user.name : null} <i class="fas fa-user"></i>

                </NavLink></li>
                <li>
                    <a className="nac-link text-white text-uppercase ml-5" href="/login">Log out <i class="fas fa-sign-out-alt"></i></a>
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
                <h2 className="text-white m-left">Polls</h2>
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