import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Center, Heading, Text} from 'native-base';
import WhiteBox from '../components/Background/WhiteBox';
import BlueBox from '../components/Background/BlueBox';
import Header from '../components/Header';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import CategoryIndicator from '../components/CategoryIndicator';
import ResponseBox from '../components/ResponseBox';
import {timeInMinutes} from '../utils/timeInMinutes';
import useQuestionnaire from '../hooks/useQuestionnaire';
import {useNavigation} from '@react-navigation/core';

const QuizScreen = () => {
  const navigator = useNavigation();
  const [index, setIndex] = useState(0);
  const {totalQuestions, infoLevel, setResults, results} = useQuestionnaire();
  const quot = /&quot;|&#039;/gi;
  const ampersand = /&amp;/gi;
  const umlaut = /&Uuml;/gi;

  const renderTime = ({remainingTime}) => {
    if (remainingTime === 0) {
      return <Text textAlign="center">Demasiado tarde...</Text>;
    }

    return (
      <Center>
        <Text>Te quedan</Text>
        <Text fontWeight="bold">{timeInMinutes(remainingTime)}</Text>
        {remainingTime > 60 ? <Text>minutos</Text> : <Text>segundos</Text>}
      </Center>
    );
  };

  const nextQuestion = (question, godAnswer, index, answer) => {
    setResults([...results, {question: index, answer, godAnswer, question}]);
    setIndex(prevIndex => prevIndex + 1);
  };

  const handlerCountdown = () => {
    navigator.navigate('EndTriviaScreen', {
      timeOver: true,
    });
  };

  const renderAsks = (question, index, correctAnswer, incorrectAnswers) => {
    const allAnswers = [{answer: correctAnswer, correct: true}];
    if (index === totalQuestions.length)
      navigator.navigate('EndTriviaScreen', {
        timeOver: false,
      });
    incorrectAnswers?.map(answer => {
      allAnswers.push({
        answer: answer.replace(quot, "'" || ampersand, '&' || umlaut, 'ü'),
        correct: false,
      });
    });
    return allAnswers.sort((a,b)=>{
      if (a.answer > b.answer) {
        return 1;
      }
      if (a.answer < b.answer) {
        return -1;
      }
      return 0;
    }).map(answer => {
      return (
        <ResponseBox
          text={answer.answer}
          action={() =>
            nextQuestion(
              question.replace(quot, "'" || ampersand, '&' || umlaut, 'ü'),
              answer.correct,
              index + 1,
              answer,
            )
          }
        />
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <WhiteBox>
        <Header text={'cancelar'} />
        <Center flex={1}>
          <View
            style={{
              position: 'absolute',
              top: 30,
              paddingHorizontal: 15,
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Heading
                fontSize={21}
                fontWeight={'semibold'}
                textAlign="center"
                color={'#00B0DB'}>
                {index < totalQuestions.length
                  ? `Pregunta ${index + 1}`
                  : 'Final'}
              </Heading>
              <CategoryIndicator
                categoryName={`${totalQuestions[index]?.category}`}
                backgroundColor={'green'}
              />
            </View>
            <Text fontSize={21} fontWeight={'light'} textAlign="center" mt={5}>
              {totalQuestions[index]?.question.replace(
                quot,
                "'" || ampersand,
                '&' || umlaut,
                'ü',
              )}
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: 30}}>
            <CountdownCircleTimer
              isPlaying
              duration={infoLevel.time}
              colors={['#00DB16', '#F7B801', '#FF4040']}
              colorsTime={[420, 7, 0]}
              size={120}
              strokeWidth={7}
              onComplete={handlerCountdown}>
              {renderTime}
            </CountdownCircleTimer>
          </View>
        </Center>
      </WhiteBox>
      <BlueBox>
        <Center flex={1} mt={-5}>
          {renderAsks(
            `${totalQuestions[index]?.question.replace(
              quot,
              "'" || ampersand,
              '&' || umlaut,
              'ü',
            )}`,
            index,
            `${totalQuestions[index]?.correct_answer.replace(
              quot,
              "'" || ampersand,
              '&' || umlaut,
              'ü',
            )}`,
            totalQuestions[index]?.['incorrect_answers'],
          )}
        </Center>
      </BlueBox>
    </SafeAreaView>
  );
};

export default QuizScreen;
