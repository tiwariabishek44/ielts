// src/actions/index.js

// Action to mark a question as answered
export const answerQuestion = (partIndex, questionNo, answer) => ({
  type: 'ANSWER_QUESTION',
  partIndex,
  questionNo,
  answer
});

// Action to reset answered questions (if needed)
export const resetAnsweredQuestions = () => ({
  type: 'RESET_ANSWERED_QUESTIONS'
});

// Action to change the current part
export const changePart = (partIndex) => ({
  type: 'CHANGE_PART',
  partIndex
});

// Action to update the passage width (if you want to make this a Redux state)
export const updatePassageWidth = (width) => ({
  type: 'UPDATE_PASSAGE_WIDTH',
  payload: width
});

// Action to start the test timer (if you implement a timer feature)
export const startTimer = () => ({
  type: 'START_TIMER'
});

// Action to stop the test timer
export const stopTimer = () => ({
  type: 'STOP_TIMER'
});