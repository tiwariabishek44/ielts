// FillInParagraphQuestion.js

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

const FillInParagraphQuestion = ({ questionSet, partIndex }) => {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answers?.[partIndex] || {});

  const handleInputChange = (questionNo) => (e) => {
    const value = e.target.value.trim();
    dispatch(answerQuestion(partIndex, questionNo, value));
  };

  const renderParagraph = () => {
    const parts = questionSet.paragraph.split('{BLANK:');
    return parts.map((part, index) => {
      if (index === 0) return part;
      const [blankNum, ...rest] = part.split('}');
      const questionNo = questionSet.questions.find(q => q.questionNo === parseInt(blankNum)).questionNo;
      return (
        <React.Fragment key={index}>
          <BlankInput 
            placeholder={blankNum} 
            onChange={handleInputChange(questionNo)}
            value={answers[questionNo] || ''}
          />
          {rest.join('}')}
        </React.Fragment>
      );
    });
  };

  return (
    <QuestionContainer>
      <Paragraph strong>{questionSet.title}</Paragraph>
      <Paragraph>{renderParagraph()}</Paragraph>
    </QuestionContainer>
  );
};

export default FillInParagraphQuestion;