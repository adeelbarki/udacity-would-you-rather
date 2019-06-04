import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers';
import { handleSaveQuestionAnswer } from '../actions/questions'
import yourVote from '../your-vote.png'

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
                    <h2>404! This question doesn't exist </h2>
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
                <div className="card w-25 mx-auto card-margin-spacing">
                    <div className="card-header">
                        <h5>{name} asks: </h5>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
                            </div>
                            <div className="col-10">
                                <h3>Would You Rather...</h3>
                                <ul>
                                    <li className="card bg-info text-white">
                                        <span> {optionOne}</span>
                                        <button className="btn border-dark btn-light btn-question" onClick={() => this.handleSubmit(
                                            {
                                                authedUser, qid: this_question_id, answer: 'optionOne'
                                            }
                                        )}
                                        >
                                            Vote
                                        </button>
                                    </li>
                                    <h4 className="App">---- OR ----</h4>
                                    <li className="card border-dark bg-light">
                                        <span> {optionTwo}</span>
                                        <button className="btn border-dark btn-light  btn-question" onClick={() => this.handleSubmit(
                                            {
                                                authedUser, qid: this_question_id, answer: 'optionTwo'
                                            }
                                        )}
                                        >
                                            Vote
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            const optionOneLength = question.optionOne.votes.length
            const optionTwoLength = question.optionTwo.votes.length
            const TotalVotes = optionOneLength + optionTwoLength
            const optionOnePercent = parseInt((optionOneLength / TotalVotes) * 100, 10)
            const optionTwoPercent = parseInt((optionTwoLength / TotalVotes) * 100, 10)
            return (
                <div className="card w-25 mx-auto card-margin-spacing" >
                    <div className="card-header">
                        <h5>Asked by {name}</h5>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={avatar} alt={`Avatar of ${name}`}
                                    className="avatar mx-auto d-block" />
                            </div>
                            <div className="col-8">
                                <h2>Results: </h2>
                                <ul>
                                    <li className="card bg-info text-white">
                                        {users[authedUser].answers[question.id] === 'optionOne' ?
                                            <div className="card-img-overlay img-overlay-optionOne">
                                                <img className="text-right img-overlay-size" src={yourVote} alt="logo" />
                                            </div>
                                            : ''}
                                        <span> {optionOne} </span> <br />
                                        <div className="progress">
                                            <div className="progress-bar border-sucess bg-warning" role="progressbar"
                                                style={{ width: optionOnePercent + ("%") }}
                                                aria-valuenow={optionOnePercent} aria-valuemin="0" aria-valuemax="100">
                                                {optionOnePercent}%</div>
                                        </div>
                                        <i className="m-auto">{question.optionOne.votes.length} out of {TotalVotes} votes</i>
                                    </li>
                                    <li className="card border-dark bg-light card-bottom">
                                        {users[authedUser].answers[question.id] === 'optionTwo' ?
                                            <div className="card-img-overlay img-overlay-optionTwo">
                                                <img className="text-right img-overlay-size" src={yourVote} alt="logo" />
                                            </div>
                                            : ''}
                                        <span> {optionTwo} </span> <br />
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: optionTwoPercent + ("%") }}
                                                aria-valuenow={optionTwoPercent} aria-valuemin="0" aria-valuemax="100">
                                                {optionTwoPercent}%</div>
                                        </div>
                                        <i className="m-auto">{question.optionTwo.votes.length} out of {TotalVotes} votes</i>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
