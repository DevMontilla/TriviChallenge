import React from 'react';
import {Button, Text} from 'native-base';

const MyButton = ({buttonText, action}) => {
  return (
    <Button
      onPress={action}
      size="lg"
      background="#00B0DB"
      borderWidth={2}
      borderColor="#FFF"
      mx={5}
      my={1}>
      <Text
        color="#FFF"
        fontWeight="bold"
        fontSize={20}
        textTransform="uppercase">
        {buttonText}
      </Text>
    </Button>
  );
};

export default MyButton;
