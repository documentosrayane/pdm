import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './Routes/MainNavigator'

function App () {
  return (
    <NavigationContainer>
      <MainNavigation></MainNavigation>
    </NavigationContainer>
  );
}

export default App;
