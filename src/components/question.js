import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';

class Question extends Component {

    handleVote = (event) => {
        event.preventDefault()
        //this.toParent redirect to poll results
        // todo: Handle Vote 
    }
    
    toParent = (event, id) => {
        event.preventDefault()
        // Redirect to Poll results
    }

    render() {
        const { question } = this.props

        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { name, avatar, optionOne, optionTwo } = question

        return (
            <div className="question">
                <div className="question">
                    <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
                    <div className="question-info">
                        <span>{name} asks:</span>
                    </div>
                    <div>
                        <h3>Would You Rather...</h3>
                        <input type="radio" name="vote" value={optionOne} />{optionOne}<br />
                        <input type="radio" name="vote" value={optionTwo} />{optionTwo} <br />
                        <button onClick={this.handleVote}>Submit</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const parentQuestion = question ? questions[question.votingTo] : null

    return {
        authedUser,
        question: formatQuestion(question, users[question.author], parentQuestion)
    }
}

export default connect(mapStateToProps)(Question)