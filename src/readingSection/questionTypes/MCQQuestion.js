// MCQQuestion.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Typography, Checkbox, Radio } from 'antd';
import { answerQuestion } from '../../utils/actions';

const { Paragraph, Text } = Typography;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MCQQuestion = ({ question, partIndex, optionsToSelect }) => {
  const dispatch = useDispatch();
  const answers = useSelector(state => {
    if ('questionNo' in question) {
      return state.answers[partIndex]?.[question.questionNo] || [];
    } else {
      return Object.keys(question.questionNos).map(qNo => 
        state.answers[partIndex]?.[qNo] || null
      );
    }
  });

  const handleChange = (checkedValues) => {
    if (optionsToSelect === 1) {
      dispatch(answerQuestion(partIndex, question.questionNo, checkedValues));
    } else {
      Object.keys(question.questionNos).forEach((qNo, index) => {
        dispatch(answerQuestion(partIndex, parseInt(qNo), checkedValues[index] || null));
      });
    }
  };

  const renderOptions = () => {
    if (optionsToSelect === 1) {
      return (
        <Radio.Group onChange={(e) => handleChange(e.target.value)} value={answers[0]}>
          {question.options.map((option, index) => (
            <Radio key={index} value={option.charAt(0)}>
              {option}
            </Radio>
          ))}
        </Radio.Group>
      );
    } else {
      return (
        <Checkbox.Group 
          onChange={handleChange} 
          value={answers.filter(a => a !== null)}
        >
          {question.options.map((option, index) => (
            <Checkbox key={index} value={option.charAt(0)}>
              {option}
            </Checkbox>
          ))}
        </Checkbox.Group>
      );
    }
  };

  return (
    <QuestionContainer>
      <Paragraph>
        <strong>
          {optionsToSelect === 1 
            ? `${question.questionNo}. ` 
            : `${Object.keys(question.questionNos).join(', ')}. `}
        </strong>
        {question.text}
      </Paragraph>
      <Text type="secondary">
        {optionsToSelect > 1 
          ? `Select ${optionsToSelect} options.` 
          : 'Select one option.'}
      </Text>
      <OptionsContainer>
        {renderOptions()}
      </OptionsContainer>
    </QuestionContainer>
  );
};

export default MCQQuestion;