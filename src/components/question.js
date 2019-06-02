import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';
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
        const { question, question_id } = this.props

        const { name, avatar, optionOne, optionTwo } = question

        return (
            <div className="card w-100 mx-auto">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
                        </div>
                        <div className="col-10">
                        <span>{name} asks:</span>
                <br />


                <div>
                    <h3>Would You Rather...</h3>
                    {optionOne} <small><i>- or -</i></small> {optionTwo}
                    {/* <input type="radio" name="vote" value={optionTwo} />{optionTwo} <br /> */}
                    <br />
                    <Link to={`/question/${question_id}`}>
                        <button className="btn btn-primary btn-question">View this Card!</button>
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