import React, { Component } from 'react'
import { connect } from 'react-redux'


class User extends Component {
    render() {
        const { user } = this.props
        const { name, avatarURL } = user
        const questionsLength = user.questions.length
        const answeredQuestions = Object.keys(user.answers).length
        const total = questionsLength + answeredQuestions
        return (
            <div className="card w-50 mx-auto" style={{ marginTop: "20px", height: "7rem" }}>
                <div className="row">
                    <div className="col">
                        <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
                    </div>
                    <div className="col-6">
                        <h4>{name}</h4>
                        <span>Answered Questions: {answeredQuestions} </span> <br />
                        <span>Created Questions: {questionsLength}</span> <br />
                    </div>
                    <div className="col-4">
                        <div className="card w-100 mx-auto" style={{ height: "6rem", marginTop: "10px", marginBottom: "10px" }}>
                            <div className="card-header text-center">
                                Score
                        </div>
                            <span className="numberCircle m-auto">{total}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }F
}

function mapStateToProps({ users }, { id }) {
    return {
        user: users[id],
    }
}

export default connect(mapStateToProps)(User)