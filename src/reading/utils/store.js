// store.js
import { createStore } from 'redux';

const initialState = {
  currentPart: 0,
  answeredQuestions: {},
  answers: {} // Initialize the answers object
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answeredQuestions: {
          ...state.answeredQuestions,
          [action.partIndex]: {
            ...state.answeredQuestions[action.partIndex],
            [action.questionNo]: true
          }
        },
        answers: {
          ...state.answers,
          [action.partIndex]: {
            ...state.answers[action.partIndex],
            [action.questionNo]: action.answer
          }
        }
      };
    case 'CHANGE_PART':
      return {
        ...state,
        currentPart: action.partIndex
      };
    // Add other cases if needed
    default:
      return state;
  }
}

const store = createStore(rootReducer);
export default store;
