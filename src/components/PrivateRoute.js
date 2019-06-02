import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { isEmpty } from "../utils/helpers";


const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route {...rest} render={(props) => {
        return (
            isLoggedIn ?
                <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )
    }} />
)

function mapStateToProps({ authedUser }) {
    return {
        isLoggedIn: !isEmpty(authedUser)
    }
}

export default connect(mapStateToProps, null, null, { pure: false, })(PrivateRoute)