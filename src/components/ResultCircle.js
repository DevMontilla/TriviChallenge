import React from 'react';
import {View} from 'react-native';
import {Center, Text} from 'native-base';

const ResultCircle = ({percentage, totalQuestions, correctAnswers, color}) => {
  return (
    <View
      style={{
        borderWidth: 5,
        borderRadius: 100,
        borderColor: color,
        width: 170,
        height: 170,
        justifyContent: 'center',
      }}>
      <Center>
        <Text color={color} fontSize={16} fontWeight={'medium'}>
          {percentage < 70 ? 'MMM ...' : 'MUY BIEN !!'}
        </Text>
        <Text color={color} fontSize={50} fontWeight={'bold'}>
          {percentage}%
        </Text>
        <Text color={color} fontSize={16} fontWeight={'medium'}>
          {correctAnswers}/{totalQuestions}
        </Text>
      </Center>
    </View>
  );
};

export default ResultCircle;
