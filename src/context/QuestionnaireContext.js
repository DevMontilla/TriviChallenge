import React, {useState, createContext} from 'react';

const QuestionnaireContext = createContext({
  totalQuestions: [],
  setTotalQuestions: () => {},
  results: [],
  setResults: () => {},
  infoLevel: {},
  setInfoLevel: () => {},
  cleanContext: () => {}
});

export const QuestionnaireProvider = ({children}) => {
  const [results, setResults] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState();
  const [infoLevel, setInfoLevel] = useState();

  const cleanContext = () => {
    setTotalQuestions([])
    setResults([])
    setInfoLevel({})
  }

  return (
    <QuestionnaireContext.Provider
      value={{
        results,
        setResults,
        totalQuestions,
        setTotalQuestions,
        infoLevel,
        setInfoLevel,
        cleanContext
      }}>
      {children}
    </QuestionnaireContext.Provider>
  );
};

export default QuestionnaireContext;
