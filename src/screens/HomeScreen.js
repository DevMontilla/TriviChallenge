import React from 'react';
import {SafeAreaView} from 'react-native';
import {Center, Image} from 'native-base';
import WhiteBox from '../components/Background/WhiteBox';
import BlueBox from '../components/Background/BlueBox';
import MyButton from '../components/Button';
import TriviaLogo from '../assets/img/trivia-logo.png';
import {useNavigation} from '@react-navigation/core';
import useQuestionnaire from '../hooks/useQuestionnaire';
import {
  easyQuestions,
  hardQuestions,
  intermediateQuestions,
  leyendQuestions,
} from '../api/questions';

const HomeScreen = () => {
  const navigator = useNavigation();
  const {setTotalQuestions, setInfoLevel} = useQuestionnaire();

  const getEasyQuestions = async () => {
    try {
      const response = await easyQuestions();
      setTotalQuestions(response.data.results);
      setInfoLevel({
        levelName: 'Nivel 1',
        ranking: 1,
        difficulty: 'Fácil',
        time: 420,
      });
      navigator.navigate('LevelInfoScreen');
    } catch (error) {
      console.log({error});
    }
  };

  const getIntermediateQuestions = async () => {
    try {
      const response = await intermediateQuestions();
      setTotalQuestions(response.data.results);
      setInfoLevel({
        levelName: 'Nivel 2',
        ranking: 2,
        difficulty: 'Intermedio',
        time: 300,
      });
      navigator.navigate('LevelInfoScreen');
    } catch (error) {
      console.log({error});
    }
  };

  const getHardQuestions = async () => {
    try {
      const response = await hardQuestions();
      setTotalQuestions(response.data.results);
      setInfoLevel({
        levelName: 'Nivel 3',
        ranking: 3,
        difficulty: 'Difícil',
        time: 180,
      });
      navigator.navigate('LevelInfoScreen');
    } catch (error) {
      console.log({error});
    }
  };

  const getLeyendQuestions = async () => {
    try {
      const response = await leyendQuestions();
      setTotalQuestions(response.data.results);
      setInfoLevel({
        levelName: 'Nivel 5',
        ranking: 5,
        difficulty: 'Leyenda',
        time: 120,
      });
      navigator.navigate('LevelInfoScreen');
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <WhiteBox>
        <Center mt={'25%'}>
          <Image
            source={TriviaLogo}
            alt="Trivia Logooo"
            size="2xl"
            resizeMode="contain"
          />
        </Center>
      </WhiteBox>
      <BlueBox>
        <MyButton buttonText="Fácil" action={getEasyQuestions} />
        <MyButton buttonText="Intermedio" action={getIntermediateQuestions} />
        <MyButton buttonText="Difícil" action={getHardQuestions} />
        <MyButton buttonText="Leyenda" action={getLeyendQuestions} />
      </BlueBox>
    </SafeAreaView>
  );
};

export default HomeScreen;
