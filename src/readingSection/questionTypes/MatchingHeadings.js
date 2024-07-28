import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph, Text } = Typography;

const HeadingList = styled.div`
  margin-top: 10px;
`;

const HeadingItem = styled.div`
  margin-bottom: 5px;
`;

const HeadingMatchingQuestion = ({ questionSet }) => {
  return (
    <>
      <Paragraph>{questionSet.instruction}</Paragraph>
      <Text strong>List of Headings:</Text>
      <HeadingList>
        {questionSet.headings.map((heading, index) => (
          <HeadingItem key={index}>
            {heading}
          </HeadingItem>
        ))}
      </HeadingList>
    </>
  );
};

export default HeadingMatchingQuestion;