import React, { useRef } from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

const ResponseBox = ({text, action}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{
        borderWidth: 2,
        borderColor: '#FFF',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        marginVertical: 7,
      }}>
      <Text
        color="#FFF"
        fontSize={14}
        fontWeight={'light'}
        textAlign={'center'}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ResponseBox;
