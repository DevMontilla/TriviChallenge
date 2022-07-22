import {View, Text} from 'react-native';
import React from 'react';

const WhiteBox = ({children}) => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        height: '60%',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        zIndex: 1000
      }}>
      {children}
    </View>
  );
};

export default WhiteBox;
