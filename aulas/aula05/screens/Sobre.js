import { View, Text, Button } from 'react-native';

const Sobre = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Sobre</Text>
      <Button title="Ir Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Sobre;
