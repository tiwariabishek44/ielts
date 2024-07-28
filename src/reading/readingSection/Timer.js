// Timer.js
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Timer = ({ totalSeconds, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  const handleTimeUp = useCallback(() => {
    if (onTimeUp && typeof onTimeUp === 'function') {
      onTimeUp();
    }
  }, [onTimeUp]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerId);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, handleTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <TimerContainer>
      Time Remaining: {formatTime(timeLeft)}
    </TimerContainer>
  );
};

export default Timer;