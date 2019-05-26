import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName="active">
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
            </ul>
        </nav>
    )
}