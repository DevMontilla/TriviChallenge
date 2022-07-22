import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, Image} from 'native-base';
import TriviaLogo from '../assets/img/trivia-logo.png';
import useQuestionnaire from '../hooks/useQuestionnaire';

const Header = ({text}) => {
  const navigation = useNavigation();
  const {cleanContext} = useQuestionnaire()

  const handlerOnPress = () => {
    cleanContext()
    navigation.navigate('HomeScreen')
  }

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10
      }}>
      <Image
        style={{
          height: 40,
          width: 79.2,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
        resizeMode="contain"
        alt="logo"
        source={TriviaLogo}
      />
      <Button
        variant="ghost"
        size="sm"
        onPress={handlerOnPress}>
        {text && <Text>{text === 'atrás' ? `< ${text}` : `x ${text}`}</Text>}
      </Button>
    </View>
  );
};

export default Header;
