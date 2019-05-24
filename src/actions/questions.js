import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { handleInitialData } from './shared'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
    .then((optionOneText, optionTwoText) => dispatch(addQuestion(optionOneText, optionTwoText)))
    .then(() => dispatch(hideLoading()))
  }
}

export function handleSaveQuestionAnswer(state) {
  return dispatch => {
    dispatch(showLoading())

    return saveQuestionAnswer({
      ...state
    })
      .then(() => dispatch(handleInitialData(state.authedUser)))
      .then(() => dispatch(hideLoading()))
  }
}


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}