import { useContext } from 'react';
import { View } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';

import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const { logout } = useContext(AuthContext);

  const handleExit = () => {
    logout();
  };

  return (
    <View sytle={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <Appbar.Action icon="exit-to-app" onPress={handleExit} />
      </Appbar.Header>
    </View>
  );
};

export default Home;