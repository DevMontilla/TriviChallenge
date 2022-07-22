import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import LevelInfoScreen from '../screens/LevelInfoSceen'
import QuizScreen from '../screens/QuizScreen'
import EndTriviaScreen from '../screens/EndTriviaScreen'
import ResultScreen from '../screens/ResultScreen'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='HomeScreen'
            component={HomeScreen}
            options={{title: 'Home', headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen 
            name='LevelInfoScreen'
            component={LevelInfoScreen}
            options={{title: 'LevelInfo', headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen 
            name='QuizScreen'
            component={QuizScreen}
            options={{title: 'Quiz', headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen 
            name='EndTriviaScreen'
            component={EndTriviaScreen}
            options={{title: 'EndTrivia', headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen 
            name='ResultScreen'
            component={ResultScreen}
            options={{title: 'Result', headerShown: false, gestureEnabled: false}}
        />
    </Stack.Navigator>    
  )
}

export default Navigator