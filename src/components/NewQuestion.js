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
        const disableSubmit = optionOneText === '' ? true : optionTwoText === ''
        const spaceOptionOne = 50 - optionOneText.length
        const spaceOptionTwo = 50 - optionTwoText.length

        if (toHome === true) {
            return <Redirect to='/home' />
        }
        return (
            <div className="card w-25 mx-auto card-margin-spacing">
                <div className="card-header">
                    <h3 className="App">Create New Question</h3>
                </div>
                <div className="container">
                    <span>Complete the question:</span><br /> <br />
                    <h4>Would you Rather ...</h4>
                    <form className="new-question" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder=" Enter Option One Text here"
                            value={optionOneText}
                            name="optionOneText"
                            onChange={this.handleChange}
                            className="form-control"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            maxLength={50}
                        />
                        {spaceOptionOne <= 50 && (
                            <span className="question-length">
                                <small><i> ( {spaceOptionOne} remaining ) </i></small>
                            </span>
                        )}

                        <h4 className="App">---- OR ----</h4>

                        <br />
                        <input
                            type="text"
                            placeholder=" Enter Option Two Text here"
                            value={optionTwoText}
                            name="optionTwoText"
                            onChange={this.handleChange}
                            className="form-control"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            maxLength={50}
                        />
                        {spaceOptionOne <= 50 && (
                            <span className="question-length">
                                <small><i> ( {spaceOptionTwo} remaining )</i></small>
                            </span>
                        )}
                        <br />
                        <button className="btn btn-info  btn-question" type="submit" disabled={disableSubmit} >
                            Submit
                        </button>
                    </form>
                </div>
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