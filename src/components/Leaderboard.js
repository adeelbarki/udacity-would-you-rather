import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'


class Leaderboard extends Component {
    render() {
        const { users } = this.props
        
        return (
            <div>
                <h1>Leaderboard</h1>
                {users.map((userId) =>
                    <User key={userId} id={userId}/>
                )}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const userIds = Object.keys(users)
    
    return {
        users: userIds.sort((id) => (
            id
        )),
        }
}

export default connect(mapStateToProps)(Leaderboard)