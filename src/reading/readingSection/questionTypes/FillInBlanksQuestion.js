import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Typography, Input } from 'antd';
import { answerQuestion } from '../../utils/actions';

const { Paragraph } = Typography;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const BlankInput = styled(Input)`
  width: 120px;
  margin: 0 5px;

  ::placeholder {
    font-weight: 600;
    color: #003366;
  }
`;

const FillInTheBlankQuestion = ({ question, partIndex }) => {
  const dispatch = useDispatch();
  const answer = useSelector(state => state.answers[partIndex]?.[question.questionNo] || '');

  const handleInputChange = (e) => {
    dispatch(answerQuestion(partIndex, question.questionNo, e.target.value));
  };

  const renderQuestionText = () => {
    const parts = question.text.split('{BLANK:');
    return parts.map((part, index) => {
      if (index === 0) return part;
      const [blankNum, ...rest] = part.split('}');
      return (
        <React.Fragment key={index}>
          <BlankInput 
            placeholder={`${blankNum}`} 
            onChange={handleInputChange}
            value={answer}
          />
          {rest.join('}')}
        </React.Fragment>
      );
    });
  };

  return (
    <QuestionContainer>
      <Paragraph>
        <strong>{question.questionNo}. </strong>
        {renderQuestionText()}
      </Paragraph>
    </QuestionContainer>
  );
};

export default FillInTheBlankQuestion;