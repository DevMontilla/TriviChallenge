import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';

const CategoryIndicator = ({categoryName, backgroundColor}) => {
  return (
    <View style={{backgroundColor, padding: 10, borderRadius: 5}}>
      <Text
      isTruncated 
      maxW="220"
        color="#FFF"
        fontWeight={13}
        fontWeight={'medium'}
        textTransform={'uppercase'}>
        {categoryName}
      </Text>
    </View>
  );
};

export default CategoryIndicator;
