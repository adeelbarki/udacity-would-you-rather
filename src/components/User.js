import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
    render() {
        const { user } = this.props
        const questionsLength = user.questions.length
        const answeredQuestions = Object.keys(user.answers).length
        const total = questionsLength + answeredQuestions
        return (
            <div className="card App">
                <h2>{user.name}</h2> <br/> 
                <span>Total Questions Asked: {questionsLength }</span>  <br/>
                <span>Questions Answered: {answeredQuestions} </span>
                <span>Total: {total}</span>
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

