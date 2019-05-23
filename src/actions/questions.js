import { saveQuestionAnswer } from '../utils/api'
import { handleInitialData } from './shared'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

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