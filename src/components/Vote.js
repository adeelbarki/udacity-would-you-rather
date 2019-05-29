import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers';
import { handleSaveQuestionAnswer } from '../actions/questions'


class Vote extends Component {

    handleSubmit = (e) => {
        const { dispatch } = this.props
        dispatch(handleSaveQuestionAnswer(e))
    }

    
    render() {

        const { question, authedUser, answeredQuestion, users, this_question_id } = this.props


        if (!question) {
            return (
                <div>
                    <h2>Waiting for Question to load! If page doesn't load </h2>
                    <p>
                        Return {'-'}
                        <Link to="/home">
                            <span> Back to Home</span>
                        </Link>
                    </p>
                </div>
            )
        }
        const selectedQuestion = formatQuestion(question, users[question.author])
        const { name, avatar, optionOne, optionTwo } = selectedQuestion

        if (answeredQuestion === undefined) {
            return (
                <div>
                    <span><h2>{name}</h2> asks:</span>
                    <br />
                    <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
                    <div>
                        <h3>Would You Rather...</h3>
                        <ul>
                            <li>
                                <button onClick={() => this.handleSubmit(
                                    {
                                        authedUser, qid: this_question_id, answer: 'optionOne'
                                    }
                                )}
                                >
                                    Vote
                                </button>
                                <span> {optionOne}</span>
                            </li>
                            <small><i>- or -</i></small>
                            <li>
                                <button onClick={() => this.handleSubmit(
                                    {
                                        authedUser, qid: this_question_id, answer: 'optionTwo'
                                    }
                                )}
                                >
                                    Vote
                                </button>
                                <span> {optionTwo}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )

        } else {
            return (
                <div>
                    <span><h2>{name}</h2> asks:</span>
                    <br />
                    <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
                    <div>
                        <h3>Total Votes</h3>
                        <ul>
                            <li>
                                {question.optionOne.votes.length}
                                <span> {optionOne}</span>
                            </li>
                            <li>
                                {question.optionTwo.votes.length}
                                <span> {optionTwo}</span>
                            </li>
                        </ul>
                        <Link to="/home">
                            <span> Back to Home Page</span>
                        </Link>
                    </div>
                </div>
            )
        }

    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const this_question_id = props.match.params.question_id
    const question = questions[this_question_id]
    let answeredQuestion = {}
    if (authedUser === null) {
        return (
            <Link to="/">
                <span> Back to Home</span>
            </Link>
        )
    } else {
        answeredQuestion = users[authedUser].answers[this_question_id]
    }

    return {
        questions,
        question,
        users,
        authedUser,
        this_question_id,
        answeredQuestion

    }
}

export default connect(mapStateToProps)(Vote)
