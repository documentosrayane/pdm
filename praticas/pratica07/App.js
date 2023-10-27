import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Register from './screens/Register';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Register />
      </SafeAreaView>
    </>
  );
};

export default App;