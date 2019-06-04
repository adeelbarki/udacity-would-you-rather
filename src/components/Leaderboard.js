import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'


class Leaderboard extends Component {
    render() {
        const { users } = this.props

        return (
            <div className="container">
                {users.map((userId) =>
                    <User key={userId} id={userId} />
                )}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const userIds = Object.keys(users)
    const totalVotes = userIds.sort((a, b) => (
        (Object.keys(users[b].answers).length + users[b].questions.length) -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    ))

    return {
        users: totalVotes,
    }
}

export default connect(mapStateToProps)(Leaderboard)