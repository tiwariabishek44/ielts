import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Radio, Typography } from 'antd';
import { answerQuestion } from '../../utils/actions';

const { Paragraph } = Typography;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const TrueFalseQuestion = ({ question, partIndex }) => {
  const dispatch = useDispatch();
  const answer = useSelector(state => state.answers[partIndex]?.[question.questionNo]);

  const handleAnswerChange = (e) => {
    dispatch(answerQuestion(partIndex, question.questionNo, e.target.value));
  };

  return (
    <QuestionContainer>
      <Paragraph>
        <strong>{question.questionNo}. </strong>
        {question.text}
      </Paragraph>
      <Radio.Group onChange={handleAnswerChange} value={answer}>
        <Radio value="true">True</Radio>
        <Radio value="false">False</Radio>
      </Radio.Group>
    </QuestionContainer>
  );
};

export default TrueFalseQuestion;