import React from 'react';
import {SafeAreaView} from 'react-native';
import {Center, Heading, Text} from 'native-base';
import WhiteBox from '../components/Background/WhiteBox';
import BlueBox from '../components/Background/BlueBox';
import MyButton from '../components/Button';
import {AirbnbRating} from 'react-native-ratings';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/core';
import useQuestionnaire from '../hooks/useQuestionnaire';
import { timeInMinutes } from '../utils/timeInMinutes';

const LevelInfoScreen = () => {
  const navigator = useNavigation()
  const {totalQuestions, infoLevel} = useQuestionnaire()

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <WhiteBox>
        <Header text={'atrás'}/>
        <Center pt={'15%'}>
          <Heading fontSize={50} fontWeight={'medium'}>
            {infoLevel.levelName}
          </Heading>
          <AirbnbRating
            defaultRating={infoLevel.ranking}
            reviews={[]}
            isDisabled={true}
            starContainerStyle={{width: '90%', justifyContent: 'space-around', marginBottom: 40}}
            size={50}
          />
          <Text fontSize={27} fontWeight={'light'}>
            {infoLevel.difficulty}
          </Text>
        </Center>
      </WhiteBox>
      <BlueBox>
        <Center mb={'6%'}>
          <Text fontSize={19} fontWeight={'light'} color={'#FFF'}>Cantidad de preguntas</Text>
          <Text fontSize={19} fontWeight={'bold'} color={'#FFF'}>{totalQuestions.length}</Text>
          <Text fontSize={19} fontWeight={'light'} color={'#FFF'}>Tiempo para responder</Text>
          <Text fontSize={19} fontWeight={'bold'} color={'#FFF'}>{timeInMinutes(infoLevel.time)} min</Text>
          <Text fontSize={19} fontWeight={'light'} color={'#FFF'}>Dificultad de las preguntas</Text>
          <Text fontSize={19} fontWeight={'bold'} color={'#FFF'}>{infoLevel.difficulty}</Text>
        </Center>
        <MyButton buttonText="Jugar" action={()=>navigator.navigate('QuizScreen')}/>
      </BlueBox>
    </SafeAreaView>
  );
};

export default LevelInfoScreen;
