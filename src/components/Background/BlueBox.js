import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';

const BlueBox = ({children}) => {
  return (
    <View style={style.mainContainer}>
      {children}
    </View>
  );
};

export default BlueBox;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#00B0DB',
    height: '80%',
    paddingTop: Platform.OS === 'ios' ? '72%' : '80%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
});
