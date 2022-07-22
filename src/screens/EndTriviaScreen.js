import {View, SafeAreaView, Platform} from 'react-native';
import React from 'react';
import WhiteBox from '../components/Background/WhiteBox';
import Header from '../components/Header';
import {Center, Heading, Text, Image} from 'native-base';
import BlueBox from '../components/Background/BlueBox';
import MyButton from '../components/Button';
import DeceptionEmoji from '../assets/img/deception-emoji.png';
import CelebrationEmoji from '../assets/img/celebration-emoji.png';
import {useNavigation} from '@react-navigation/core';

const EndTriviaScreen = ({route}) => {
  const {timeOver} = route.params
  const navigator = useNavigation();

  const returnText = (badText, godText) => {
    if (timeOver) {
      return badText
    } else {
      return godText
    }
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
              width: '100%',
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Heading fontSize={27} fontWeight={'semibold'} textAlign="center">
                {returnText('UPS !!!', 'FELICITACIONES !!!')}
              </Heading>
              <Text fontSize={27} fontWeight={'semibold'} textAlign="center">
              {returnText('Te quedaste sin tiempo', 'Respondiste todas las preguntas')}
              </Text>
            </View>
            <Center mt={3}>
              <Image
                source={timeOver ? DeceptionEmoji : CelebrationEmoji}
                alt="Celebration Emoji"
                size="2xl"
                resizeMode="contain"
                height={161}
              />
            </Center>
            <Text fontSize={16} fontWeight={'medium'} textAlign="center" mt={5}>
            {returnText('Ay que negro tan lento !!', 'EEEEEEESIIIIIIIIIIIII !!')}
            </Text>
          </View>
        </Center>
      </WhiteBox>
      <BlueBox>
        <Center flex={1} mb={'25%'} px={10}>
          <Heading
            color="#FFF"
            fontSize={28}
            fontWeight={'bold'}
            textAlign="center">
            {returnText('NO TE DESANIMES !!', 'ASI SE HACE !!')}
          </Heading>
          <Text
            color="#FFF"
            fontSize={23}
            fontWeight={'medium'}
            textAlign="center">
            {returnText('La próxima vez lo vas a hacer mejor', 'Sos increíble, completaste todo el cuestionario')}
          </Text>
        </Center>
        <View style={{position: 'absolute', bottom: Platform.OS === 'ios' ? '18%' : '10%', width: '100%'}}>
          <MyButton
            buttonText="Ver resultados"
            action={() => navigator.navigate('ResultScreen')}
          />
        </View>
      </BlueBox>
    </SafeAreaView>
  );
};

export default EndTriviaScreen;
