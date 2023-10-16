import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { usuario } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text>Ola {usuario.email}</Text>
      <Button title="Sair" onPress={() => {}} />
    </View>
  );
};

export default Home;