import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    }

    handleChange = (e) => {
        const optionText = e.target.value
        const name = e.target.name

        this.setState(() => ({
            [name]: optionText
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state

        const { dispatch } = this.props
        dispatch(handleAddQuestion(optionOneText, optionTwoText))


        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true
        }))
    }

    render() {

        const { optionOneText, optionTwoText, toHome } = this.state
        const disableSubmit = optionOneText === '' ? true: optionTwoText === ''
        const spaceOptionOne = 50 - optionOneText.length
        const spaceOptionTwo = 50 - optionTwoText.length

        if(toHome === true) {
            return <Redirect to='/home' />
        }
        return (
            <div>
                <h3 className="center">Create New Question</h3> <br />
                <span>Complete the question:</span>
                <h3>Would you Rather ...</h3>
                <form className="new-question" onSubmit={this.handleSubmit}>
                    <span>1: </span>
                    <input
                        type="text"
                        placeholder="Enter Option One Text here"
                        value={optionOneText}
                        name="optionOneText"
                        onChange={this.handleChange}
                        className="option-text"
                        maxLength={50}
                    />
                    {spaceOptionOne <= 50 && (
                        <span className="question-length">
                            <small><i> {spaceOptionOne}</i></small>
                        </span>
                    )}

                    <br /><br />
                    <span>2: </span>
                    <input
                        type="text"
                        placeholder="Enter Option Two Text here"
                        value={optionTwoText}
                        name="optionTwoText"
                        onChange={this.handleChange}
                        className="option-text"
                        maxLength={50}
                    />
                    {spaceOptionOne <= 50 && (
                        <span className="question-length">
                            <small><i> {spaceOptionTwo}</i></small>
                        </span>
                    )} 
                    <br />
                    <button className="btn" type="submit" disabled={disableSubmit} >
                        Submit
                </button>
                </form>


            </div>
        )
    }
}


function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)