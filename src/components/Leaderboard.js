import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'


class Leaderboard extends Component {
    render() {
        const { users } = this.props

        return (
            <div className="card w-25 mx-auto">
                <div className="container">
                    {users.map((userId) =>
                        <User key={userId} id={userId} />
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const userIds = Object.keys(users)
    const totalVotes = userIds.map(id => ({
        votes: Object.keys(users[id].answers).length + Object.keys(users[id].questions).length
    }))

    return {
        users: userIds.sort((a, b) => (
            totalVotes - (Object.keys(users[a].answers).length + users[b].questions.length)
        )),
    }
}

export default connect(mapStateToProps)(Leaderboard)