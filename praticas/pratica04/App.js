import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

function Home(props) {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <Appbar.Action icon={() => <Ionicons name="exit-outline" />} onPress={props.onLogout} />
      </Appbar.Header>
    </View>
  );
}

export default Home;