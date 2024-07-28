import React, { useState } from 'react';

const ShortAnswer = ({ question, onAnswer, onNext }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(question.id, answer);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{question.text}</p>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={4}
        cols={50}
      />
      <button type="submit">Next</button>
    </form>
  );
};

export default ShortAnswer;
