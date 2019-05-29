import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav() {
    return (
        <nav className="nav">
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
                <li>
                    <NavLink to='/login' exact activeClassName="active">
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}