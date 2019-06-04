import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';
import { Link } from 'react-router-dom'

class Question extends Component {

    render() {
        const { question, question_id } = this.props
        const { name, avatar, optionOne } = question

        return (
            <div className="card w-100 mx-auto">
                <div className="card-header">
                    <span>{name} asks:</span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
                        </div>
                        <div className="col-10">
                            <br />
                            <div>
                                <h5>Would You Rather...</h5>
                                <small><i>...{optionOne}...</i></small>
                                <br />
                                <Link to={`/question/${question_id}`}>
                                    <button className="btn border-info btn-question">View this Card!</button>
                                </Link>
                            </div>
                        </div>
                    </div>
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
