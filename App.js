/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

if (__DEV__) {
  import('.//config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import {QuestionnaireProvider} from './src/context/QuestionnaireContext';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <QuestionnaireProvider>
          <Navigator />
        </QuestionnaireProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
