import {useContext} from 'react';
import QuestionnaireContext from '../context/QuestionnaireContext';

const useQuestionnaire = () => useContext(QuestionnaireContext);

export default useQuestionnaire;
