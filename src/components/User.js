import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
    render() {
        const { user } = this.props
        return (
            <div>
                <h2>{user.name}</h2> <br/> 
                <span>Total Questions Asked: {user.questions.length}</span>  <br/>
                <span>Questions Answered: {Object.keys(user.answers).length}</span>
            </div>
        )
    }
}

function mapStateToProps({users}, {id}) {
    return {
        user: users[id]
    }
}

export default connect(mapStateToProps)(User)

