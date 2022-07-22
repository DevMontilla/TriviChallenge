import React from 'react';
import {View, SafeAreaView, Platform} from 'react-native';
import WhiteBox from '../components/Background/WhiteBox';
import Header from '../components/Header';
import {Center, Heading, Text, Image} from 'native-base';
import BlueBox from '../components/Background/BlueBox';
import MyButton from '../components/Button';
import ClapEmoji from '../assets/img/clap-emoji.png';
import {useNavigation} from '@react-navigation/core';
import ResultCircle from '../components/ResultCircle';
import useQuestionnaire from '../hooks/useQuestionnaire';
import {useTriviaScore} from '../hooks/useTriviaScore';

const ResultScreen = () => {
  const navigator = useNavigation();
  const {results, totalQuestions, cleanContext} = useQuestionnaire();

  const sumValues = obj => {
    let finalResult = 0;
    obj.forEach(answ => (finalResult = finalResult + answ.godAnswer));
    return finalResult;
  };

  const {percentage, color} = useTriviaScore(
    totalQuestions.length,
    sumValues(results),
  );

  const handlerButton = () => {
    cleanContext(),
    navigator.navigate('HomeScreen')
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <WhiteBox>
        <Header />
        <Center flex={1}>
          <View
            style={{
              position: 'absolute',
              top: 30,
              paddingHorizontal: 15,
              width: '90%',
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Heading fontSize={27} fontWeight={'semibold'} textAlign="center">
                {percentage < 70
                  ? 'PUEDES HACERLO MEJOR !!!'
                  : 'FELICITACIONES !!!'}
              </Heading>
            </View>
            <Center mt={5}>
              <ResultCircle
                percentage={percentage}
                totalQuestions={totalQuestions.length}
                correctAnswers={sumValues(results)}
                color={color}
              />
            </Center>
            <Text fontSize={16} fontWeight={'medium'} textAlign="center" mt={5}>
              {percentage < 70 ? 'Que no decaiga !!' : 'Aaah BUEEEEE... !!'}
            </Text>
          </View>
        </Center>
      </WhiteBox>
      <BlueBox>
        <Center
          position={'absolute'}
          top={Platform.OS === 'ios' ? '87%' : '107%'}
          width={'100%'}>
          <Heading
            color="#FFF"
            fontSize={28}
            fontWeight={'bold'}
            textAlign="center"
            mx={3}>
            {percentage < 70
              ? 'A SEGUIR ESTUDIANDO !!'
              : 'TUS PUÑOS ESTAN LLENOS DE VERDADES !!'}
          </Heading>
          <Image
            source={ClapEmoji}
            alt="Celebration Emoji"
            size="2xl"
            resizeMode="contain"
            height={121}
            mt={percentage < 70 ? 6 : 0}
          />
        </Center>
        <View
          style={{
            position: 'absolute',
            bottom: Platform.OS === 'ios' ? '18%' : '10%',
            width: '100%',
          }}>
          <MyButton
            buttonText="Volver a jugar"
            action={handlerButton}
          />
        </View>
      </BlueBox>
    </SafeAreaView>
  );
};

export default ResultScreen;
