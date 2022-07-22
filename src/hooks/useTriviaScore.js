import {useState, useEffect} from 'react';

export const useTriviaScore = (totalQuestions, totalCorrectAnswers) => {
  const [color, setColor] = useState(['#31C50C']);
  const [percentage, setPercentage] = useState();

  const triviaPercentage = result => {
    return ((result / totalQuestions) * 100).toFixed();
  };

  useEffect(() => {
    setPercentage(triviaPercentage(totalCorrectAnswers));
  }, [totalCorrectAnswers]);

  useEffect(() => {
    const triviaFinalNote = triviaPercentage(totalCorrectAnswers);
    const trackColor = myResult => {
      switch (true) {
        case myResult < 50:
          setColor('#FF4040');
          break;
        case myResult >= 50 && myResult < 70:
          setColor('#F7B801');
          break;
        case myResult >= 70 && myResult <= 100:
          setColor('#00DB16');
        default:
          break;
      }
    };
    trackColor(triviaFinalNote);
  }, [totalCorrectAnswers]);

  return {color, percentage};
};
