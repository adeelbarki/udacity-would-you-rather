import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';
import Vote from './Vote'
import { Link } from 'react-router-dom'

class Question extends Component {

    toVote = (event) => {
        event.preventDefault()
    }

    toParent = (event, id) => {
        event.preventDefault()
        // Redirect to Poll results
    }

    render() {
        const { questions, question, question_id } = this.props
        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { name, avatar, optionOne, optionTwo } = question

        return (
            <div>
                <span>{name} asks:</span>
                <br/>
                <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />

                <div>
                    <h3>Would You Rather...</h3>
                    {optionOne} <small><i>- or -</i></small> {optionTwo}
                    {/* <input type="radio" name="vote" value={optionTwo} />{optionTwo} <br /> */}
                    <br />
                    <Link to= {`/question/${question_id}`}>
                    <button>View this Card!</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, { id }) {
    const question = questions[id]
    const question_id = question.id
    return {
        question_id,
        question: formatQuestion(question, users[question.author]),
    }
}

export default connect(mapStateToProps)(Question)