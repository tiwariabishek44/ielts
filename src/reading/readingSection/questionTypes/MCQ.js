import React from 'react';
import { Checkbox, Radio } from 'antd';

const MultipleChoiceQuestion = ({ question, options, selectMultiple, maxSelection }) => {
  return (
    <div>
      <p>{question}</p>
      {selectMultiple ? (
        <Checkbox.Group options={options} />
      ) : (
        <Radio.Group>
          {options.map((option, index) => (
            <Radio key={index} value={option}>{option}</Radio>
          ))}
        </Radio.Group>
      )}
    </div>
  );
};

export default MultipleChoiceQuestion;
