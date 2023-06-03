import React from 'react'
import Navigation from './navigator/navigation'

import { NavigationContainer } from '@react-navigation/native';

import { NativeBaseProvider } from 'native-base';


const App = () => {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Navigation/>
      </NavigationContainer>
      </NativeBaseProvider>
  )
}

export default App